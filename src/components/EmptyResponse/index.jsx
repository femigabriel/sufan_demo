/* eslint-disable react/prop-types */
import "./style.scss";
const EmptyResponse = ({
  image = "/images/emptyBox.svg",
  icon,
  message,
  extraText,
  iconBg = "none",
  btn,
  ...props
}) => {
  return (
    <div {...props} className="empty-response-pg">
      {icon ? (
        <div className={`icon-wrap ${iconBg || "bg-primary-100"}`}>{icon}</div>
      ) : (
        <img src={image} alt="no result" />
      )}
      <p className="title">{message}</p>
      <p className="mt-2 text-center max-w-[300px]">{extraText}</p>
      {btn && btn}
    </div>
  );
};

export default EmptyResponse;
