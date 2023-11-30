import { Button } from "@mui/material";
import ValidatedInput from "components/forms/ValidatedInput";
import ValidatedTextArea from "components/forms/ValidatedTextArea";
import { useForm, FormProvider } from "react-hook-form";
import Modal from ".";

const MessageModal2 = ({
  openModal,
  setOpenModal,
  btnColor,
  title,
  buttonTitle,
  otherState,
  setCancelReq
}) => {
  const methods = useForm();

  return (
    <Modal
      openModal={openModal}
      closeModal={() => setOpenModal(!openModal)}
      title={title}
    >
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) => {
            setOpenModal(false);
            otherState((prev) => !prev);
            setCancelReq(true)
          })}
          className="flex flex-col justify-between flex-grow"
        >
          <ValidatedTextArea name="message" label="Send a message" />

          <div className="mt-[auto] ">
            <Button
              type="submit"
              color={btnColor}
              variant="contained"
              sx={{ width: "100%", mt: 2 }}
            >
              {buttonTitle}
            </Button>
          </div>
        </form>
      </FormProvider>
    </Modal>
  );
};
export default MessageModal2;
