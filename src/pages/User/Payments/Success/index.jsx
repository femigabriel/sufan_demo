/* eslint-disable react/no-unescaped-entities */
import LandingPageLayout from "../../../../templates/LandingPageLayout";
import TextWithLinesBg from "../../../../components/TextWithLinesBg";
import { useEffect, useState } from "react";
import { handleError } from "../../../../utils";
import { useVerifyPaymentIntentMutation } from "../../../../services/payment.api";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { green } from "@mui/material/colors";
import Fab from "@mui/material/Fab";
import CheckIcon from "@mui/icons-material/Check";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { showToast } from "../../../../redux/store.hook";
import { useNavigate } from "react-router-dom";

const PaymentSuccessPage = () => {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [verifyPaymentIntent, { isLoading }] = useVerifyPaymentIntentMutation();
  // const navigate = useNavigate()
  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      "&:hover": {
        bgcolor: green[700],
      },
    }),
  };
  const body = {
    uuid: new URLSearchParams(window.location.search).get("uuid"),
    userId: new URLSearchParams(window.location.search).get("userId"),
  };
  const verifyPaymentWithTheServer = async () => {
    // Fetch data or perform other loading logic here
    try {
      const res = await verifyPaymentIntent(body).unwrap();
      if (res?.success) {
        setSuccess(true);
        setError(false);
        showToast("Payment verified successdully!");
        console.log(res);
        navigate("/user/dashboard");
      } else {
        setSuccess(false);
        setError(true);
        showToast(res?.msg, "error");
        navigate("/user/dashboard");
      }
    } catch (error) {
      setSuccess(false);
      setError(true);
      handleError(error);
    }
  };

  useEffect(() => {
    verifyPaymentWithTheServer();
  }, []); // Pass an empty array to only call the function once on mount.
  return (
    <LandingPageLayout>
      <main className="max-w-[1170px] mx-auto flex flex-col items-center">
        <TextWithLinesBg text="Payment Verification" />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ m: 1, position: "relative" }}>
            <Fab aria-label="save" color="primary" sx={buttonSx}>
              {success ? (
                <CheckIcon />
              ) : (
                <WarningAmberIcon onClick={verifyPaymentWithTheServer} />
              )}
            </Fab>
            {isLoading && (
              <CircularProgress
                size={68}
                sx={{
                  color: green[500],
                  position: "absolute",
                  top: -6,
                  left: -6,
                  zIndex: 1,
                }}
              />
            )}
          </Box>
          <Box sx={{ m: 1, position: "relative", color: "white" }}>
            {!isLoading && error && (
              <p>An error occured! Click the button on the left to retry!</p>
            )}
          </Box>
        </Box>
      </main>
    </LandingPageLayout>
  );
};

export default PaymentSuccessPage;
