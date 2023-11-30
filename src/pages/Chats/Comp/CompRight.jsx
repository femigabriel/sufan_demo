import { Avatar, Button } from "@mui/material";

const CompRight = () => {
  return (
    <div className="w-full">
      {/* <div className="rounded-xl p-4 text-base font-medium bg-[#000033]">
        <p className="text-white mb-3">Request Message</p>
        <p className="text-grey70">
          Fames sit ut amet, rhoncus odio egestas vitae aliquam. Pharetra felis
          arcu, vel tempor, dictum arcu. Morbi auctor tortor, facilisis a
          lobortis tortor mi, vitae. Vulputate ligula pharetra et erat amet
          sollicitudin. Purus hac ut lorem feugiat id scelerisque. Nec volutpat
          malesuada id tincidunt feugiat. Morbi est rutrum viverra eget proin.
        </p>
      </div> */}

      <div className="flex gap-3 w-full my-4">
        <Button variant="contained" color="errorInverse" fullWidth>
          Decline
        </Button>
        <Button variant="contained" color="primary" fullWidth>
          Accept
        </Button>
      </div>

      <p className="font-semibold my-4 text-grey10 text-[18px]">Buyer</p>

      <div className="flex justify-between border rounded-lg items-center p-4">
        <div className="flex gap-4 items-center">
          <Avatar sx={{ width: 48, height: 48 }} src="/images/avatar.png" />
          <div>
            <h2 className="text-base text-black font-semibold">Nneka Chukwu</h2>
            <p className="text-[12px]">@BassieCoo</p>
          </div>
        </div>
        <Button variant="contained" color="primaryInverse">
          View Profile
        </Button>
      </div>
    </div>
  );
};
export default CompRight;
