import { Grid } from "@mui/material";
import BackBtn from "components/BackBtn";
import CompLeft from "./Comp/CompLeft";
import CompRight from "./Comp/CompRight";

const InboxRequest = () => {
  return (
    <div className="mt-[24px] mb-[24px] p-4 md:p-4 lg:px-[60px] lg:py-[20px] ">
      <div className="mb-4">
        <BackBtn />
      </div>
      <Grid container spacing={10}>
        <Grid item xs={12} lg={7} md={6}>
          <CompLeft />
        </Grid>
        <Grid item xs={12} lg={5} md={6}>
          <CompRight />
        </Grid>
      </Grid>
    </div>
  );
};
export default InboxRequest;
