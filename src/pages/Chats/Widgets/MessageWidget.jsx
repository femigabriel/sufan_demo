/* eslint-disable react/prop-types */
import { Avatar } from "@mui/material";
// import DownloadIconCircle from "components/Vectors/DownloadIconCircle";
// import FileIcon from "components/Vectors/FileIcon";
import moment from "moment";
// import {getDayRange} from "utils";
// import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
// import AddToCampaignModal from "./AddToCampaignModal";
import "../style.scss";
import { useGetUser } from "../../../hooks/getUserHook";
// import CalendarIcon from "components/Vectors/CalendarIcon";
// import CalendarStrokeIcon from "components/Vectors/CalendarStrokeIcon";
// import TickCircleIcon from "components/Vectors/TickCircleIcon";
// import HourglassIcon from "components/Vectors/HourglassIcon";

function MessageWidget({ msg, senderInfo, setOpenImage, setImage,isOnline }) {
  const { user } = useGetUser()
  // console.log(msg?.image)

  return (
    <>
      <div>
        <div key={msg?._id}>
          <div
            className={`message ${msg?.senderId?._id === user?._id ? "receiver" : "sender"
              }`}
          >
            {msg?.senderId?._id !== user?._id && (
              <span className="relative mr-2">
                <Avatar
                  className="w-full h-full"
                  sx={{ borderRadius: '8px' }}
                  src={senderInfo?.profileImage || ""}
                  alt={"Sender"}
                />
                <span className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full ${isOnline ? 'bg-success' : 'bg-error'}`}></span>

              </span>
            )}

            <div className="right">
              <p
                className={`time w-fit mb-2 flex gap-1 items-center text-white font-normal text-xs  ${msg?.senderId?._id === user?._id ? "ml-auto" : "mr-auto"
                  }`}
              >
                <span className="capitalize font-bold">{msg?.senderId?.fullName}</span>
                {/* {getDayRange(msg?.date)} */}
                <span className="text-white/50">
                  {moment(msg?.updatedAt).format("LT")}
                </span>
              </p>
              {msg?.message && (
                <p
                  className={`text  ${msg?.senderId?._id !== user?._id
                    ? "bg-[#3C57EA] text-white"
                    : "text-white bg-[#1B30A4]"
                    }`}
                >
                  {msg?.message}
                </p>
              )}

              {msg?.image &&
                // <Avatar
                //   sx={{
                //     borderRadius: "12px",
                //     width: window.innerWidth > 768 ? 386 : 180,
                //     height: 200,
                //     mt: 2,
                //   }}
                //   src={msg?.image}
                // />
                <img onClick={() => {
                  setOpenImage(true)
                  setImage(msg?.image)
                }} src={msg?.image} alt="chat_img" className="cursor-pointer object-cover h-[200px] w-[180px] md:w-[386px] mt-3 rounded-xl" />
              }

            </div>
            {msg?.senderId?._id === user?._id && (
              <Avatar
                className="avatar ml-2"
                sx={{ borderRadius: '8px' }}
                src={senderInfo?.profileImage || ""}
                alt={"Sender"}
              />
            )}
          </div>
        </div>
      </div>


    </>
  );
}

export default MessageWidget;
