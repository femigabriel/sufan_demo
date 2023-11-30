/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {AddCircleOutlineOutlined} from "@mui/icons-material";
import {Button, IconButton} from "@mui/material";
import AutoCompleteField from "../../../components/forms/AutoCompleteInputField";
import UploadImage from "../../../components/forms/UploadImage";
import ValidatedInput from "../../../components/forms/ValidatedInput";
import ClearIcon from "@mui/icons-material/Clear";
import Modal from "../../../components/Modal";
import {useForm, FormProvider, useFieldArray} from "react-hook-form";
import InputField from "../../../components/forms/InputField";

const CreateCSModal = ({
  openModal = true,
  setOpenModal,
  btnColor,
  title,
  buttonTitle,
  otherState,
  setCancelReq,
}) => {
  const methods = useForm({
    defaultValues: {
      basic: {
        features: [{feature: ""}],
      },
    },
  });

  const {fields, append, remove} = useFieldArray({
    control: methods.control,
    name: "basic.features",
  });

  return (
    <Modal
      hideScroll={true}
      openModal={openModal}
      closeModal={() => setOpenModal(!openModal)}
      title={title}
    >
      <h2 className="font-semibold text-prop text-grey10 text-base ">
        Overview
      </h2>
      <p className="font-[400] text-prop text-grey50 text-[12px] ">
        Upload a cover image that depicts the service you need.
      </p>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) => {
            setOpenModal(false);
            otherState((prev) => !prev);
            setCancelReq(true);
          })}
          className="flex flex-col justify-between flex-grow mt-[2rem] "
        >
          <ValidatedInput
            name="title"
            spaceY={false}
            label="Job Title"
            className="border-[#C4C4C4] my-2"
            type={"text"}
            placeholder={"Enter job title here"}
          />
          <div className="my-2">
            <AutoCompleteField
              name="category"
              selectOption={categoryData.map((item) => item.name)}
              label="Category"
              required={true}
            />
          </div>
          <AutoCompleteField
            name="subCategory"
            selectOption={subCategoryData.map((item) => item.name)}
            label="Sub Category"
            required={true}
          />
          <div className="mt-4">
            <h3
              className="text-grey10 font-semibold text-prop text-base
            "
            >
              Upload cover image
            </h3>
            <p className="font-[400] mb-3 text-prop text-[12px] text-grey50 ">
              Upload a cover image that depicts the service you need.{" "}
            </p>
            <UploadImage
              dashBorder={true}
              acceptImg={true}
              name="coverImage"
              required={true}
              description={
                <>
                  <p className="font-medium text-center">
                    Drag and drop photo here or{" "}
                    <span className="text-primary font-semibold">Browse</span>
                  </p>
                  <p className="text-center -mt-1 text-grey50 text-[12px] font-[400]">
                    Max 1MB each .png, .jpg, .jpeg, .gif
                  </p>
                </>
              }
            />
          </div>
          <ValidatedInput
            name={`price`}
            label="Price"
            prefixIcon={
              <span className="rounded bg-grey90 py-1 px-2.5">₦</span>
            }
          />
          <ValidatedInput
            name="duration_month"
            label="Duration"
            prefixIcon={
              <span className="rounded text-sm font-medium bg-grey90 p-1 z-10">
                Months
              </span>
            }
          />
          <div className="-my-10">
            <ValidatedInput
              name="duration_week"
              label=""
              prefixIcon={
                <span className="rounded text-sm font-medium bg-grey90 p-1 z-10">
                  Weeks
                </span>
              }
            />
          </div>
          <div>
            <ValidatedInput
              name="duration_day"
              label=""
              prefixIcon={
                <span className="rounded text-sm font-medium bg-grey90 p-1 z-10">
                  Days
                </span>
              }
            />
          </div>
          <div className="grid items-end mt-2 gap-x-6 grid-cols-2">
            <AutoCompleteField name="state" label="State" selectOption={[]} />
            <InputField
              name="city"
              label="City"
              placeholder="Enter your city"
            />
          </div>

          <div className="mt-[2rem]">
            <Button
              type="submit"
              color={btnColor}
              variant="contained"
              sx={{width: "100%", mt: 2}}
            >
              {buttonTitle}
            </Button>
          </div>
        </form>
      </FormProvider>
    </Modal>
  );
};
export default CreateCSModal;

const categoryData = [
  {name: "Category 1"},
  {name: "Category 2"},
  {name: "Category 3"},
  {name: "Category 4"},
];

const subCategoryData = [
  {name: "Sub Category 1"},
  {name: "Sub Category 2"},
  {name: "Sub Category 3"},
  {name: "Sub Category 4"},
];

const durationTime = [{time: "3 days"}, {time: "5 days"}, {time: "7 days"}];
