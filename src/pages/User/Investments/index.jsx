import React from "react";
import { Button } from "@mui/material";
import LandingPageLayout from "../../../templates/LandingPageLayout";
import TextWithLinesBg from "../../../components/TextWithLinesBg";
import theme from "../../../theme";
import { services } from "../../../utils/data";
import { truncateString } from "../../../utils";

const items = [
  {
    id: 1,
    title: "NeuraCase",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper, dui sit amet molestie tincidunt, sapien dui auctor quam, in feugiat massa dui ut leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper, dui sit amet molestie tincidunt, sapien dui auctor quam, in feugiat massa dui ut leo.",
    serviceImage: (
      <img
        src="/assets/images/investment1.svg"
        alt="serviceImage"
        className=" rounded-[15px] min-w-full h-full object-contain"
      />
    ),
  },
  {
    id: 2,
    title: "VaccuMizer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper, dui sit amet molestie tincidunt, sapien dui auctor quam, in feugiat massa dui ut leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper, dui sit amet molestie tincidunt, sapien dui auctor quam, in feugiat massa dui ut leo.",
    serviceImage: (
      <img
        src="/assets/images/investment1.svg"
        alt="serviceImage"
        className=" rounded-[15px] min-w-full h-full object-contain"
      />
    ),
  },
  {
    id: 3,
    title: "Bernandazzi",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper, dui sit amet molestie tincidunt, sapien dui auctor quam, in feugiat massa dui ut leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper, dui sit amet molestie tincidunt, sapien dui auctor quam, in feugiat massa dui ut leo.",
    serviceImage: (
      <img
        src="/assets/images/investment1.svg"
        alt="serviceImage"
        className=" rounded-[15px] min-w-full h-full object-contain"
      />
    ),
  },
  {
    id: 4,
    title: "Minellium",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper, dui sit amet molestie tincidunt, sapien dui auctor quam, in feugiat massa dui ut leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper, dui sit amet molestie tincidunt, sapien dui auctor quam, in feugiat massa dui ut leo.",
    serviceImage: (
      <img
        src="/assets/images/investment1.svg"
        alt="serviceImage"
        className=" rounded-[15px] min-w-full h-full object-contain"
      />
    ),
  },
];
export const InvestmentsPage = () => {
  return (
    <div>
      <LandingPageLayout>
        <main className="max-w-[1170px] mx-auto flex flex-col items-center">
          <TextWithLinesBg text="Investments Gallery" />

          <section className="flex flex-col gap-6 md:gap-10">
            {items.map((list) => (
              <div
                key={list?.id}
                className="p-5 md2:p-7 max-h-fit py10 rounded-xl md:rounded-[24px] text-white border-[#16236D] bg-[#16236D]/70 flex flex-col md2:flex-row gap-12 md2:gap-20 items-center md2:items-start"
              >
                <div className="flex-1 !rounded-[15px]">
                  {/* <img
                  src={list.serviceImage}
                  alt="serviceImage"
                  className=" !rounded-[15px] min-w-full h-full object-contain"
                /> */}
                  {list.serviceImage}
                </div>

                <div className="flex-1 textcenter mx-auto md2: text-left flex flex-col justify-center items-center md2:items-start">
                  <div className="serviceTextHolder h-full">
                    <div className="textOnly">
                      <p className="font-bold text-2xl md:text-[2rem] text-center md2:text-left">
                        {/* {service?.title} */}
                        {list.title}
                      </p>

                      <p className="font-normal max-w-[600px]  md2:max-w-[552px] text-sm my-3.5 md:text-base">
                        {truncateString(list?.description, 500)}
                      </p>

                      <p className="font-normal mb-10 text-sm md:text-base">
                        STARTING FROM:
                        <span className="bg-clip-text font-semibold text-transparent bg-gradient-to-r from-[#15A4FB] to-[#3FF7A6] text text-base md:text-lg">
                          {/* ${service.availablePlans.basic.cost} */}
                        </span>
                      </p>
                    </div>
                    <div className="buttoOnly self-center md2:self-start">
                      <Button
                        href={`/user/investments/landing-page`}
                        variant="contained"
                        style={{
                          background: theme.palette.primary.mainGradient,
                          width: "251px",
                          mt: "auto",
                        }}
                        // className="text-center bg-gradient-to-r from-[#15A4FB] to-[#3FF7A6] py-3 w-[251px] rounded-lg"
                      >
                        CHOOSE IPO
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </main>
      </LandingPageLayout>
    </div>
  );
};
