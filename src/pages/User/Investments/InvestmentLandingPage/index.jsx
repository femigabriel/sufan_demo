import { Button } from "@mui/material";
import LandingPageLayout from "../../../../templates/LandingPageLayout";
import TextWithLinesBg from "../../../../components/TextWithLinesBg";
import theme from "../../../../theme";
import InvestmentLandingPageLayout from "./InvestmentLandingPageLayout";
import IPOCollapse from "./IPOCollapse";
import { FaqPage } from "./FaqPage";
import { StartInvestment } from "./StartInvestment";
import React, { useState } from "react";
import { Slider, Switch } from "antd";

export const InvestmentLandingPage = () => {
  const [disabled, setDisabled] = useState(false);
  const onChange = (checked) => {
    setDisabled(checked);
  };

  return (
    <div>
      <InvestmentLandingPageLayout>
        <main className="max-w-[1170px] mx-auto flex flex-col">
          <section className="">
            <div className="flex justify-center">
              <div>
                <h3 className="text-white lg:text-6xl md:text-4xl sm:text-xl tracking-[-2%] mb-5 ">
                  Start your Investment now
                </h3>
                <p className="text-[#D1E4FF] lg:text-lg text-sm lg:w-[40em] font-normal lg:px-7 lg:text-center">
                  Designed by creators, for creators. Example gives you the
                  guidance, data and innovation you need to sell more and growth
                  your digital business.
                </p>
                <div className="my-5 lg:my-10 flex justify-center">
                  <Button
                    href={`/user/investments/purchase`}
                    variant="contained"
                    style={{
                      background: theme.palette.primary.mainGradient,
                      width: "148px",
                      mt: "auto",
                    }}
                  >
                    PURCHASE
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-6 md:gap-10">
            <div className="flex justify-center items-center">
              <img
                src="/assets/images/investmentImg.svg"
                className=""
                alt="investmentImage"
                draggable="false"
              />
            </div>
            <div className="lg:flex lg:gap-[75px] lg:px-5 pxx-5 ">
              <img
                src="/assets/images/chooseImg.png"
                className="lg:w-full md:w-[85%] sm:w-[65%]"
                alt="investmentImage"
                draggable="false"
              />
              <div className="lg:mt-32">
                <h3 className="text-white lg:text-[1.65em] md:text-4xl sm:text-xl mb-3 tracking-[-2%]">
                  Choose your percentage
                </h3>
                <div className="text-[#D1E4FF] text-sm border-l-4 border-[#39CEF3]">
                  <p className="ml-5 lg:w-[32em]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis ullamcorper, dui sit amet molestie tincidunt, sapien
                    dui auctor quam, in feugiat massa dui ut leo.
                  </p>
                </div>
                <div className="lg:w-[436px] my-5">
                  <Slider defaultValue={30} disabled={disabled} />
                </div>
                <div className="flex justify-center mt-12">
                  <Button
                    href={`/user/investments/purchase`}
                    variant="contained"
                    style={{
                      background: theme.palette.primary.mainGradient,
                      width: "148px",
                      mt: "auto",
                    }}
                  >
                    PURCHASE
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="py-10 w-full">
            <div className="flex justify-center py-7 pb-10">
              <div>
                <h3 className="text-white lg:text-5xl md:text-4xl sm:text-xl mb-3 tracking-[-2%] mb-5 text-center">
                  Choose your IPO
                </h3>
                <p className="text-[#D1E4FF] text-lg lg:w-[40em] font-normal lg:px-7 text-center">
                  Designed by creators, for creators. Example gives you the
                  guidance, data and innovation you need to sell more and growth
                  your digital business.
                </p>
              </div>
            </div>
            <div className="w-full">
              <IPOCollapse />
            </div>
          </section>

          <FaqPage />
          <StartInvestment />
        </main>
      </InvestmentLandingPageLayout>
    </div>
  );
};
