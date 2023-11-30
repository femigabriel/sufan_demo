/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
// import {  Navigation, Pagination } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
import LandingPageLayout from "../../../templates/LandingPageLayout";
import SearchInput from "../../../components/forms/SearchInput";
import ServicesCard from "./widgets/ServicesCard";
import SelectTierCard from "./widgets/SelectTierCard";
import ShieldIcon from "../../../components/Vectors/ShieldIcon";
import TextWithLinesBg from "../../../components/TextWithLinesBg";
import MinusCircleIcon from "../../../components/Vectors/MinusCircleIcon";
import PlusCircleIcon from "../../../components/Vectors/PlusCircleIcon";
import { useState } from "react";
import { IconButton } from "@mui/material";
import { services } from "../../../utils/data";
import { useParams } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import "./styles.scss";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const EachServices = () => {
  // const navigate = useNavigate()
  const { id } = useParams();
  const findService = services.find((service) => service.id == id);

  return (
    <LandingPageLayout FAQComp findService={findService}>
      <main className="max-w-[1170px] min-h-screen mx-auto flx flex-col items-center">
        <TextWithLinesBg text={"Our Services"} />

        <div className="service-sswiper cursor-pointer px[80px] relative my-10 md2:my-20 w-full">
          <Swiper
            navigation={true}
            autoplay={{
              delay: 5000,
            }}
            grabCursor={true}
            initialSlide={1}
            loop={true}
            spaceBetween={window.innerWidth > 768 ? 30 : 24}
            modules={[Pagination, Navigation, Autoplay]}
            // className="mySwiper"
            breakpoints={{
              420: {
                slidesPerView: 1,
              },
              500: {
                slidesPerView: 1.5,
              },
              640: {
                slidesPerView: 1.8,
              },
              768: {
                slidesPerView: 2,
              },
              1124: {
                slidesPerView: 3,
              },
            }}
          >
            {services.map((service, i) => (
              <SwiperSlide key={i}>
                <ServicesCard service={service} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div>
          <SearchInput className="mx-auto mt-10 md2:mt-20  search bg-[#020718] !text-[#c8c8c8] !max-w-[300px] bg-opacity-[23%] border-2 border-[#15A4FB]/50" />

          <div className="flex gap-4 md2:gap-10 md2:items-center my-5 md2:my-10">
            <div>
              <img src="/images/lady-avatar.png" alt="chat avatar " />
            </div>
            <p className="font-semibold leading-[130%] text-white text-xl md:text-2xl md2:text-[2rem]">
              {findService.subTitle}
            </p>
          </div>

          <div className="pb40 grid grid-cols-1 md2:grid-cols-12 flx flex-col itemscenter md2:itemsstart md2:flex-row text-white gap-10 md2:gap-16 mt-5 md2:mt-10">
            <div className="wfull md2:col-span-7 md2w-3/5">
              <div className="w-full gradientBorder before:rounded-[24px]">
                <img
                  src={findService.serviceImage}
                  alt="card-img"
                  className="md2:h-[526px] !rounded-[20px] w-full mx-auto"
                />
              </div>

              <p className="text-center md2:text-left mt-8 md2:mt-16 font-semibold text-xl md:text-2xl">
                Project details
              </p>

              <p className="font-normal text-center md2:text-left max-w-[600px] mx-auto md2:max-w-none leading-[140%] text-sm md:text-base mt-5 md2:mt-[30px]">
                {findService.description}
              </p>
              <span className="hidden md2:block">
                <FAQ findService={findService} />
              </span>
            </div>

            <div className="wfull min-h-screen md2:col-span-5 md2w-2/5">
              <div className="md2:sticky relative top0 md2:top-4">
                <SelectTierCard
                  availablePlans={findService.availablePlans}
                  serviceId={findService.id}
                />

                <div className="w[400px] flex  mt-8 gap-6 items-center">
                  <ShieldIcon />

                  <div className="mt8">
                    <p className="font-medium text-lg md:text-xl">
                      Bles Payment Protection
                    </p>
                    <p className="font-normal text-sm md:text-base">
                      Fund the project upfront.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <span className="md2:hidden">
              <FAQ findService={findService} />
            </span>
          </div>
        </div>
      </main>
    </LandingPageLayout>
  );
};

export default EachServices;

export const FAQ = ({ findService }) => {
  const [accordionItems, setAccordionItems] = useState(
    findService?.faqs.map((service, i) => ({
      id: i + 1,
      isOpen: false,
      ...service,
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
    <div className="py5  bg-main-bg  z-[10] w-full md2:py9 bg-no-repeat py-16 md2:py-28">
      <TextWithLinesBg text={"FAQ"} />

      <div
        style={
          {
            // backgroundImage: "url('/images/houses.png'), url('/images/laptops.png')",
            // backgroundSize: '40%',
            // backgroundPosition: 'left bottom, right top',
            // "@m"
          }
        }
        className="accordion-wrap md2bg-FAQ-bg mt-10 md2:mt-20 minh-screen w-full bg-no-repeat"
      >
        <div className="flex px-4 sm:px-6 flex-col gap-4 max-w-[820px] mx-auto">
          {accordionItems.map((list) => (
            <EachAccordion
              key={list.id}
              isOpen={list.isOpen}
              question={list.question}
              answer={list.answer}
              onClick={() => toggleItem(list.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const EachAccordion = ({ question, answer, isOpen, onClick }) => {
  // const [openAccordion, setOpenAccordion] = useState(false)
  return (
    <div
      className={`${isOpen ? "bg-[#2238B4]" : ""
        } text-white transition-all duration-150 bg-opacity-[87%] rounded-2xl p-4 md:p-8`}
    >
      <span className="flex gap-3 md:gap-5 itemstart">
        <IconButton className="h-fit w-fit" onClick={onClick}>
          {isOpen ? <MinusCircleIcon /> : <PlusCircleIcon />}
        </IconButton>
        <div className="w-4/5 mt-1.5">
          <p
            onClick={onClick}
            className="cursor-pointer text-base md:text-lg font-medium"
          >
            {question}
          </p>

          {/* {isOpen && */}
          <p
            className={`text-sm mt-3 md:text-base font-normal ${isOpen ? "block" : "hidden"
              }`}
          >
            {answer}
          </p>
          {/* } */}
        </div>
      </span>
    </div>
  );
};

// const AccordionList = [
//     {
//         id: 1,
//         question: 'Is there a free trial available?',
//         answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'
//     },
//     {
//         id: 1,
//         question: 'Can I change my plan later?',
//         answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'
//     },
//     {
//         id: 1,
//         question: 'What is your cancellation policy?',
//         answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'
//     },
//     {
//         id: 1,
//         question: 'Can other info be added to an invoice?',
//         answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'
//     },
//     {
//         id: 1,
//         question: 'How does billing work?',
//         answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'
//     },
//     {
//         id: 1,
//         question: 'How do I change my account email?',
//         answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'
//     },
// ]
