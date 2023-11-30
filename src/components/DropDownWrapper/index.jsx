import {useEffect, useRef, useState} from "react";
import "./style.scss";

const DropDownWrapper = ({
  action,
  children,
  className,
  contentPadding = "px-4",
  position = "right",
  orientation = "bottom",
  mobilePosition,
  closeOnBtnClick = false,
  extraClick = () => {},
}) => {
  const [showDropDown, setshowDropDown] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (showDropDown && ref.current && !ref.current.contains(e.target)) {
        setshowDropDown(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [showDropDown]);

  return (
    <div ref={ref} className={`drop-down-wrapper ${className || ""}`}>
      <div
        onClick={() => {
          extraClick();
          setshowDropDown(!showDropDown);
        }}
        className="drop-down-action flex"
      >
        {action}
      </div>
      <div
        className={`drop-down-content ${
          mobilePosition ? mobilePosition : `${position}-0`
        } md:${position}-0 ${
          position === "right" ? "origin-top-right" : "origin-top-left"
        } ${showDropDown ? "show-drop-down" : ""} ${
          orientation === "top"
            ? `origin-bottom-right bottom-[120%]`
            : `origin-top-right top-[120%]`
        }`}
      >
        <div
          className={`py-2 w-full ${contentPadding}`}
          onClick={() =>
            closeOnBtnClick ? setshowDropDown(prev => !prev) : null
          }
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default DropDownWrapper;
