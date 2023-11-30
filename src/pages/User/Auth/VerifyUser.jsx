/* eslint-disable react/no-unescaped-entities */
import { FormProvider, useForm } from "react-hook-form";

import {
    //   Link,
    useNavigate,
} from 'react-router-dom';
import { LoadingButton } from "@mui/lab";

import {
    // Checkbox,
    // Button,
    // FormControlLabel
    CircularProgress,
} from '@mui/material';
// import { useDispatch } from 'react-redux';
import ValidatedInput from '../../../components/forms/ValidatedInput';
import { showToast } from '../../../redux/store.hook';
// import { setUserDetails, setUserToken } from '../../redux/slice/authSlice';
import { handleError } from '../../../utils';
import LandingPageLayout from "../../../templates/LandingPageLayout";
import TextWithLinesBg from "../../../components/TextWithLinesBg";
import theme from "../../../theme";
import { useUserVerifyOtpMutation } from "../../../services/auth.api";

const VerfiyUser = () => {
    const navigate = useNavigate();
    // const dispatch = useDispatch();
    const methods = useForm({
        mode: "onSubmit",
    });
    const [verifyUser, { isLoading }] = useUserVerifyOtpMutation();
    const onSubmit = async data => {
        // console.log(data)
        try {
            let res = await verifyUser(data).unwrap();
            showToast(res?.msg);
            // console.log(res)
            // dispatch(setUserToken(res?.data?.token));
            // dispatch(setUserDetails(res?.data));
            navigate("/user/dashboard")

        } catch (error) {
            handleError(error);
        }
    }


    return (
        <LandingPageLayout
        // nav={false}
        // footer={false}
        >
            <main className="pt10 lg:pt-0 max-w-[1170px] -mx-4 sm:-mx-6 md:mx-auto flex flex-col items-center">

                <TextWithLinesBg uppercase={false} text={'Let\'s get you verified'} />

                <span className="w-full py-3 sm:py-4 text-sm sm:text-base font-semibold text-[#3FF7A6] border-2 text-center md:mb-8  border-[#3FF7A6] max-w-[300px] sm:max-w-[375px] md:max-w-[500px] mx-4 sm:mx-6 md:mx-auto">
                    Kindly check your mail
                </span>
                <div className="gradietBorder py-[4.5rem] px-4 sm:px-6 w-full max-w-[951px] mxauto before:rounded-[24px] md:rounded-[24px] md:bg-[#16236D]/70 ">
                    <FormProvider {...methods}>
                        <form
                            action=""
                            onSubmit={methods.handleSubmit(onSubmit)}
                            className="max-w-[512px] mx-auto w-full flex flex-col justifycenter gap-6 md:gap-10 "
                        >
                            <ValidatedInput
                                // label='Email'
                                name='otp'
                                type="text"
                                inputMode='numeric'
                                placeholder="1234"
                            />
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
                                style={{ background: theme.palette.primary.mainGradient, maxWidth: '335px', margin: '0 auto' }}
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                VERIFY
                            </LoadingButton>
                        </form>
                    </FormProvider>
                </div>
            </main>
        </LandingPageLayout>

    );
};

export default VerfiyUser;
