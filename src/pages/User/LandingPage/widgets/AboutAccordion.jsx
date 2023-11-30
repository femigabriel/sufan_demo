import { IconButton } from "@mui/material";
import { useState } from "react";

/* eslint-disable react/prop-types */
export const AboutAccordion = () => {
  const [accordionItems, setAccordionItems] = useState(
    AccordionList?.map((accordion, i) => ({
      id: i + 1,
      isOpen: false,
      ...accordion,
    }))
  );

  const toggleItem = (itemId) => {
    setAccordionItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === itemId) {
          return { ...item, isOpen: !item.isOpen };
        } else {
          // Close other items when opening a new one
          return { ...item, isOpen: false };
        }
      })
    );
  };

  return (
    <div className="flex  md2:col-span-4 gap-5 md2:gap-3 flex-col">
      {accordionItems.map((list) => (
        <EachAccordion
          key={list.id}
          isOpen={list.isOpen}
          value={list.value}
          title={list.title}
          text={list.text}
          onClick={() => toggleItem(list.id)}
        />
      ))}
    </div>
  );
};

const EachAccordion = ({ value, title, text, isOpen, onClick }) => {
  // const [openAccordion, setOpenAccordion] = useState(false)
  return (
    <div
      className={`bg-[#243BBD] flex1 text-white transition-all duration-150 rounded-2xl md:rounded-[30px] p-5`}
    >
      <div
        onClick={onClick}
        className="cursor-pointer flex justify-between w-full items-center gap-3"
      >
        <span className="flex-1 flex gap-5 items-center">
          <p className="gradientText text-5xl font-semibold">{value}</p>
          <p className="text-white font-medium text-base lg:max-w-[93px]">
            {title}
          </p>
        </span>

        <IconButton
          className="h-fit w-fit flex-1"
          // onClick={onClick}
        >
          {isOpen ? (
            <svg
              width="27"
              height="28"
              viewBox="0 0 27 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_65_292)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.2954 9.82961C14.0844 9.6187 13.7983 9.50022 13.5 9.50022C13.2017 9.50022 12.9156 9.6187 12.7046 9.82961L6.34052 16.1937C6.23307 16.2975 6.14737 16.4216 6.08841 16.5589C6.02945 16.6962 5.99841 16.8438 5.99711 16.9932C5.99581 17.1425 6.02428 17.2907 6.08085 17.4289C6.13741 17.5672 6.22095 17.6928 6.32658 17.7984C6.4322 17.9041 6.55781 17.9876 6.69607 18.0442C6.83433 18.1007 6.98247 18.1292 7.13185 18.1279C7.28122 18.1266 7.42884 18.0956 7.5661 18.0366C7.70335 17.9776 7.82749 17.8919 7.93127 17.7845L13.5 12.2157L19.0688 17.7845C19.2809 17.9894 19.5651 18.1028 19.8601 18.1002C20.1551 18.0977 20.4372 17.9794 20.6458 17.7708C20.8544 17.5622 20.9727 17.28 20.9753 16.9851C20.9778 16.6901 20.8644 16.4059 20.6595 16.1937L14.2954 9.82961Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_65_292">
                  <rect
                    width="27"
                    height="27"
                    fill="white"
                    transform="matrix(1 0 0 -1 0 27.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          ) : (
            <svg
              width="15"
              height="10"
              viewBox="0 0 15 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.32005 8.98448C8.10908 9.19539 7.82299 9.31387 7.52468 9.31387C7.22637 9.31387 6.94027 9.19539 6.7293 8.98448L0.365178 2.62036C0.257729 2.51658 0.172024 2.39244 0.113064 2.25519C0.0541036 2.11793 0.023069 1.97031 0.021771 1.82093C0.0204729 1.67156 0.0489377 1.52342 0.105504 1.38516C0.16207 1.2469 0.245604 1.12129 0.351234 1.01566C0.456863 0.910033 0.582471 0.826498 0.720729 0.769932C0.858988 0.713366 1.00713 0.684902 1.1565 0.6862C1.30588 0.687498 1.4535 0.718532 1.59076 0.777492C1.72801 0.836453 1.85215 0.922157 1.95593 1.02961L7.52468 6.59836L13.0934 1.02961C13.3056 0.824678 13.5898 0.711285 13.8848 0.713848C14.1797 0.716411 14.4619 0.834726 14.6705 1.04331C14.8791 1.25189 14.9974 1.53406 14.9999 1.82903C15.0025 2.124 14.8891 2.40818 14.6842 2.62036L8.32005 8.98448Z"
                fill="white"
              />
            </svg>
          )}
        </IconButton>
      </div>

      {isOpen && <p className="text-white font-light mt-8">{text}</p>}
    </div>
  );
};

const AccordionList = [
  {
    value: "9+",
    isOpen: true,
    title: "Years of Experience",
    text: "With over seven years in the industry, we specialize in crafting advanced software solutions tailored to address our clients' requirements, while also addressing significant societal challenges.",
  },
  {
    value: 102,
    title: "Projects Completed",
    text: "Having successfully completed over 102 projects, we are dedicated to continuously embarking on new ventures while prioritizing regular updates and enhancements for our existing client projects.",
  },
  {
    value: 117,
    title: "Happy Clients",
    text: "Our global customer network is expanding daily. With a clientele of over 100 diverse entities spanning across various continents, we remain committed to ensuring each customer consistently receives an unparalleled service experience.",
  },
  {
    value: "14M",
    title: "Total Value to Client",
    text: "We have the expertise to manage projects ranging in scale from several hundred to several hundred thousand dollars. Over time, our dedication and consistent performance have led to a cumulative revenue exceeding 12 million dollars.",
  },
];
