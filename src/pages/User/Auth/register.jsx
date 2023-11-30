/* eslint-disable react/no-unescaped-entities */
import { FormProvider, useForm } from "react-hook-form";

import {
    Link,
    useNavigate,
} from 'react-router-dom';
import { LoadingButton } from "@mui/lab";

import {
    // Checkbox,
    // FormControlLabel
    CircularProgress,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { useUserSignUpWithEmailMutation } from '../../../services/auth.api';
import ValidatedInput from '../../../components/forms/ValidatedInput';
import { showToast } from '../../../redux/store.hook';
import { setUserDetails, setUserEmail, setUserToken } from '../../../redux/slice/authSlice';
import { handleError } from '../../../utils';
// import AuthLayout from "../../templates/AuthLayout";
import TextWithLinesBg from "../../../components/TextWithLinesBg";
import LandingPageLayout from "../../../templates/LandingPageLayout";
import theme from "../../../theme";
import { useEffect } from "react";

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { setError,
        formState: { errors },
    } = useForm()
    const methods = useForm({
        mode: "onSubmit",

    });
    const [registerUser, { isLoading }] = useUserSignUpWithEmailMutation();
    useEffect(() => {

    }, [setError])

    const onSubmit = async data => {
        if (data.password !== data.confirmPassword) {
            setError("password", {
                type: "custom",
                message: "Password Do Not Match",
            })
            return null;
        }

        // console.log(data)

        try {
            let res = await registerUser(data).unwrap();
            showToast(res?.msg);
            // console.log(res)
            dispatch(setUserToken(res?.data?.token));
            dispatch(setUserDetails(res?.data));
            dispatch(setUserEmail(data.email));
            navigate("/user/verify-otp")

        } catch (error) {
            handleError(error);
            if (error?.data?.message === 'user already exist, please sign in') {
                navigate("/user/login")
            }
        }
    }


    return (
        <LandingPageLayout
        // nav={false}
        // footer={false}
        >
            <main className="pt10 lg:pt-0 max-w-[1170px] -mx-4 sm:-mx-6 md:mx-auto flex flex-col items-center">

                <TextWithLinesBg uppercase={false} text={'Let\'s get you signed up'} />

                <div className="gradietBorder py-[4.5rem] px-4 sm:px-6 w-full max-w-[951px] mxauto before:rounded-[24px] md:rounded-[24px] md:bg-[#16236D]/70 ">
                    <FormProvider {...methods}>
                        <form
                            action=""
                            onSubmit={methods.handleSubmit(onSubmit)}
                            className="max-w-[512px] mx-auto w-full flex flex-col justifycenter gap-6 md:gap-10 "
                        >
                            <ValidatedInput
                                label='Username'
                                name={'username'}
                                type="text"
                                placeholder="exampleusername"
                            />
                            <ValidatedInput
                                label='Full Name'
                                name={'fullName'}
                                type="text"
                                placeholder="Jenny Jane"
                            />
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
                            {errors.password && <p className='font-bold  text-error text-xs !-mt-4 md:!-mt-8'>{errors.password.message}</p>}

                            <ValidatedInput
                                label='Confirm Password'
                                name={'confirmPassword'}
                                type="password"
                                placeholder="******"
                            />
                            {errors.password && <p className='font-bold  text-error text-xs !-mt-4 md:!-mt-8'>{errors.password.message}</p>}



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
                                SIGN UP
                            </LoadingButton>

                            <span className="self-center text-white font-Poppins flex gap-2.5 items-center text-base md:text-lg">
                                Already have an account?

                                <Link
                                    className="bg-clip-text !font-Poppins font-semibold text-transparent bg-gradient-to-r from-[#15A4FB] to-[#3FF7A6] "
                                    to={`/user/login`}
                                >
                                    Login Now!
                                </Link>
                            </span>
                        </form>
                    </FormProvider>
                </div>
            </main>
        </LandingPageLayout>

    );
};

export default Register;
