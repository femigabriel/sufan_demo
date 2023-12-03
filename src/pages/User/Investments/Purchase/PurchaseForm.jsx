import React, { useState } from "react";
import { Input } from "antd";
import { Button } from "@mui/material";
import theme from "../../../../theme";

export const PurchaseForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      setError(true);
      return;
    }
    onSuccessCallback();
    e.preventDefault();
  };

  return (
    <div>
      <main className="lg:px-20 px-5 mx-auto flex flex-col">
        <section className="">
          <h3 className="text-[#fff] text-4xl font-semibold">
            Fill out forms for purchase
          </h3>
          <form className="py-10 mt-5 shadow-md">
            <div className="w-full lg:grid lg:grid-cols-4 flex border-[#EAECF066] border-b-2 py-5">
              <label className="py-3 px-3 lg:text-xl text-sm text-white">
                Email address
              </label>
              <input
                type="email"
                placeholder="e.g johndoe@lorem.com"
                className="form-input w-full lg:w-[512px] lg:h-[44px] text-[#ffff] text-base"
                pattern="^\S+@\S+\.\S+$"
                onChange={(e) => setEmail(e.target.value)}
              />
              {error && name.length <= 0 ? (
                <label className="text-red-400 font-semibold">
                  This field is required
                </label>
              ) : (
                ""
              )}
            </div>
            <div className="w-full lg:grid lg:grid-cols-4 flex border-[#EAECF066] border-b-2 py-5">
              <label className="py-3 px-3 lg:text-xl text-sm text-white">Password</label>
              <div className="lg:w-[600px]">
                <input
                  placeholder="*******"
                  type="password"
                  className="form-input w-full lg:w-[512px] lg:h-[44px] text-[#ffff] text-base"
                />
                {/* <p className="mt-2 text-[#D1E4FF] text-[14px]">
                  Your new password must be more than 8 characters.
                </p> */}
              </div>
            </div>
            <div className="border-[#EAECF066] border-b-2 w-full">
              <div className="w-full lg:grid lg:grid-cols-4 flex py-5">
                <label className="py-3 px-3 lg:text-xl text-sm text-white">
                  First name
                </label>
                <input
                  type="text"
                  placeholder="e.g john"
                  className="form-input w-full lg:w-[512px] lg:h-[44px] text-[#ffff] text-base"
                  pattern="^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$"
                />
              </div>

              <div className="w-full lg:grid lg:grid-cols-4 flex py-5">
                <label className="py-3 px-3 lg:text-xl text-sm text-white">
                  Last name
                </label>
                <input
                  type="text"
                  placeholder="e.g Doe"
                  className="form-input w-full lg:w-[512px] lg:h-[44px] text-[#ffff] text-base"
                  pattern="^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$"
                />
              </div>

              <div className="w-full lg:grid lg:grid-cols-4 flex py-5">
                <label className="py-3 px-3 lg:text-xl text-sm text-white">
                  Phone number
                </label>
                <input
                  type="text"
                  placeholder="e.g +1 234567890"
                  className="form-input w-full lg:w-[512px] lg:h-[44px] text-[#ffff] text-base"
                  pattern="^\+[1-9]{1}[0-9]{3,14}$"
                />
              </div>

              <div className="w-full lg:grid lg:grid-cols-4 flex py-5">
                <label className="py-3 px-3 lg:text-xl text-sm text-white">
                  Mailing address
                </label>
                <input
                  type="email"
                  placeholder="e.g johndoe@lorem.com"
                  className="form-input lg:w-[512px] lg:h-[44px] text-[#ffff] text-base"
                  pattern="^\S+@\S+\.\S+$"
                />
              </div>
            </div>
            <div className="flex justify-between">
              <span></span>
              <div className="flex my-7 justify-center gap-5">
                <Button
                  // href={`/user/investments/landing-page`}
                  variant="contained"
                  style={{
                    background: "#243bbd",
                    //   width: "148px",
                    mt: "auto",
                    color: "#ffff",
                    border: " 1px solid #15A4FB",
                    fontSize: "16px",
                  }}
                  onSubmit={handleSubmit}
                >
                  Book a Session
                </Button>
                <Button
                  href={`/user/investments/landing-page`}
                  variant="contained"
                  style={{
                    background: theme.palette.primary.mainGradient,
                    //   width: "148px",
                    mt: "auto",
                    fontSize: "16px",
                  }}
                >
                  Purchase
                </Button>
              </div>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};
