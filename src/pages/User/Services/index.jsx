/* eslint-disable react/no-unescaped-entities */
import LandingPageLayout from "../../../templates/LandingPageLayout";
import { Button } from "@mui/material";
import theme from "../../../theme";
import TextWithLinesBg from "../../../components/TextWithLinesBg";
import { services } from "../../../utils/data";
import { truncateString } from "../../../utils";

const ServicesPage = () => {
  // const navigate = useNavigate()

  return (
    <LandingPageLayout>
      <main className="max-w-[1170px] mx-auto flex flex-col items-center">
        <TextWithLinesBg text="Services Gallery" />

        <section className="flex flex-col gap-6 md:gap-10">
          {services.map((service) => (
            <div
              key={service?.id}
              className="p-5 md2:p-7 max-h-fit py10 rounded-xl md:rounded-[24px] text-white border-[#16236D] bg-[#16236D]/70 flex flex-col md2:flex-row gap-12 md2:gap-20 items-center md2:items-start"
            >
              <div className="flex-1 !rounded-[15px]">
                <img
                  src={service.serviceImage}
                  alt="serviceImage"
                  className=" !rounded-[15px] min-w-full h-full object-contain"
                />
              </div>

              <div className="flex-1 textcenter mx-auto md2: text-left flex flex-col justify-center items-center md2:items-start">
                <div className="serviceTextHolder h-full">
                  <div className="textOnly">
                    <p className="font-bold text-2xl md:text-[2rem] text-center md2:text-left">
                      {service?.title}
                    </p>

                    <p className="font-normal max-w-[600px]  md2:max-w-[552px] text-sm my-3.5 md:text-base">
                      {truncateString(service?.description, 500)}
                    </p>

                    <p className="font-normal mb-10 text-sm md:text-base">
                      STARTING FROM:{" "}
                      <span className="bg-clip-text font-semibold text-transparent bg-gradient-to-r from-[#15A4FB] to-[#3FF7A6] text text-base md:text-lg">
                        ${service.availablePlans.basic.cost}
                      </span>
                    </p>
                  </div>
                  <div className="buttoOnly self-center md2:self-start">
                    <Button
                      href={`/user/services/${service?.id}`}
                      variant="contained"
                      style={{
                        background: theme.palette.primary.mainGradient,
                        width: "251px",
                        mt: "auto",
                      }}
                      // className="text-center bg-gradient-to-r from-[#15A4FB] to-[#3FF7A6] py-3 w-[251px] rounded-lg"
                    >
                      CHOOSE TIER
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </LandingPageLayout>
  );
};

export default ServicesPage;
