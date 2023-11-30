import React from "react";
import { Collapse, Space } from "antd";
import { Input } from "antd";
const text = (
  <p className="lg:w-[40em] text-base">
    Yes, you can try us for free for 30 days. If you want, we’ll provide you
    with a free, personalized 30-minute onboarding call to get you up and
    running as soon as possible.
  </p>
);
const items = [
  {
    key: "1",
    label: (
      <div className="text-white text-lg">
        <h3>Is there a free trial available?</h3>
      </div>
    ),
    children: <p>{text}</p>,
  },
  {
    key: "2",
    label: (
      <div className="text-white">
        <h3>Is there a free trial available?</h3>
      </div>
    ),
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: (
      <div className="text-white">
        <h3>Is there a free trial available?</h3>
      </div>
    ),
    children: <p>{text}</p>,
  },
];

export const FaqPage = () => {
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div className="py-10 lg:py-20 investment-faq items-start">
      <div className="flex justify-center">
        <div className="my-5">
          <h3 className="text-white text-5xl tracking-[-2%] mb-5 text-center ">
            Frequently asked questions
          </h3>
          <p className="text-[#D1E4FF] text-lg lg:w-[40em] font-normal lg:px-7 text-center">
            Have questions? We’re here to help.
          </p>

          <idv className="flex justify-center my-7 mb-16">
            <Input
              placeholder="Search"
              className="site-form w-[320px] "
              prefix={
                <img
                  src="../../src/assets/icons/searchIcon.svg"
                  draggable="false"
                  alt="searchIcon"
                />
              }
            />
          </idv>
        </div>
      </div>
      <div>
        <Space direction="vertical">
          <Collapse
            expandIcon={({ isActive }) =>
              isActive ? (
                <img
                  src="../../src/assets/icons/minusCircle.svg"
                  draggable="false"
                  alt="plusCircle"
                />
              ) : (
                <img
                  src="../../src/assets/icons/plusCircle.svg"
                  draggable="false"
                  alt="minusCircle"
                />
              )
            }
            defaultActiveKey={["1"]}
            items={[
              {
                key: "1",
                label: (
                  <div className="text-white text-lg lg:w-[40em]">
                    <h3>Is there a free trial available?</h3>
                  </div>
                ),
                children: (
                  <p className="lg:w-[40em] text-base">
                    Yes, you can try us for free for 30 days. If you want, we’ll
                    provide you with a free, personalized 30-minute onboarding
                    call to get you up and running as soon as possible.
                  </p>
                ),
              },
            ]}
          />

          <Collapse
            expandIcon={({ isActive }) =>
              isActive ? (
                <img
                  src="../../src/assets/icons/minusCircle.svg"
                  draggable="false"
                  alt="plusCircle"
                />
              ) : (
                <img
                  src="../../src/assets/icons/plusCircle.svg"
                  draggable="false"
                  alt="minusCircle"
                />
              )
            }
            items={[
              {
                key: "2",
                label: (
                  <div className="text-white text-lg lg:w-[40em]">
                    <h3>Can I change my plan later?</h3>
                  </div>
                ),
                children: (
                  <p className="lg:w-[40em] text-base">
                    Yes, you can try us for free for 30 days. If you want, we’ll
                    provide you with a free, personalized 30-minute onboarding
                    call to get you up and running as soon as possible.
                  </p>
                ),
              },
            ]}
          />
          <Collapse
            expandIcon={({ isActive }) =>
              isActive ? (
                <img
                  src="../../src/assets/icons/minusCircle.svg"
                  draggable="false"
                  alt="plusCircle"
                />
              ) : (
                <img
                  src="../../src/assets/icons/plusCircle.svg"
                  draggable="false"
                  alt="minusCircle"
                />
              )
            }
            items={[
              {
                key: "3",
                label: (
                  <div className="text-white text-lg lg:w-[40em]">
                    <h3>Can other info be added to an invoice?</h3>
                  </div>
                ),
                children: (
                  <p className="lg:w-[40em] text-base">
                    Yes, you can try us for free for 30 days. If you want, we’ll
                    provide you with a free, personalized 30-minute onboarding
                    call to get you up and running as soon as possible.
                  </p>
                ),
              },
            ]}
          />
          <Collapse
            expandIcon={({ isActive }) =>
              isActive ? (
                <img
                  src="../../src/assets/icons/minusCircle.svg"
                  draggable="false"
                  alt="plusCircle"
                />
              ) : (
                <img
                  src="../../src/assets/icons/plusCircle.svg"
                  draggable="false"
                  alt="minusCircle"
                />
              )
            }
            items={[
              {
                key: "4",
                label: (
                  <div className="text-white text-lg lg:w-[40em]">
                    <h3>How does billing work?</h3>
                  </div>
                ),
                children: (
                  <p className="lg:w-[40em] text-base">
                    Yes, you can try us for free for 30 days. If you want, we’ll
                    provide you with a free, personalized 30-minute onboarding
                    call to get you up and running as soon as possible.
                  </p>
                ),
              },
            ]}
          />
          <Collapse
            expandIcon={({ isActive }) =>
              isActive ? (
                <img
                  src="../../src/assets/icons/minusCircle.svg"
                  draggable="false"
                  alt="plusCircle"
                />
              ) : (
                <img
                  src="../../src/assets/icons/plusCircle.svg"
                  draggable="false"
                  alt="minusCircle"
                />
              )
            }
            items={[
              {
                key: "5",
                label: (
                  <div className="text-white text-lg lg:w-[40em]">
                    <h3>How do I change my account email?</h3>
                  </div>
                ),
                children: (
                  <p className="lg:w-[40em] text-base">
                    Yes, you can try us for free for 30 days. If you want, we’ll
                    provide you with a free, personalized 30-minute onboarding
                    call to get you up and running as soon as possible.
                  </p>
                ),
              },
            ]}
          />
        </Space>
      </div>
    </div>
  );
};
