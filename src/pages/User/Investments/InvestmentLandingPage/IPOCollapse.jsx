import React from "react";
import { Collapse, Space } from "antd";
import { Button } from "@mui/material";
import theme from "../../../../theme";

// const text = `
//   A dog is a type of domesticated animal.
//   Known for its loyalty and faithfulness,
//   it can be found as a welcome guest in many households across the world.
// `;
const text = (
  <div className="py-">
    <div className="flex py-7  gap-10">
      <img src=" /assets/images/investment1.svg" alt="serviceImage" />
      <div className="lg:w-[36em] px-5">
        <img
          src="/assets/images/image1.png"
          className="mb-5"
          draggable="false"

          alt="image1"
        />
        <p className="text-[#D1E4FF] text-sm leading-[25px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
          ullamcorper, dui sit amet molestie tincidunt, sapien dui auctor quam,
          in feugiat massa dui ut leo.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Duis ullamcorper, dui sit amet molestie tincidunt,
          sapien dui auctor quam, in feugiat massa dui ut leo.
        </p>
        <div className="mt-7">
          <Button
            href={`/user/investments/landing-page`}
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
    <div className="grid grid-cols-2">
      <img
        src="/assets/images/case1.svg"
        className="mb-5"
        alt="case"
        draggable="false"

      />
      <img
        src="/assets/images/case2.svg"
        className="mb-5"
        alt="case"
        draggable="false"

      />
      <img
          src="/assets/images/case3.svg"
        className="mb-5"
        alt="case"
        draggable="false"

      />
      <img
         src="/assets/images/case4.svg"
        className="mb-5"
        alt="case"
        draggable="false"

      />
    </div>
  </div>
);
const items = [
  {
    key: "1",
    label: (
      <div className=" py-5">
        <img
          src="/assets/images/image1.png"
          className="mb-5"
          alt="image1"
        />
      </div>
    ),
    children: <p>{text}</p>,
  },
  {
    key: "2",
    label: "This is panel header 2",
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: "This is panel header 3",
    children: <p>{text}</p>,
  },
];
const IPOCollapse = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div className="w-full">
      <Space direction="vertical">
        <Collapse
          expandIcon={({ isActive }) =>
            isActive ? (
              <img
                src="/assets/icons/arrowUp.svg"
                draggable="false"
                alt="plusCircle"
              />
            ) : (
              <img
                src="/assets/icons/arrowDown.svg"
                draggable="false"
                alt="minusCircle"
              />
            )
          }
          expandIconPosition="right"
          defaultActiveKey={["1"]}
          items={[
            {
              key: "1",
              label: (
                <div className="w-full">
                  <img
                   src="/assets/images/image1.png"
                    className="my-5"
                    alt="image1"
                    draggable="false"

                  />
                </div>
              ),
              //   children: (
              //     <div className="py-">
              //       <div className="flex py-7  gap-10">
              //         <img
              //           src="../../src/assets/images/investment1.svg"
              //           alt="serviceImage"
              //         />
              //         <div className="lg:w-[36em] px-5">
              //           <img
              //             src="../../src/assets/images/image1.png"
              //             className="mb-5"
              //             alt="image1"
              //           />
              //           <p className="text-[#D1E4FF] text-sm leading-[25px]">
              //             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              //             Duis ullamcorper, dui sit amet molestie tincidunt,
              //             sapien dui auctor quam, in feugiat massa dui ut
              //             leo.Lorem ipsum dolor sit amet, consectetur adipiscing
              //             elit. Duis ullamcorper, dui sit amet molestie tincidunt,
              //             sapien dui auctor quam, in feugiat massa dui ut leo.
              //           </p>
              //           <div className="mt-7">
              //             <Button
              //               href={`/user/investments/landing-page`}
              //               variant="contained"
              //               style={{
              //                 background: theme.palette.primary.mainGradient,
              //                 width: "148px",
              //                 mt: "auto",
              //               }}
              //             >
              //               PURCHASE
              //             </Button>
              //           </div>
              //         </div>
              //       </div>
              //       <div className="grid grid-cols-2">
              //         <img
              //           src="../../src/assets/images/case1.svg"
              //           className="mb-5"
              //           alt="case"
              //         />
              //         <img
              //           src="../../src/assets/images/case2.svg"
              //           className="mb-5"
              //           alt="case"
              //         />
              //         <img
              //           src="../../src/assets/images/case3.svg"
              //           className="mb-5"
              //           alt="case"
              //         />
              //         <img
              //           src="../../src/assets/images/case4.svg"
              //           className="mb-5"
              //           alt="case"
              //         />
              //       </div>
              //     </div>
              //   ),
              children: <>{text}</>,
            },
          ]}
        />
        <Collapse
          expandIcon={({ isActive }) =>
            isActive ? (
              <img
                src="../../src/assets/icons/arrowUp.svg"
                draggable="false"
                alt="plusCircle"
              />
            ) : (
              <img
                src="../../src/assets/icons/arrowDown.svg"
                draggable="false"
                alt="minusCircle"
              />
            )
          }
          expandIconPosition="right"
          items={[
            {
              key: "2",
              label: (
                <div className="w-full lg:w-[980p] py-">
                  <img
                    src="/assets/images/image2.png"
                    className="my-5"
                    alt="image1"
                    draggable="false"

                  />
                </div>
              ),
              children: <>{text}</>,
            },
          ]}
        />

        <Collapse
          expandIcon={({ isActive }) =>
            isActive ? (
              <img
                src="/assets/icons/arrowUp.svg"
                draggable="false"
                alt="plusCircle"
              />
            ) : (
              <img
              src="/assets/icons/arrowDown.svg"
                draggable="false"
                alt="minusCircle"
              />
            )
          }
          expandIconPosition="right"
          items={[
            {
              key: "3",
              label: (
                <div className="w-full py-">
                  <img
                    src="/assets/images/image3.png"
                    className="mb-5"
                    alt="image1"
                    draggable="false"

                  />
                </div>
              ),
              children: <>{text}</>,
            },
          ]}
        />

        <Collapse
          expandIcon={({ isActive }) =>
            isActive ? (
              <img
             
                src="/assets/icons/arrowUp.svg"
                draggable="false"
                alt="plusCircle"
              />
            ) : (
              <img
                src="/assets/icons/arrowDown.svg"
                draggable="false"
                alt="minusCircle"
              />
            )
          }
          expandIconPosition="right"
          items={[
            {
              key: "4",
              label: (
                <div className="w-full lg:w-[980p] py-">
                  <img
                    src="/assets/images/image4.png"
                    className="my-5"
                    alt="image1"
                    draggable="false"

                  />
                </div>
              ),
              children: <>{text}</>,
            },
          ]}
        />
      </Space>
    </div>
  );
};
export default IPOCollapse;
