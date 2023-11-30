/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { CameraEnhance, MoreHorizOutlined } from "@mui/icons-material";
// import UserDisplay from "../../../components/TableComponent/UserDisplay";
import { Avatar, IconButton } from "@mui/material";
import moment from "moment";
// import { truncateString } from "../../../utils";

function ChatProfile({
  lastMsg,
  isOnline,
  senderInfo,
  time,
  id,
  active,
  isTyping,
  ...props
}) {

  // console.log(isOnline)

  return (
    <div
      className={`py-3 max-w[600px] lg:px-4 bg-mainbg font-medium px7 borderb cursor-pointer flex justify-between items-center ${active ? "bg-secondary rounded-xl " : 'md:py-6 '
        }`}
      {...props}
    >
      <div className="flex gap-4 items-center">
        <span className="relative">
          <Avatar
            src={senderInfo?.profileImage}
            sx={{
              borderRadius: "50%",
              width: 40,
              height: 40,
            }}
          />
          <span className={`absolute -bottom-0 -right-0 w-3 h-3 rounded-full ${isOnline ? 'bg-success' : 'bg-error'}`}></span>
          {/* {senderInfo?.kyc_verified &&
            <div className="absolute -top-2 -right-1">
              <VerifyIcon />
            </div>
          } */}
        </span>
        <div>
          <p className="text-white capitalize text-sm font-semibold">{senderInfo?.fullName} {' '}
            {' '}  <span className="!font-normal text-white/50 !text-xs">{moment(time).format('LT')}</span>
          </p>

          <p className="text-xs text-light-blue mt-1">
            {isTyping &&
              <span className="italic">Typing</span>
            }
            {!isTyping &&
              (typeof lastMsg === "string" && !lastMsg?.includes('https')
                ?
                // truncateString(lastMsg, 30)
                `${lastMsg.substring(0, 30)} ${lastMsg.length > 30 ? "..." : ""
                }`
                : lastMsg?.includes('https')
                  ? <p className="flex gap-1 items-center"> <CameraEnhance sx={{ fontSize: '14px' }} /> Photo</p>
                  : lastMsg)
            }
          </p>
        </div>
      </div>
      <div className="text-right w-8 h-8 rounded-lg flex justify-center items-center !border border-light-blue">
        <IconButton className=" ">
          <MoreHorizOutlined sx={{ color: '#99A9FF' }} fontSize="small" />
        </IconButton>
      </div>
    </div>
  );
}

export default ChatProfile;
