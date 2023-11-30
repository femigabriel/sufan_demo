/* eslint-disable react/no-unescaped-entities */
import { Button } from "@mui/material";
import LandingPageLayout from "../../../templates/LandingPageLayout";
import theme from "../../../theme";
import { AboutAccordion } from "./widgets/AboutAccordion";
import { ServicesAccordion } from "./widgets/ServicesAccordion";
import ClientsSay from "./widgets/ClientsSay";
// import InputField from "../../../components/forms/InputField";
import "./styles.scss";

const LandingPage = () => {
  return (
    <LandingPageLayout>
      <main className="text-white max-w-[1170px] mx-auto">
        <div className="flex flex-col lg:flex-row text-center lg:text-left gap-6 lg:gap-[4.5rem] lg:items-center">
          <h1 className="font-extrabold text-white font-Inter text-5xl md:text-6xl lg:text-8xl">
            Creative
          </h1>
          <p className="font-light text-base mx-auto max-w-[710px]">
            Building the Most Trending, Clean and Elegant Deeply Researched
            Software Solutions. We create premium software, integrations and web
            systems with a unique skill set, creativity and expert development
            techniques
          </p>
        </div>

        <div className="flex w-full flex-col lg:flex-row text-center lg:text-left gap-6 lg:gap-[4.5rem] items-center mt-12 lg:mt-6">
          <div className="hidden lg:block">
            <p className="font-light text-lg md:text-xl">Established</p>
            <p className="font-medium mt-2 gradientText text-lg md:text-xl">
              2008
            </p>
          </div>
          <h1 className="font-extrabold text-white font-Inter text-5xl md:text-6xl lg:text-8xl">
            Client Platform
          </h1>

          <span className="hidden lg:block">
            <Button
              variant="contained"
              sx={{
                background: theme.palette.primary.mainGradient,
                width: "fit-content",
              }}
            >
              Book Appointment
            </Button>
          </span>

          <div className="flex gap-6 lg:hidden flex-col items-center mx-auto w-full max-w-[710px]">
            <div className="">
              <p className="font-light text-lg md:text-xl">
                Established:{" "}
                <span className="font-semibold gradientText">2008</span>
              </p>
            </div>
            <Button
              variant="contained"
              fullWidth
              sx={{
                background: theme.palette.primary.mainGradient,
                maxWidth: "360px",
              }}
            >
              Book Appointment
            </Button>
          </div>
        </div>

        {/* BUTTONS */}
        <section className="mt-20 md:mt-[7.5rem]  mb-10 md:mb-20 flex flex-col md2:flex-row items-center gap-16 md2:gap-[100px]">
          <div className=" grid grid-cols-1 w-full md2:max-w-[300px] sm:grid-cols-2 md2:grid-cols-1 flex1  md2flex gap-6 md2:gap-10 flex-row md2:flex-col ">
            <Button
              href="#about"
              variant="contained"
              color="secondary"
              fullWidth
              sx={{
                height: window.innerWidth > 768 ? "91px" : "48px",
                borderRadius: "12px",
                textTransform: "uppercase",
              }}
            >
              About Us
            </Button>
            <Button
              href="#services"
              variant="contained"
              color="secondary"
              fullWidth
              sx={{
                height: window.innerWidth > 768 ? "91px" : "48px",
                borderRadius: "12px",
                textTransform: "uppercase",
              }}
            >
              Our Services
            </Button>
            <Button
              href="#projects"
              variant="contained"
              color="secondary"
              fullWidth
              sx={{
                height: window.innerWidth > 768 ? "91px" : "48px",
                borderRadius: "12px",
                textTransform: "uppercase",
              }}
            >
              Our Projects
            </Button>
            <Button
              href="#client-reviews"
              variant="contained"
              color="secondary"
              fullWidth
              sx={{
                height: window.innerWidth > 768 ? "91px" : "48px",
                borderRadius: "12px",
                textTransform: "uppercase",
              }}
            >
              Our clients say
            </Button>
          </div>
          <div className="md2:flex-1 w-10/12 md2:w-full">
            <img src="/images/hero-bg-1.png" alt="music" className="" />
          </div>
        </section>

        {/* ABOUT US */}
        <section id="about" className="pt-5 md:pt-10 mb-16 md:mb-20">
          <div className="flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-[3.2rem] md:items-center mb-10 lg:mb-20">
            <div className="flex flex-1 gap-8 md:gap-10 lg:gap-[3.2rem] items-center">
              <h1 className="font-semibold text-white font-Inter text-2xl sm:text-3xl lg:text-5xl">
                About <span className="gradientText">Us</span>
              </h1>

              <div className="h-[3px] bg-gradient-to-r from-[#15A4FB] to-[#3FF7A6] w-full max-w-[72px]"></div>
            </div>

            <p className="font-light text-sm  md:text-base max-w-[694px]">
              We have 9+ years experience in software and web-systems
              development, We have many services that can suit almost any
              business, ranging from technology consultation to API integrations
              and all the way to Flutter app development.{" "}
            </p>
          </div>

          <div className="grid grid-cols-1 md2:grid-cols-12 gap-7">
            <div className="md2:col-span-8 h-full md2:h-[560px]">
              <iframe
                className={`aspect-video h-full w-full rounded-2xl md:rounded-[30px] object-cover`}
                src="https://www.youtube.com/embed/Ky2ZWgP1SlE?si=6J2YhOc0rEEPhcb3"
                title="Intricacies of Project Management"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              >
                Your browser does not support this video format
              </iframe>
            </div>

            <AboutAccordion />
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="pt-5 md:pt-10 mb-16 md:mb-20">
          <div className="flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-[3.2rem] md:items-center mb-10 md:mb-20">
            <div className="flex flex-1 gap-8 md:gap-10 lg:gap-[3.2rem] items-center">
              <h1 className="font-semibold text-white font-Inter text-2xl sm:text-3xl lg:text-5xl">
                Our <span className="gradientText">Services</span>
              </h1>

              <div className="h-[3px] bg-gradient-to-r from-[#15A4FB] to-[#3FF7A6] w-full max-w-[72px]"></div>
            </div>

            <p className="font-light text-sm  md:text-base max-w-[694px]">
              Utilizing a unique blend of creativity, expertise, and advanced
              development techniques, we specialize in crafting premium
              software, integrations, and web systems that stand out in quality
              and functionality.{" "}
            </p>
          </div>

          <ServicesAccordion />
        </section>

        {/* PROJECTS */}
        <section id="projects" className="pt-5 md:pt-10 mb-16 md:mb-20">
          <div className="flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-[3.2rem] md:items-center mb-10 md:mb-20">
            <div className="flex flex-1 gap-8 md:gap-10 lg:gap-[3.2rem] items-center">
              <h1 className="font-semibold text-white font-Inter text-2xl sm:text-3xl lg:text-5xl">
                Our <span className="gradientText">Projects</span>
              </h1>

              <div className="h-[3px] bg-gradient-to-r from-[#15A4FB] to-[#3FF7A6] w-full max-w-[72px]"></div>
            </div>

            <p className="font-light text-sm  md:text-base max-w-[694px]">
              Having successfully completed over 102 projects, we are dedicated
              to continuously embarking on new ventures while prioritizing
              regular updates and enhancements for our existing client projects.{" "}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 md:grid-rows-4 gap-5 lg:gap-[30px]">
            <img
              src="/images/iep-docs.png"
              alt="project"
              className=" rounded-2xl md:rounded-[30px] w-full h-full 1 md:col-span-3 md:row-span-3"
            />
            <img
              src="/images/bles-comp.png"
              alt="project"
              className=" rounded-2xl md:rounded-[30px] w-full h-full 2 md:col-span-2 md:row-span-2"
            />
            <img
              src="/images/cogni-contract.png"
              alt="project"
              className=" rounded-2xl md:rounded-[30px] w-full h-full 3 md:col-span-2 md:row-span-2"
            />
            <img
              src="/images/chatful.png"
              alt="project"
              className="in-h-[232px] rounded-2xl md:rounded-[30px] w-full h-full 4 row-span2"
            />
            <img
              src="/images/neuracase.png"
              alt="project"
              className="in-h-[232px] rounded-2xl md:rounded-[30px] w-full h-full 5 row-span2"
            />
            <img
              src="/images/futurelynk.png"
              alt="project"
              className="in-h-[232px] rounded-2xl md:rounded-[30px] w-full h-full 6 row-span2"
            />
          </div>
        </section>

        {/* CLIENTS SAY */}
        <section id="client-reviews" className="pt-5 md:pt-10 mb-16 md:mb-20">
          <div className="flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-[3.2rem] md:items-center mb-10 md:mb-20">
            <div className="flex flex-1 gap-8 md:gap-10 lg:gap-[3.2rem] items-center">
              <h1 className="font-semibold text-white font-Inter text-2xl sm:text-3xl lg:text-5xl">
                Clients <span className="gradientText">Say</span>
              </h1>

              <div className="h-[3px] bg-gradient-to-r from-[#15A4FB] to-[#3FF7A6] w-full max-w-[72px]"></div>
            </div>

            <p className="font-light text-sm  md:text-base max-w-[694px]">
              Our global customer network is expanding daily. With a clientele
              of over 100 diverse entities spanning across various continents,
              we remain committed to ensuring each customer consistently
              receives an unparalleled service experience.{" "}
            </p>
          </div>

          <ClientsSay />
        </section>

        <section className="pt-5 md:pt-10 mb-16 md:mb-20">
          <div
            style={{
              backgroundImage: " url('/images/bg-rectangles.png')",
              backgroundSize: "40%",
              backgroundPosition: "right bottom",
            }}
            className="bg-secondary p-4 flex flex-col items-center min-[1120px]:items-start relative bg-no-repeat sm:p-6 lg:p-10 rounded-2xl md:rounded-[30px]"
          >
            <h2 className="font-semibold text-center min-[1120px]:text-left text-4xl md:text-6xl lg:text-[4rem] text-white">
              Let’s build it <span className="gradientText"> Together</span>
            </h2>

            <div className="flex w-full md:max-w-[80%] min-[1120px]:max-w-none mx-auto flex-col md:flex-row flex-grow gap-8 min-[1120px]:gap-14 mt-7 md:mt-14">
              <p className="w-full md:max-w-[60%]">
                Every step you take towards a new project is a journey from
                thought to fruition. Don't wait for the perfect moment; ignite
                your passion now, evolve with experience, and witness your
                dreams take shape.
              </p>
            </div>

            <span className="mt-7 md:mt-14 w-full max-w-[50%] mx-auto  min-[1120px]:hidden">
              <Button
                endIcon={
                  <svg
                    width="50"
                    height="16"
                    viewBox="0 0 50 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.9997 8H48.333M48.333 8L41.333 1M48.333 8L41.333 15M6.333 12.6667C7.57068 12.6667 8.75767 12.175 9.63284 11.2998C10.508 10.4247 10.9997 9.23768 10.9997 8C10.9997 6.76232 10.508 5.57534 9.63284 4.70017C8.75767 3.825 7.57068 3.33333 6.333 3.33333C5.09533 3.33333 3.90834 3.825 3.03317 4.70017C2.158 5.57534 1.66634 6.76232 1.66634 8C1.66634 9.23768 2.158 10.4247 3.03317 11.2998C3.90834 12.175 5.09533 12.6667 6.333 12.6667Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
                variant="contained"
                href={"/user/services"}
                fullWidth
                sx={{ background: theme.palette.primary.mainGradient }}
              >
                PURCHASE A SERVICE
              </Button>
            </span>
            <div className="hidden min-[1120px]:block absolute bg-main-bg p-4 rounded-tl-[30px] rounde-bl-[30px] z-50 bottom-0 right-0">
              <Button
                endIcon={
                  <svg
                    width="50"
                    height="16"
                    viewBox="0 0 50 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.9997 8H48.333M48.333 8L41.333 1M48.333 8L41.333 15M6.333 12.6667C7.57068 12.6667 8.75767 12.175 9.63284 11.2998C10.508 10.4247 10.9997 9.23768 10.9997 8C10.9997 6.76232 10.508 5.57534 9.63284 4.70017C8.75767 3.825 7.57068 3.33333 6.333 3.33333C5.09533 3.33333 3.90834 3.825 3.03317 4.70017C2.158 5.57534 1.66634 6.76232 1.66634 8C1.66634 9.23768 2.158 10.4247 3.03317 11.2998C3.90834 12.175 5.09533 12.6667 6.333 12.6667Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
                variant="contained"
                href={"/user/services"}
                sx={{
                  background: theme.palette.primary.mainGradient,
                  width: "352px",
                  height: "102px",
                  borderRadius: "16px",
                }}
              >
                PURCHASE A SERVICE
              </Button>
            </div>
          </div>
        </section>
      </main>
    </LandingPageLayout>
  );
};

export default LandingPage;
