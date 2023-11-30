import { Fade, IconButton, Slide } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import "./style.scss";
import { useState } from "react";
const ImageModal = ({
    children,
    // closeModal,
    img,
    maxWidth = 600,
    // openImageModal = true,
    title,
}) => {

    const [openImageModal, setOpenImageModal] = useState(false)
    const closeModal = () => {

    }
    return (
        <div>
            <img src={img} alt=""
                className="h-[120px] w-[120px] rounded-16 object-cover cursor-pointer"
                onClick={() => setOpenImageModal(!openImageModal)}
            />
            <Fade in={openImageModal}>
                <div
                    onClick={(e) => e.target === e.currentTarget && setOpenImageModal(!openImageModal)}
                    className="modal-wrap"
                >
                    <Slide direction="up" in={openImageModal} mountOnEnter unmountOnExit>
                        <div style={{ maxWidth }} className="modal-content scrollbar-style">
                            {/* <p className="modal-title w-[85%]">{title}</p> */}
                            <IconButton className="close-modal-btn" onClick={()=> setOpenImageModal(!openImageModal)}>
                                <ClearIcon />
                            </IconButton>
                            <img src={img} alt="im" className="mt-10 w-full"/>
                        </div>
                    </Slide>
                </div>
            </Fade>
        </div>
    );
};

export default ImageModal;
