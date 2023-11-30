import store from "./store";
import { logOut } from "./slice/authSlice";
import {hideToast, removeToast, toastMessage} from "./slice/ToasterSlice";
import { nanoid } from "@reduxjs/toolkit";

// show toaster function
export const showToast = (text, messageType, duration = 5000) => {
    const id = nanoid();
    store.dispatch(
      toastMessage({
        text,
        messageType: messageType || "success",
        id,
      }),
    );
  
    setTimeout(() => {
      closeToast(id);
    }, duration);
  };
  
  // close toaster
  export const closeToast = id => {
    store.dispatch(hideToast(id));
  
    setTimeout(() => {
      store.dispatch(removeToast(id));
    }, 700);
  };

export const logOutHandler = ({ type, redirect = false }) => {
    store.dispatch(logOut({redirect, type: type}));
  };