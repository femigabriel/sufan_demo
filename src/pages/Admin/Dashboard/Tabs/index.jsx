import ChatIcon from "../../../../components/Vectors/ChatIcon";
import { useEffect, useState } from "react";
import ManageOrder from "./widgets/ManageOrder";
import { useLocation, useNavigate } from "react-router-dom";
import BusinessChats from "./widgets/BusinessChats";

const stepComponents = {
  business_chat: <BusinessChats />,
  manage_orders: <ManageOrder />,
  delivery_status: <h1>DELIVERY STATUS</h1>,
  extend_delivery: <h1>EXTEND DELIVERY</h1>,
  files: <h1>FILES MANAGING</h1>,
  notifications: <h1>NOTIFICATIONS</h1>,
};

const Tabs = () => {
  const [presentTab, setPresentTab] = useState("business_chat");
  const navigate = useNavigate();
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const tab = params.get("tab");

  useEffect(() => {
    if (tab) setPresentTab(tab);
  }, [tab]);

  return (
    <section className="py-10 md:py-20 ">
      <div className="overflow-x-auto noScrollBar">
        <div className="flex  justifybetween gap-4 sm:gap-5 items-center w-full min-w-[1170px] max-w-[1170px] mx-auto mb-10 md:mb-20 ">
          {steps.map((step, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                setPresentTab(step.id);
                navigate(`?tab=${step.id}`);
              }}
              className={`outline-none transition-all duration-200 ${
                presentTab === step.id
                  ? "bg-[#3C57EA] text-white activeTab"
                  : "bg-white border-main-bg border-opacity-[35%] text-opacity-[35%] border  text-main-bg"
              } py-2.5 md:py-4 px6 px-3.5  uppercase min-w[13rem] text-sm md:text-base font-semibold rounded-[10px] flex gap-2.5 mdgap-4 items-center justify-center`}
            >
              {step.icon} {step.text}
            </button>
          ))}
        </div>
      </div>
      <div className="max-w-[1170px] mx-auto">{stepComponents[presentTab]}</div>
    </section>
  );
};

export default Tabs;

