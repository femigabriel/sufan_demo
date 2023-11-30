import React from "react";
import { Button } from "@mui/material";
import theme from "../../../../theme";

export const StartInvestment = () => {
  return (
    <div>
      <div>
        <h3 className="text-white text-4xl text-center tracking-[-2%] mb-5">
          Start your Investments now!
        </h3>
        <p className="text-[#D1E4FF] text-lg lg:w-[40em] font-normal lg:px-7 text-center">
          Join over 4,000+ startups already growing with Untitled.
        </p>
        <div className="flex my-7 justify-center gap-5">
          <Button
            href={`/user/investments/landing-page`}
            variant="contained"
            style={{
              background: "#ffff",
              //   width: "148px",
              mt: "auto",
              color: "#344054",
            }}
          >
            Learning More
          </Button>
          <Button
            href={`/user/investments/landing-page`}
            variant="contained"
            style={{
              background: theme.palette.primary.mainGradient,
              //   width: "148px",
              mt: "auto",
            }}
          >
            Get Started
          </Button>
        </div>
      </div>

      <img
               src="/assets/images/startInvestment.png"

        draggable="false"
        alt="serviceImage"
      />
    </div>
  );
};
