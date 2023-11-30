/* eslint-disable react/prop-types */
import StripeCheckoutForm from "./StripeCheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "./styles.scss";

// const STRIPE_KEY =
//     import.meta.env.VITE_APP_STRIPE_KEY

//     console.log(STRIPE_KEY)

const stripePromise = loadStripe(
  "pk_test_51NZrNbCUAnsEcjI8EWgEduHVrqavlRPWUmXCWwVMxlhwXt1ZABojbohg9B2yNPKqSxHLhVukWmVBKNpnIcacc0gG00YGNAPxev"
);

const StripeIntegration = ({ clientSecret, email }) => {
  const appearance = {
    theme: "stripe",
  };

  const options = {
    clientSecret,
    appearance,
  };
  return (
    <div className="stripe">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <StripeCheckoutForm ClientSecret={clientSecret} Email={email} />
        </Elements>
      )}
    </div>
  );
};

export default StripeIntegration;