const steps = [
  {
    id: "business_chat",
    icon: <ChatIcon />,
    text: " chat",
  },
  {
    id: "manage_orders",
    icon: (
      <svg
        width="21"
        height="16"
        viewBox="0 0 21 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.3008 7L11.8008 3.5L13.2008 2.1L15.3008 4.2L19.5008 0L20.9008 1.4L15.3008 7ZM9.80078 3H0.800781V5H9.80078V3ZM19.8008 9.4L18.4008 8L15.8008 10.6L13.2008 8L11.8008 9.4L14.4008 12L11.8008 14.6L13.2008 16L15.8008 13.4L18.4008 16L19.8008 14.6L17.2008 12L19.8008 9.4ZM9.80078 11H0.800781V13H9.80078V11Z"
          fill="#1B30A459"
        />
      </svg>
    ),
    text: "Order Details",
  },
  {
    id: "delivery_status",
    icon: (
      <svg
        width="24"
        height="20"
        viewBox="0 0 24 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.09961 0H22.0996V9.5H20.0996V2H18.0996V7.618L15.0996 6.118L12.0996 7.618V2H10.0996V7.5H8.09961V0ZM14.0996 2V4.382L15.0996 3.882L16.0996 4.382V2H14.0996ZM9.03461 11.25C8.87042 11.2496 8.70775 11.2815 8.5559 11.344C8.40405 11.4064 8.26599 11.4982 8.14961 11.614L6.09961 13.664V17.5H11.7266L17.5296 16.05L21.0616 14.542C21.1819 14.477 21.274 14.3698 21.3201 14.2411C21.3663 14.1124 21.3633 13.9712 21.3118 13.8445C21.2602 13.7178 21.1637 13.6147 21.0408 13.5548C20.9178 13.4949 20.7771 13.4825 20.6456 13.52L20.6256 13.525L14.2136 15H10.5996V13H13.7246C13.9567 13 14.1792 12.9078 14.3433 12.7437C14.5074 12.5796 14.5996 12.3571 14.5996 12.125C14.5996 11.8929 14.5074 11.6704 14.3433 11.5063C14.1792 11.3422 13.9567 11.25 13.7246 11.25H9.03461ZM16.5866 12.402L20.1386 11.585C20.5169 11.4855 20.913 11.4741 21.2964 11.5515C21.6798 11.6289 22.0404 11.7932 22.3505 12.0317C22.6605 12.2702 22.9118 12.5766 23.085 12.9273C23.2582 13.2781 23.3487 13.6638 23.3496 14.055C23.3496 14.5299 23.2172 14.9954 22.9675 15.3994C22.7177 15.8033 22.3604 16.1297 21.9356 16.342L21.9086 16.356L18.1686 17.951L11.9726 19.5H0.599609V12.25H4.68561L6.73761 10.198C7.03995 9.89669 7.39868 9.65788 7.79331 9.49522C8.18795 9.33256 8.61076 9.24924 9.03761 9.25H13.7246C14.1255 9.24995 14.5221 9.33376 14.8887 9.49605C15.2553 9.65833 15.584 9.89551 15.8535 10.1923C16.123 10.4892 16.3275 10.8391 16.4537 11.2196C16.58 11.6002 16.6252 12.0029 16.5866 12.402ZM4.09961 14.25H2.59961V17.5H4.09961V14.25Z"
          fill="#1B30A459"
        />
      </svg>
    ),
    text: "DELIVERY STATUS",
  },
  {
    id: "extend_delivery",
    icon: (
      <svg
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.4004 20C4.87739 20 0.400391 15.523 0.400391 10C0.400391 4.477 4.87739 0 10.4004 0C15.9234 0 20.4004 4.477 20.4004 10C20.4004 15.523 15.9234 20 10.4004 20ZM10.4004 18C12.5221 18 14.557 17.1571 16.0572 15.6569C17.5575 14.1566 18.4004 12.1217 18.4004 10C18.4004 7.87827 17.5575 5.84344 16.0572 4.34315C14.557 2.84285 12.5221 2 10.4004 2C8.27866 2 6.24383 2.84285 4.74354 4.34315C3.24325 5.84344 2.40039 7.87827 2.40039 10C2.40039 12.1217 3.24325 14.1566 4.74354 15.6569C6.24383 17.1571 8.27866 18 10.4004 18ZM11.4004 10H15.4004V12H9.40039V5H11.4004V10Z"
          fill="#1B30A459"
        />
      </svg>
    ),
    text: "EXTEND DELIVERY",
  },
  {
    id: "files",
    icon: (
      <svg
        width="18"
        height="20"
        viewBox="0 0 18 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 7V17C17 17.5304 16.7893 18.0391 16.4142 18.4142C16.0391 18.7893 15.5304 19 15 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H11M17 7V6.828C16.9999 6.29761 16.7891 5.78899 16.414 5.414L12.586 1.586C12.211 1.2109 11.7024 1.00011 11.172 1H11M17 7H13C12.4696 7 11.9609 6.78929 11.5858 6.41421C11.2107 6.03914 11 5.53043 11 5V1"
          stroke="#1B30A459"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    text: "FILES MANAGING",
  },
  {
    id: "notifications",
    icon: (
      <svg
        width="18"
        height="21"
        viewBox="0 0 18 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 19H11C11 20.1 10.1 21 9 21C7.9 21 7 20.1 7 19ZM18 17V18H0V17L2 15V9C2 5.9 4 3.2 7 2.3V2C7 0.9 7.9 0 9 0C10.1 0 11 0.9 11 2V2.3C14 3.2 16 5.9 16 9V15L18 17ZM14 9C14 6.2 11.8 4 9 4C6.2 4 4 6.2 4 9V16H14V9Z"
          fill="#1B30A459"
        />
      </svg>
    ),
    text: "NOTIFICATIONS",
  },
];
