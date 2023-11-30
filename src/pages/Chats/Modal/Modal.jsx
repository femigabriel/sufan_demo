/* eslint-disable react/prop-types */
import { Fade, IconButton, Slide } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

import "./style.scss";
const Modal = ({
  children,
  closeModal,
  maxWidth = 500,
  openModal = true,
  showCancel = true,
  hideScroll,
  title,
}) => {
  return (
    <Fade in={openModal}>
      <div
        onClick={(e) => e.target === e.currentTarget && closeModal()}
        className="modal-wrap"
      >
        <Slide direction="up" in={openModal} mountOnEnter unmountOnExit>
          <div
            style={{ maxWidth }}
            className={`modal-content ${
              hideScroll ? "noScrollBar" : "scrollbar-style"
            }`}
          >
            <p className="modal-title">{title}</p>
            {showCancel && (
              <IconButton className="close-modal-btn" onClick={closeModal}>
                <ClearIcon />
              </IconButton>
            )}
            {children}
          </div>
        </Slide>
      </div>
    </Fade>
  );
};

export default Modal;
