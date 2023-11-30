/* eslint-disable react/prop-types */
import { Button, CircularProgress } from "@mui/material";
import ClockIcon from "../../../../components/Vectors/ClockIcon";
import theme from "../../../../theme";
import { useState } from "react";
import { useCreatePaymentCheckoutSessionMutation } from "../../../../services/payment.api";
import { useGetUser } from "../../../../hooks/getUserHook";
import { LoadingButton } from "@mui/lab";
// import { showToast } from "../../../../redux/store.hook";
// import StripeIntegration from "../Stripe";
import { handleError } from "../../../../utils";
import { useNavigate, useLocation } from "react-router-dom";

const SelectTierCard = ({ availablePlans, serviceId }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useGetUser();
  // const [clientSecret, setClientSecret] = useState("");
  const [presentStep, setPresentStep] = useState(1);

  const plansList = Object.entries(availablePlans).map((obj, i) => ({
    id: i + 1,
    title: obj[0],
    plans: obj[1],
  }));

  const findCurrentPlan = plansList.find((plan) => plan.id === presentStep);

  const [createPaymentCheckoutSession, { isLoading }] =
    useCreatePaymentCheckoutSessionMutation();

  const body = {
    userId: user?._id,
    priceId: findCurrentPlan.plans.priceId,
    channel: "stripe",
    subscriptionId: serviceId,
    quantity: 1,
  };
  // console.log(body)
  const checkout = async () => {
    console.log(body);
    if (user && user !== null) {
      try {
        const res = await createPaymentCheckoutSession(body).unwrap();
        console.log(res);
        // showToast(res?.msg);
        window.location.replace(res?.data?.url);
        // window.location.href = res?.data?.session?.url;
        // setClientSecret(res?.data?.paymentIntentData?.client_secret);
      } catch (error) {
        handleError(error);
      }
    } else {
      console.log("Take me to the login page");
      navigate(`/user/dashboard?redirectTo=${location.pathname}`, {
        state: location,
      });
    }
  };

  // if (clientSecret)
  //   return (
  //     <StripeIntegration clientSecret={clientSecret} email={user?.email} />
  //   );

  return (
    <div className="gradientBorder pb-6 text-white before:rounded-[10px] card bg-[#16236D]/70 p-4 rounded-[10px]">
      <p className="mt-0.5 mb-7 font-semibold text-xl md:text-2xl">
        Select your tier
      </p>

      <div className="pb-6 mb-6 flex justify-between border-b border-[#384593]">
        {plansList.map((step) => {
          return (
            <button
              key={step.id}
              type="button"
              onClick={() => setPresentStep(+step.id)}
              className={`flex cursor-pointer transition-all duration-200 flex-col items-center ${
                presentStep === step.id
                  ? "text-white font-medium"
                  : "text-text-blue  font-normal"
              }`}
            >
              <span className="rounded-full flx relative justify-center items-center border border-white w-4 h-4">
                <span
                  className={`${
                    presentStep === step.id ? "block" : "hidden"
                  } rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[9px] h-[9px] bg-gradient-to-r from-[#15A4FB] to-[#3FF7A6]`}
                ></span>
              </span>

              <p className="mt-4 uppercase">{step.title}</p>
              <p className="mt-0.5">${step.plans.cost}</p>
            </button>
          );
        })}
      </div>

      <BodyComp
        comp={findCurrentPlan.plans}
        checkout={checkout}
        isLoading={isLoading}
      />
    </div>
  );
};

export default SelectTierCard;

const BodyComp = ({ comp, checkout, isLoading }) => {
  return (
    <div>
      <p className="font-semibold text-base">{comp.title}</p>

      <p className="font-normal mt-1 text-sm text-text-blue">{comp.subTitle}</p>

      <div className="flex flex-col my-6  gap-4">
        <span className="font-normal text-sm flex justify-between items-center">
          <p className="font-normal text-sm">Delivery Time</p>
          <p>{comp.components.deliveryTime} days</p>
        </span>
        <span className="font-normal text-sm flex justify-between items-center">
          <p className="font-normal text-sm">Number of Revisions</p>
          <p>{comp.components.numberOfRevisions}</p>
        </span>
        <span className="font-normal text-sm flex justify-between items-center">
          <p className="font-normal text-sm">Number of Pages</p>
          <p>{comp.components.numberOfPages}</p>
        </span>
        <span className="font-normal text-sm flex justify-between items-center">
          <p className="font-normal text-sm">Design Customization</p>
          {comp.components.designCustomization ? (
            <img src="/images/check.png" alt="check-mark" />
          ) : null}
        </span>
        <span className="font-normal text-sm flex justify-between items-center">
          <p className="font-normal text-sm">Content Upload</p>
          {comp.components.contentUpload ? (
            <img src="/images/check.png" alt="check-mark" />
          ) : null}
        </span>
        <span className="font-normal text-sm flex justify-between items-center">
          <p className="font-normal text-sm">Responsive design</p>
          {comp.components.responsiveDesign ? (
            <img src="/images/check.png" alt="check-mark" />
          ) : null}
        </span>
      </div>

      <div className="flex gap-4 mb-[30px]">
        <ClockIcon />
        <div>
          <p className="font-semibold text-base">
            {comp.components.deliveryTime} days delivery -{" "}
            {new Date(
              new Date().setDate(
                new Date().getDate() + comp.components.deliveryTime
              )
            ).toDateString()}
          </p>

          <p className="font-normal mt-1 text-sm text-text-blue">
            Revisions may occur after this date.
          </p>
        </div>
      </div>

      <LoadingButton
        // href={'/dashboard?tab=manage_orders'}
        variant="contained"
        loadingIndicator={
          <CircularProgress
            sx={{
              color: "#fff",
            }}
            size="1.2rem"
          />
        }
        loading={isLoading}
        onClick={checkout}
        fullWidth
        style={{ background: theme.palette.primary.mainGradient }}
      >
        ORDER NOW
      </LoadingButton>

      <Button
        href={"/user/dashboard?tab=business_chat"}
        variant="contained"
        fullWidth
        color="secondary"
        sx={{ mt: "13px" }}
      >
        Chat for Custom Offer
      </Button>
    </div>
  );
};

// const steps = [
//   {
//     id: 1,
//     label: 'STARTER',
//     value: '$725'
//   },
//   {
//     id: 2,
//     label: 'PRO',
//     value: '$1725'
//   },
//   {
//     id: 3,
//     label: 'MAX',
//     value: '$2725'
//   },
// ]
