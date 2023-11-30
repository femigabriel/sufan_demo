import UserIcon from "../../../../components/Vectors/UserIcon";
import ChatIcon from "../../../../components/Vectors/ChatIcon";
import TxnIcon from "../../../../components/Vectors/TxnIcon";
// import SettingsIcon from "../../../../components/Vectors/SettingsIcon";
import { useEffect, useState } from "react";
import ManageOrder from "./widgets/ManageOrder";
import { useLocation, useNavigate } from "react-router-dom";
import BusinessChats from "./widgets/BusinessChats";

const Tabs = () => {
  const [presentTab, setPresentTab] = useState("manage_orders");
  const navigate = useNavigate();
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const tab = params.get("tab");

  useEffect(() => {
    if (tab) setPresentTab(tab);
  }, [tab]);

  const stepComponents = {
    profile_image: <h1>PROFILE IMAGE</h1>,
    business_chat: <BusinessChats />,
    manage_orders: <ManageOrder />,
    // settings: <h1>SETTINGS</h1>,
  };
  return (
    <section className="py-10 md:py-20 ">
      <div className="flex noScrollBar justify-between gap-4 sm:gap-6 items-center max-w-[1170px] mx-auto mb-10 md:mb-20 overflow-x-auto">
        {steps.map((step, i) => (
          <button
            key={i}
            type="button"
            onClick={() => {
              setPresentTab(step.id);
              navigate(`?tab=${step.id}`);
            }}
            className={`transition-all duration-200 ${
              presentTab === step.id
                ? "bg-[#3C57EA] text-white activeTab"
                : "bg-[#1F35B0] text-[#99A9FF]/50"
            } py-4 px6 lg:px-9  uppercase min-w-[13rem] text-sm md:text-base font-semibold rounded-[10px] flex gap-2.5 md:gap-4 items-center justify-center`}
          >
            {step.icon} {step.text}
          </button>
        ))}
      </div>

      <div className="max-w-[1170px] mx-auto">{stepComponents[presentTab]}</div>
    </section>
  );
};

export default Tabs;

const steps = [
  {
    id: "profile_image",
    icon: <UserIcon />,
    text: "PROFILE IMAGE",
  },
  {
    id: "business_chat",
    icon: <ChatIcon />,
    text: "Business chat",
  },
  {
    id: "manage_orders",
    icon: <TxnIcon />,
    text: "Manage orders",
  },
  // {
  //   id: "settings",
  //   icon: <SettingsIcon />,
  //   text: "Settings",
  // },
];
