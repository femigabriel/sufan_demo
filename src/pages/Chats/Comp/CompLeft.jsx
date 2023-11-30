import MultipleImageVideo from "components/Carousel/MultiImageVideo";
import ChipsWrap from "components/ChipsWrap";
import ContentDesc from "components/ContentDesc";
import ContentReq from "components/ContentReq";
import InfoCard2 from "components/InfoCard2";
import BriefcaseIcon from "components/Vectors/BriefcaseIcon";
import CalendarIcon from "components/Vectors/CalendarIcon";
import { mock_ct } from "utils/mock_data";

const CompLeft = () => {
  return (
    <div>
      <h2 className="font-semibold text-[24px] text-[#000] text-prop mb-4 ">
        Video advertisement for a fashion brand
      </h2>
      <MultipleImageVideo />

      {/* compensation  */}
      <div className="mt-8 ">
        <span className="text-prop font-medium text-grey text-[14px] ">
          Compensation
        </span>
        <p className="font-semibold leading-[140%] text-[32px] tracking-[-0.06em] text-grey10 ">
          $500
        </p>
      </div>
      <div className="mt-[24px] w-full grid md:grid-cols-2 gap-4 ">
        <InfoCard2 title="Category" description="Design" />
        <InfoCard2
          title="Sub Category"
          description="Logo Design "
          icon={<BriefcaseIcon color="#8937CE" />}
        />
        <InfoCard2
          title="Expected Deliver"
          icon={<CalendarIcon color="#8937CE" />}
          description="3 Weeks "
        />
      </div>

      {/* chips  */}
      <ChipsWrap
        chipsArr={mock_ct}
        title="Tags"
        className="text-grey10 mb-[12px] text-[18px] font-semibold mt-[32px] text-prop "
      />

      {/* description  */}
      <ContentDesc />

      {/* requirement  */}
      <ContentReq />
    </div>
  );
};
export default CompLeft;
