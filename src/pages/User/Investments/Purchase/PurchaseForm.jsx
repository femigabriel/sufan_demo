
import React, { useState } from "react";
import { Input } from "antd";
import { Button } from "@mui/material";
import theme from "../../../../theme";
import TextWithLinesBg from "../../../../components/TextWithLinesBg";
import { useNavigate } from "react-router-dom";

export const PurchaseForm = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [lastname, setLastname] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!password || !email || !phone || !firstName || !lastname) {
      setErrorMessage(true);
      return;
    }
    navigate("/user/investments");
  };
  return (
    <div>
      <main className="pt10 lg:pt-0 max-w-[1170px] -mx-4 sm:-mx-6 md:mx-auto flex flex-col items-center">
        <TextWithLinesBg
          uppercase={false}
          text={"Fill out forms for purchase"}
        />

        <div className="gradietBorder py-[4.5rem] px-4 sm:px-6 w-full max-w-[951px] mxauto before:rounded-[24px] md:rounded-[24px] md:bg-[#16236D]/70 ">
          <form
            action=""
            // onSubmit={methods.handleSubmit(onSubmit)}
            // className="max-w mx-auto w-full flex flex-col gap-6 md:gap-10 "
            onSubmit={handleSubmit}
            className="max-w-[512px] mx-auto w-full flex flex-col justifycenter gap-6 md:gap-10 "
          >
            <div className="w-full flex flex-col ">
              <label className="py-3 px-3 text-base text-white font-semibold">
                Email
              </label>
              <input
                type="email"
                placeholder="eample@lorem.com"
                className="form-input w-full lg:w-[512px] lg:h-[54px] text-base "
                pattern="^\S+@\S+\.\S+$"
                onChange={(e) => setEmail(e.target.value)}
              />
              {errorMessage && email.length <= 0 ? (
                <label className="text-[#F13737] text-[0.750em]">
                  This field is required
                </label>
              ) : (
                ""
              )}
            </div>

            <div className="w-full flex flex-col">
              <label className="py-3 px-3 text-base text-white font-semibold">
                Password
              </label>
              <input
                placeholder="*******"
                type="password"
                className="form-input w-full lg:w-[512px] lg:h-[54px] text-base "
                // pattern="^\S+@\S+\.\S+$"
                onChange={(e) => setPassword(e.target.value)}
              />
              {errorMessage && password.length <= 0 ? (
                <label className="text-[#F13737] text-[0.750em]">
                  This field is required
                </label>
              ) : (
                ""
              )}
            </div>

            <div className="w-full flex flex-col">
              <label className="py-3 px-3 text-base text-white font-semibold">
                First Name
              </label>
              <input
                placeholder="Meghan"
                type="text"
                className="form-input w-full lg:w-[512px] lg:h-[54px] text-base "
                pattern="^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$"
                onChange={(e) => setFirstName(e.target.value)}
              />
              {errorMessage && firstName.length <= 0 ? (
                <label className="text-[#F13737] text-[0.750em]">
                  This field is required
                </label>
              ) : (
                ""
              )}
            </div>

            <div className="w-full flex flex-col">
              <label className="py-3 px-3 text-base text-white font-semibold">
                Last Name
              </label>
              <input
                placeholder="Miller"
                type="text"
                className="form-input w-full lg:w-[512px] lg:h-[54px] text-base "
                pattern="^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$"
                onChange={(e) => setLastname(e.target.value)}
              />
              {errorMessage && lastname.length <= 0 ? (
                <label className="text-[#F13737] text-[0.750em]">
                  This field is required
                </label>
              ) : (
                ""
              )}
            </div>

            <div className="w-full flex flex-col">
              <label className="py-3 px-3 text-base text-white font-semibold">
                Phone Number
              </label>
              <input
                type="text"
                className="form-input w-full lg:w-[512px] lg:h-[54px] text-base "
                placeholder="+1 234567890"
                pattern="^\+[1-9]{1}[0-9]{3,14}$"
                onChange={(e) => setPhone(e.target.value)}
              />
              {errorMessage && phone.length <= 0 ? (
                <label className="text-[#F13737] text-[0.750em]">
                  This field is required
                </label>
              ) : (
                ""
              )}
            </div>
            <div className="flex gap-10 justify-center">
              {/* <button
                className="bg-[#243bbd] py-3  rounded-md"
                style={{
                  width: "188px",
                  mt: "auto",
                  color: "#ffff",
                  border: " 1px solid #15A4FB",
                  fontSize: "16px",
                }}
                href={`/user/investments/landing-page`}
              >
                Book a Session
              </button> */}
              <button
                className="py-3 px-10 rounded-md"
                style={{
                  background: theme.palette.primary.mainGradient,
                  width: "148px",
                  mt: "auto",
                  fontSize: "16px",
                }}
              >
                Purchase
              </button>
            </div>
            {/* <div className="flex justify-between">
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
                  // onSubmit={handleSubmit}
                >
                  Book a Session
                </Button>
                <Button
                  // href={`/user/investments`}
                  variant="contained"
                  style={{
                    background: theme.palette.primary.mainGradient,
                    //   width: "148px",
                    mt: "auto",
                    fontSize: "16px",
                  }}
                  onSubmit={handleSubmit}
                >
                  Purchase
                </Button>
              </div>
            </div> */}
          </form>
        </div>
      </main>
    </div>
  );
};
