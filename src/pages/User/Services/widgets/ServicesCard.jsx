/* eslint-disable react/prop-types */
import { Button } from "@mui/material"
import theme from "../../../../theme"
import { truncateString } from "../../../../utils"

const ServicesCard = ({ className, service }) => {
    // console.log(service)
    return (
        <div className={`gradientBorder before:rounded-[14px] flex flex-col card bg-[#16236D]/70 p-4  pb-6 rounded-[14px] ${className}`}>
            <div>
                <img src={service.serviceImage} alt="card-img" className="h-[250px] !rounded-[10px] w-full" />
            </div>

            <div className="mt-6 text-white">
                <p className="font-semibold text-lg md:text-xl">
                    {service.id === 1 ? service.title.split(" ").slice(0, -1).join(" ") : service?.title}
                </p>

                <p className="font-normal text-xs md:text-sm my-5">
                    {truncateString(service.description, 300)}
                </p>
                <Button
                    href={`/user/services/${service.id}`}
                    variant="contained"
                    fullWidth
                    style={{ background: theme.palette.primary.mainGradient, }}
                >
                    LEARN MORE
                </Button>
            </div>
        </div>)
}

export default ServicesCard