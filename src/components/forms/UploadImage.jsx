/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {ArrowDownward} from "@mui/icons-material";
import {Avatar, IconButton} from "@mui/material";
// import EmptyImgIcon from "components/Vectors/EmptyImgIcon";
// import TrashIcon from "components/Vectors/TrashIcon";
// import VideoIcon from "components/Vectors/VideoIcon";
import {useEffect, useState} from "react";
import {useFormContext} from "react-hook-form";

function UploadImage({
  img,
  acceptImg,
  dashBorder,
  videoType = false,
  description,
  required,
  arrowDownLabel = false,
  ...props
}) {
  const [localImgUrl, setLocalImgUrl] = useState("");

  const {register, setValue} = useFormContext({
    mode: "all",
    revalidateMode: "all",
  });

  // useEffect(() => {
  //   setValue(props.name, localImgUrl);
  // }, [localImgUrl, props.name, setValue]);

  useEffect(() => {
    register(props.name, {
      required: required ? "This field is required" : "",
    });
  }, [props.name, register, required]);

  return (
    <div
      className={`-mb-2 h-[160px] relative cursor-pointer mt-2 ${
        props.bg && "bg-[#FAF5FF]"
      }  border ${
        dashBorder ? "border-dashed border-[2px]" : ""
      } rounded-lg p-5 flex justify-center items-center`}
    >
      {localImgUrl ? (
        <div className="w-full z-10 group h-full cursor-pointer absolute inset-0">
          <Avatar
            variant="rounded"
            sx={{width: "100%", height: "100%"}}
            src={
              typeof localImgUrl === "object"
                ? URL.createObjectURL(localImgUrl)
                : localImgUrl
            }
          />
          <IconButton
            component="label"
            sx={{background: "#8937CE !important", position: "absolute"}}
            className="group-hover:opacity-100 opacity-0 transition top-2 right-2"
            onClick={() => setLocalImgUrl("")}
          >
            {/* <TrashIcon color="white" /> */}
          </IconButton>
        </div>
      ) : !arrowDownLabel ? (
        <label
          htmlFor={props.name ? props.name : "logo"}
          className="flex flex-col text-xs md:text-sm gap-y-3 items-center"
        >
          {/* {videoType ? <VideoIcon /> : <EmptyImgIcon />} */}
          {description || (
            <>
              <p className="font-medium text-center">
                Drag and drop {videoType ? "video" : "photo"} here or{" "}
              </p>
              <p className="text-primary font-semibold">Browse</p>
            </>
          )}
        </label>
      ) : (
        <label
          htmlFor={props.name ? props.name : "logo"}
          className="flex flex-col  text-xs py-12 cursor-pointer items-center"
        >
          <span className="bg-primary w-10 h-10 rounded-full flex justify-center items-center">
            <ArrowDownward color="white" />
          </span>
        </label>
      )}
      <input
        required
        {...props}
        type="file"
        accept={` ${acceptImg ? "images/*" : null} `}
        onChange={(e) => {
          const file = e.target.files[0];
          setValue(props.name, file);
          setLocalImgUrl(file);
          // setsocialData(prev => ({...prev, logo: file}));
          // const reader = new FileReader();
          // reader.readAsDataURL(file);
          // reader.addEventListener(
          //   "load",
          //   function () {
          //     setLocalImgUrl(reader?.result || "");
          //   },
          //   false
          // );
        }}
        id={props.name ? props.name : "logo"}
        name={props.name ? props.name : "logo"}
        className="absolute inset-0 opacity-0"
      />
    </div>
  );
}

export default UploadImage;
