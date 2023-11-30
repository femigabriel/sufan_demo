/* eslint-disable react/no-unescaped-entities */
import { Avatar } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const ClientsSay = () => {
  const testimonials = [
    {
      comment: `Stas has been fantastic. We will certainly reach out to utilize
              his services for projects in the future. He has delivered
              perfectly and we are really pleased.`,
      client: "Matt Gough - United Kingdom",
      image: `/images/avatar-def.png`,
    },
    {
      comment: `Stas was very responsive and quick to address any issues that
                occurred. I appreciate his professionalism and would do business
                again with him.`,
      client: "Jenn Jack - United States",
      image: `/images/avatar-def.png`,
    },
    {
      comment: `Stas is very keen and easy to deal with, He was able to quickly
              identify my requirements and provide a very prompt and competitive
              offer to meet my needs. Our business is ongoing and we are looking
              forward to working with him in the future.`,
      client: "Gazzjul - Australia",
      image: `/images/avatar-def.png`,
    },
  ];
  return (
    <>
      {/* DESKTOP */}
      <div className="hidden lg:grid gap-6 md:gap-[30px] grid-cols-12">
        <div className="p-10 col-span-8 flex gap-12 rounded-2xl md:rounded-[20px] bg-secondary">
          <Avatar
            src="/images/avatar-def.png"
            alt="user"
            sx={{ borderRadius: "100%", width: "6.69rem", height: "6.69rem" }}
          />

          <div>
            <p className="font-normal text-sm md:text-base text-white">
              “Stas has been fantastic. We will certainly reach out to utilize
              his services for projects in the future. He has delivered
              perfectly and we are really pleased.”
            </p>
            <p className="font-normal italic mt-5 md:mt-9 text-sm md:text-base text-light-blue">
              Matt Gough - United Kingdom
            </p>
          </div>
        </div>

        <div className="col-span-4 flex flex-col row-span-2">
          <div className="p-5  flex flex-col items-center gap-4 rounded-2xl md:rounded-[20px] bg-secondary">
            <Avatar
              src="/images/avatar-def.png"
              alt="user"
              sx={{
                borderRadius: "100%",
                width: "6.69rem",
                height: "6.69rem",
              }}
            />

            <div className="text-center">
              <p className="font-normal text-sm md:text-base text-white">
                “Stas was very responsive and quick to address any issues that
                occurred. I appreciate his professionalism and would do business
                again with him.”
              </p>
              <p className="font-normal italic mt-5 md:mt-9 text-sm md:text-base text-light-blue">
                Jenn Jack - United States
              </p>
            </div>
          </div>

          <div className="flex flex-grow mt-6 md:mt-[30px] gap-6 md:gap-[30px]">
            <div className="flex-1 cursor-pointer rounded-2xl md:rounded-[20px] flex items-center justify-center bg-secondary">
              <svg
                width="19"
                height="31"
                viewBox="0 0 19 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.725373 17.1748C0.260916 16.7381 -1.20158e-06 16.146 -1.22857e-06 15.5286C-1.25556e-06 14.9112 0.260916 14.3191 0.725373 13.8824L14.7405 0.710826C14.969 0.488443 15.2424 0.311062 15.5447 0.189034C15.8469 0.0670058 16.172 0.00277455 16.501 8.80203e-05C16.8299 -0.00259851 17.1562 0.056314 17.4607 0.173387C17.7651 0.29046 18.0417 0.463349 18.2744 0.681966C18.507 0.900584 18.6909 1.16055 18.8155 1.4467C18.9401 1.73285 19.0028 2.03945 18.9999 2.34861C18.997 2.65777 18.9287 2.9633 18.7989 3.24737C18.669 3.53144 18.4803 3.78836 18.2437 4.00315L5.98011 15.5286L18.2437 27.0541C18.6949 27.4932 18.9447 28.0814 18.939 28.6919C18.9334 29.3023 18.6728 29.8863 18.2135 30.318C17.7541 30.7497 17.1327 30.9946 16.4832 30.9999C15.8336 31.0052 15.2078 30.7705 14.7405 30.3464L0.725373 17.1748Z"
                  fill="#99A9FF"
                />
              </svg>
            </div>

            <div className="flex-1 cursor-pointer rounded-2xl md:rounded-[20px] flex items-center justify-center bg-secondary">
              <svg
                width="19"
                height="31"
                viewBox="0 0 19 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.2746 17.1748C18.7391 16.7381 19 16.146 19 15.5286C19 14.9112 18.7391 14.3191 18.2746 13.8824L4.25951 0.710826C4.03097 0.488443 3.75759 0.311062 3.45533 0.189034C3.15307 0.0670058 2.82797 0.00277455 2.49901 8.80203e-05C2.17005 -0.00259851 1.84382 0.056314 1.53935 0.173387C1.23487 0.29046 0.958255 0.463349 0.725637 0.681966C0.49302 0.900584 0.309059 1.16055 0.184489 1.4467C0.0599189 1.73285 -0.00276511 2.03945 9.34398e-05 2.34861C0.00295199 2.65777 0.0712965 2.9633 0.201139 3.24737C0.330981 3.53144 0.519721 3.78836 0.756345 4.00315L13.0199 15.5286L0.756344 27.0541C0.305051 27.4932 0.0553347 28.0814 0.0609794 28.6919C0.0666241 29.3023 0.327178 29.8863 0.786523 30.318C1.24587 30.7497 1.86725 30.9946 2.51684 30.9999C3.16643 31.0052 3.79225 30.7705 4.25951 30.3464L18.2746 17.1748Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="p-10 flex gap-12 col-span-8 rounded-2xl md:rounded-[20px] bg-secondary">
          <Avatar
            src="/images/avatar-def.png"
            alt="user"
            sx={{ borderRadius: "100%", width: "6.69rem", height: "6.69rem" }}
          />

          <div>
            <p className="font-normal text-sm md:text-base text-white">
              “Stas is very keen and easy to deal with, He was able to quickly
              identify my requirements and provide a very prompt and competitive
              offer to meet my needs. Our business is ongoing and we are looking
              forward to working with him in the future.”
            </p>
            <p className="font-normal italic mt-5 md:mt-9 text-sm md:text-base text-light-blue">
              Gazzjul - Australia
            </p>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className=" flex lg:hidden flex-col client-say">
        <div className="cursor-pointer relative">
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
            breakpoints={{
              420: {
                slidesPerView: 1,
              },
              500: {
                slidesPerView: 1.5,
              },
              640: {
                slidesPerView: 2,
              },
              1124: {
                slidesPerView: 3,
              },
            }}
          >
            {testimonials.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="p-5  flex flex-col items-center gap-4 rounded-2xl md:rounded-[20px] bg-secondary">
                  <Avatar
                    src="/images/avatar-def.png"
                    alt="user"
                    sx={{
                      borderRadius: "100%",
                      width: "6.69rem",
                      height: "6.69rem",
                    }}
                  />

                  <div className="text-center">
                    <p className="font-normal text-sm md:text-base text-white">
                      {item.comment}
                    </p>
                    <p className="font-normal italic mt-5 md:mt-9 text-sm md:text-base text-light-blue">
                      {item.client}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* <div className=" flex max-w-[60%] mx-auto mt-6 md:mt-[30px] gap-6 md:gap-[30px]">
                    <button className="flex-1 swiper-button-prev h-24 w-40 cursor-pointer rounded-2xl md:rounded-[20px] flex items-center justify-center bg-secondary">
                        <svg width="19" height="31" viewBox="0 0 19 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.725373 17.1748C0.260916 16.7381 -1.20158e-06 16.146 -1.22857e-06 15.5286C-1.25556e-06 14.9112 0.260916 14.3191 0.725373 13.8824L14.7405 0.710826C14.969 0.488443 15.2424 0.311062 15.5447 0.189034C15.8469 0.0670058 16.172 0.00277455 16.501 8.80203e-05C16.8299 -0.00259851 17.1562 0.056314 17.4607 0.173387C17.7651 0.29046 18.0417 0.463349 18.2744 0.681966C18.507 0.900584 18.6909 1.16055 18.8155 1.4467C18.9401 1.73285 19.0028 2.03945 18.9999 2.34861C18.997 2.65777 18.9287 2.9633 18.7989 3.24737C18.669 3.53144 18.4803 3.78836 18.2437 4.00315L5.98011 15.5286L18.2437 27.0541C18.6949 27.4932 18.9447 28.0814 18.939 28.6919C18.9334 29.3023 18.6728 29.8863 18.2135 30.318C17.7541 30.7497 17.1327 30.9946 16.4832 30.9999C15.8336 31.0052 15.2078 30.7705 14.7405 30.3464L0.725373 17.1748Z" fill="#99A9FF" />
                        </svg>
                    </button>

                    <button className="swiper-button-next flex-1 cursor-pointer h-24 w-40 rounded-2xl md:rounded-[20px] flex items-center justify-center bg-secondary">
                        <svg width="19" height="31" viewBox="0 0 19 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M18.2746 17.1748C18.7391 16.7381 19 16.146 19 15.5286C19 14.9112 18.7391 14.3191 18.2746 13.8824L4.25951 0.710826C4.03097 0.488443 3.75759 0.311062 3.45533 0.189034C3.15307 0.0670058 2.82797 0.00277455 2.49901 8.80203e-05C2.17005 -0.00259851 1.84382 0.056314 1.53935 0.173387C1.23487 0.29046 0.958255 0.463349 0.725637 0.681966C0.49302 0.900584 0.309059 1.16055 0.184489 1.4467C0.0599189 1.73285 -0.00276511 2.03945 9.34398e-05 2.34861C0.00295199 2.65777 0.0712965 2.9633 0.201139 3.24737C0.330981 3.53144 0.519721 3.78836 0.756345 4.00315L13.0199 15.5286L0.756344 27.0541C0.305051 27.4932 0.0553347 28.0814 0.0609794 28.6919C0.0666241 29.3023 0.327178 29.8863 0.786523 30.318C1.24587 30.7497 1.86725 30.9946 2.51684 30.9999C3.16643 31.0052 3.79225 30.7705 4.25951 30.3464L18.2746 17.1748Z" fill="white" />
                        </svg>

                    </button>
                </div> */}
      </div>
    </>
  );
};

export default ClientsSay;
