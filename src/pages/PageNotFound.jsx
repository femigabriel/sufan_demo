/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import {Button} from "@mui/material";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import {useNavigate} from "react-router-dom";
import ErrorMascot from "../components/Vectors/ErrorMascot";
import NotFoundSvg from "../components/Vectors/NotFoundSvg";
import theme from "../theme";

export function ErrorBoundaryFallback({error, resetErrorBoundary}) {
  return (
    <>
      <section className="relative flex min-h-screen w-full items-center justify-center bg-grey_100 md:py-6 md:px-8">
        <div className="mb-12 flex h-screen min-h-[300px] w-full max-w-[600px] flex-col items-center justify-center rounded-2xl bg-grey_90 px-6 py-12 md:h-auto lg:rounded-[35px]">
          <ErrorMascot className="mt-auto md:mt-0" />
          <p className="font-Bai text-2xl font-semibold tracking-[-4%] md:text-4xl">
            Oops!
          </p>
          <p className="mt-2 text-center font-Mulish text-base font-[400] text-grey_30">
            Looks like the page you're trying to visit is broken <br />{" "}
            {error.message}
          </p>
          <div className="mt-auto w-full space-y-4 md:mt-10 md:max-w-[270px]">
            <Button variant="contained" fullWidth onClick={resetErrorBoundary}>
              Try again
            </Button>
            <Button variant="outlined" fullWidth component="a" href="/">
              Go Home
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
export function PageNotFound() {
  const navigate = useNavigate();
  return (
    <>
      <section className="relative my-auto h-screen text-white flex w-full bg-main-bg items-center justify-center md:py-6 md:px-8">
        <div className="mb-12 flex min-h-[300px] w-full max-w-[600px] flex-col items-center justify-center rounded-2xl px-6 py-12 lg:rounded-[35px]">
          <NotFoundSvg className="mb-4" />
          <p className="font-Bai text-2xl font-semibold tracking-[-4%] md:text-4xl">
            Error 404
          </p>
          <p className="mt-2 text-center font-Mulish text-base font-[400] text-grey_30">
            Oops! Looks like the page you're trying to visit is broken or cannot
            be found
          </p>
          <div className="mt-10 w-full space-y-4 md:max-w-[270px]">
            <Button variant="contained" style={{background:theme.palette.primary.mainGradient}} fullWidth onClick={() => navigate(-1)}>
              Go Back
            </Button>
            {/* <Button variant="outlined" fullWidth component="a" href="/">
              Go Home
            </Button> */}
          </div>
        </div>
      </section>
    </>
  );
}
export default function ErrorMsg({error}) {
  const navigate = useNavigate();

  return (
    <section className="relative flex w-full items-center justify-center py-6 px-4 md:px-8">
      <div className="mb-12 flex min-h-[200px] w-full max-w-[600px] flex-col items-center justify-center px-6 py-12 lg:rounded-[35px]">
        <ErrorMascot />
        <h3 className="text-center font-Bai text-xl font-semibold tracking-[-4%] md:text-4xl">
          Oops, Error
        </h3>
        <p className="mt-2 text-center font-Mulish text-base font-[400] text-grey_30">
          {error?.status === "FETCH_ERROR"
            ? "Please check your internet connection and try again..."
            : error?.data?.message}
        </p>
      </div>
      {error?.goBack && (
        <Button
          onClick={() => navigate("/admin/account")}
          endIcon={<ArrowForwardIosOutlinedIcon />}
          sx={{p: "0.8rem !important", mt: 2}}
          variant="outlined"
          size="small"
          color="error"
        >
          Go to my dashboard
        </Button>
      )}
    </section>
  );
}
