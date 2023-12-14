import { Button } from "@mui/material";
import LandingPageLayout from "../../../../templates/LandingPageLayout";
import TextWithLinesBg from "../../../../components/TextWithLinesBg";
import theme from "../../../../theme";
import InvestmentLandingPageLayout from "./InvestmentLandingPageLayout";
import IPOCollapse from "./IPOCollapse";
import { FaqPage } from "./FaqPage";
import { StartInvestment } from "./StartInvestment";
import React, { useState } from "react";
// import { Slider, Switch } from "antd";
// import { Col, InputNumber, Row, Slider, Space } from "antd";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const formatter = (value) => `${value}%`;

export const InvestmentLandingPage = () => {
  const [disabled, setDisabled] = useState(false);

  const [inputValue, setInputValue] = useState(40);
  const onChange = (newValue) => {
    setInputValue(newValue);
  };

  function valuetext(value) {
    return `${value}°%`;
  }

  const minDistance = 40;

  const [value1, setValue1] = useState([0, 40]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  return (
    <div>
      <InvestmentLandingPageLayout>
        <main className="max-w-[1170p] w-full mx-auto flex flex-col">
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
                    href={`/user/login?redirectTo=/user/dashboard`}
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

          <section className="flex flex-col gap-6 md:gap-10 w-full">
            <div className="flex justify-center items-center">
              <img
                src="/assets/images/investmentImg.svg"
                className=""
                alt="investmentImage"
                draggable="false"
              />
            </div>
            <div className="lg:flex justify-between lg:px-24 px-5 ">
              <div className="">
                <div className="flex relative lg:left-[350px] lg:my-0 mb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="101"
                    height="46"
                    viewBox="0 0 81 46"
                    fill="none"
                    className="lg:mt-2 mt-3"
                  >
                    <path
                      d="M81 1.76465H24.5694L0.999998 44.7646"
                      stroke="#CDCDCD"
                      stroke-width="2"
                      stroke-dasharray="10 10"
                    />
                  </svg>
                  <div className="w-full ml-2">
                    <span className="text-[#39CEF3] text-2xl font-semibold ">
                      {value1[1]}%
                    </span>
                    <p className="text-white text-sm">Already Purchased</p>
                  </div>
                </div>
                <div className="lg:flex justify-between">
                  <img
                    src="/images/slider-1.png"
                    className="lg:w-full md:w-[85%] sm:w-[65%] x-transition"
                    alt="investmentImage"
                    style={{ transform: `rotate(${0-(parseFloat(value1[1])/10)}deg)` }}
                    draggable="false"
                  />
                </div>
                <div className="relative flex lg:left-40 mb-20 lg:mb-0">
                  <div className=" mr-5">
                    <span className="text-[#39CEF3] text-2xl font-semibold">
                      40%
                    </span>
                    <p className="text-white text-sm">Available Now</p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="99"
                    height="40"
                    viewBox="0 0 99 40"
                    fill="none"
                    className=""
                  >
                    <path
                      d="M0 38.7646H65.4408L98 0.764649"
                      stroke="#CDCDCD"
                      stroke-width="2"
                      stroke-dasharray="10 10"
                    />
                  </svg>
                </div>

              </div>
              <div className="lg:mt-14">
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
                  <Box sx={{ width: 450 }}>
                    <div className="flex gap-5">
                      <Slider
                        getAriaLabel={() => "Minimum distance"}
                        value={value1}
                        onChange={handleChange1}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        disableSwap
                      />

                      <div className="mt-1">
                        <span className="text-[#39CEF3]">100%</span>
                      </div>
                    </div>
                  </Box>
                  {/* <Row>
                    <Col span={16}>
                      <Slider
                        defaultValue={40}
                        disabled={disabled}
                        tooltip={{
                          formatter,
                        }}
                        min={0}
                        max={100}
                        onChange={onChange}
                        value={typeof inputValue === "number" ? inputValue : 0}
                      />
                      <input
                        type="range"
                        className="w-full"
                        min="0" 
                        max="100"
                        tooltip={{
                          formatter,
                        }}
                      />
                    </Col>
                    <Col span={4}>
                    
                      <div className="mt-1">
                        <span className="text-white ">100%</span>
                      </div>
                    </Col>
                  </Row> */}
                </div>
                <div className="flex justify-center mt-12">
                  <Button
                    href={`/user/login?redirectTo=/user/dashboard`}
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
                <h3 className="text-white lg:text-5xl md:text-4xl sm:text-xl tracking-[-2%] mb-5 text-center">
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
