import React from "react";
import { Input } from "antd";
import { Button } from "@mui/material";
import theme from "../../../../theme";

export const Newsletter = () => {
  return (
    <div className="bg-[#062880] py-14 lg:px-20 px-5">
      <div className="lg:flex justify-between">
        <div className="text-white">
          <h3 className=" text-xl font-semibold"> Join our newsletter</h3>
          <p className=" text-base">
            We’ll send you a nice letter once per week. No spam.
          </p>
        </div>
        <div className="flex gap-5">
          <Input
            type="email"
            placeholder="Enter your email"
            className="news-letter-input bg-white lg:w-[269px] text-[#ffff] text-base"
            pattern="^\S+@\S+\.\S+$"
          />

          <Button
            // href={`/user/investments/landing-page`}
            variant="contained"
            style={{
              background: "#ffff",
              //   width: "148px",
            //   mt: "auto",
              color: "#2238b4de",
              fontWeight: "600",
              border: " 1px solid #15A4FB",
              fontSize: "16px",
            }}
          >
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};
