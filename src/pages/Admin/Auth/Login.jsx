/* eslint-disable react/no-unescaped-entities */
import { FormProvider, useForm } from "react-hook-form";

import {
  Link,
  useNavigate,
} from 'react-router-dom';
import { LoadingButton } from "@mui/lab";

import {
  // Checkbox,
  // Button,
  // FormControlLabel
  CircularProgress,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { useAdminLoginMutation, } from '../../../services/auth.api';
import ValidatedInput from '../../../components/forms/ValidatedInput';
import { showToast } from '../../../redux/store.hook';
import { setUserDetails, setUserToken } from '../../../redux/slice/authSlice';
import { handleError } from '../../../utils';
import LandingPageLayout from "../../../templates/LandingPageLayout";
import TextWithLinesBg from "../../../components/TextWithLinesBg";
import theme from "../../../theme";

const AdminLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const methods = useForm({
    mode: "onSubmit",
  });
  const [login, { isLoading }] = useAdminLoginMutation();
  const onSubmit = async data => {
    // console.log(data)
    try {
      let res = await login(data).unwrap();
      showToast(res?.msg);
      // console.log(res)
      dispatch(setUserToken(res?.data?.token));
      dispatch(setUserDetails(res?.data?.admin));
      navigate("/admin/dashboard")

    } catch (error) {
      handleError(error);

    }
  }


  return (
    <LandingPageLayout
      type={'admin'}
    // nav={false}
    // footer={false}
    >
      <main className="pt10 lg:pt-0 max-w-[1170px] -mx-4 sm:-mx-6 md:mx-auto flex flex-col items-center">

        <TextWithLinesBg uppercase={false} text={'Let\'s get you back in'} />

        <div className="gradietBorder py-[4.5rem] px-4 sm:px-6 w-full max-w-[951px] mxauto before:rounded-[24px] md:rounded-[24px] md:bg-[#16236D]/70 ">
          <FormProvider {...methods}>
            <form
              action=""
              onSubmit={methods.handleSubmit(onSubmit)}
              className="max-w-[512px] mx-auto w-full flex flex-col justifycenter gap-6 md:gap-10 "
            >
              <ValidatedInput
                label='Email'
                name='email'
                type="email"
                placeholder="example@email.com"
                rules={{
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid email address",
                  },
                }}
              />
              <ValidatedInput
                label='Password'
                name={'password'}
                type="password"
                placeholder="******"
              />

              <span className="self-end wfull text-white font-Poppins flex gap-2.5 items-center text-base md:text-lg">
                Forgot Password?

                <Link
                  className="bg-clip-text !font-Poppins font-semibold text-transparent bg-gradient-to-r from-[#15A4FB] to-[#3FF7A6] "
                  to={`#`}
                >
                  Reset Now!
                </Link>
              </span>
              <LoadingButton
                loadingIndicator={
                  <CircularProgress
                    sx={{
                      color: "#fff",
                    }}
                    size="1.2rem"
                  />
                }
                type="submit"
                loading={isLoading}
                style={{ background: theme.palette.secondary.mainGradient, maxWidth: '335px', margin: '0 auto' }}
                fullWidth
                variant="contained"
                color="primary"
              >
                SIGN IN
              </LoadingButton>

              {/* <span className="self-center text-white font-Poppins flex gap-2.5 items-center text-base md:text-lg">
                Don't have an account?

                <Link
                  className="bg-clip-text !font-Poppins font-semibold text-transparent bg-gradient-to-r from-[#15A4FB] to-[#3FF7A6] "
                  to={`/admin/create-admin`}
                >
                  Sign Up Now!
                </Link>
              </span> */}
            </form>
          </FormProvider>
        </div>
      </main>
    </LandingPageLayout>

  );
};

export default AdminLogin;
