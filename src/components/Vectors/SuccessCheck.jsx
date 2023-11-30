import React from "react";

const SuccessCheck = (props) => {
  return (
    <svg
      width="40"
      height="41"
      viewBox="0 0 40 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="20" cy="20.5" r="20" fill="#2EB872" fillOpacity="0.12" />
      <path
        d="M26.7099 15.71C26.617 15.6163 26.5064 15.5419 26.3845 15.4911C26.2627 15.4403 26.132 15.4142 25.9999 15.4142C25.8679 15.4142 25.7372 15.4403 25.6154 15.4911C25.4935 15.5419 25.3829 15.6163 25.29 15.71L17.84 23.17L14.7099 20.03C14.6134 19.9367 14.4995 19.8634 14.3746 19.8142C14.2498 19.765 14.1165 19.7409 13.9823 19.7432C13.8481 19.7455 13.7157 19.7743 13.5926 19.8278C13.4695 19.8812 13.3582 19.9585 13.2649 20.055C13.1717 20.1515 13.0984 20.2654 13.0492 20.3903C13 20.5152 12.9759 20.6485 12.9782 20.7827C12.9805 20.9168 13.0092 21.0493 13.0627 21.1723C13.1162 21.2954 13.1934 21.4067 13.2899 21.5L17.13 25.34C17.2229 25.4337 17.3335 25.5081 17.4554 25.5589C17.5772 25.6096 17.7079 25.6358 17.84 25.6358C17.972 25.6358 18.1027 25.6096 18.2245 25.5589C18.3464 25.5081 18.457 25.4337 18.55 25.34L26.7099 17.18C26.8115 17.0863 26.8925 16.9727 26.9479 16.8462C27.0033 16.7197 27.0319 16.5831 27.0319 16.445C27.0319 16.3069 27.0033 16.1703 26.9479 16.0438C26.8925 15.9173 26.8115 15.8036 26.7099 15.71Z"
        fill={props.color || "#2EB872"}
      />
    </svg>
  );
};

export default SuccessCheck;
