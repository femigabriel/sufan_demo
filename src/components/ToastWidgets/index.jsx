// import {closeToast} from "../../redux/store.hooks";
import {selectToasts} from "../../redux/slice/ToasterSlice";
import CloseIcon from "../Vectors/CloseIcon";
import ErrorAlert from "../Vectors/ErrorAlert";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import SuccessCheck from "../Vectors/SuccessCheck";
import { closeToast } from "../../redux/store.hook";

const ToastWidget = () => {
  const toasts = useSelector(selectToasts);

  // there are situations where the toast get stuck on the screen, this will close it
  useEffect(() => {
    setTimeout(() => {
      closeToast();
    }, 5000);
  }, [toasts]);

  return (
    <div className="fixed right-4 top-0 z-[10000] grid gap-y-4 pr-5 pt-5 font-Mulish ">
      {toasts.map(toast => (
        <div
          style={{boxShadow: "0px 20px 20px rgb(0 0 0 / 10%)"}}
          className={`flex max-w-[20rem] space-x-4 rounded-lg bg-[#fcfcfd]  p-[0.8125rem] md:min-w-[27rem] md:p-4 ${
            toast.isOpen ? "animate-slide" : "translate-x-[150vw]"
          } transition-transform duration-700`}
          key={`toast-${toast.id}`}
        >
          <div className="min-h-[42px] min-w-[42px]">
            {toast.messageType === "success" ? (
              <SuccessCheck />
            ) : (
              <ErrorAlert />
            )}
          </div>
          <div className="flex flex-grow flex-col">
            <span className="text-sm font-semibold md:text-lg">
              {toast.messageType === "success" ? "Success!" : "Error"}
            </span>
            <p className="mt-1 text-xs text-gray-500 md:text-base">
              {toast.text}
            </p>
          </div>
          <div onClick={() => closeToast(toast.id)} className="cursor-pointer">
            <CloseIcon />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToastWidget;
