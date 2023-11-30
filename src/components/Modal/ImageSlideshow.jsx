import { useState } from "react";
import { Avatar, Button, MobileStepper } from "@mui/material";
import { Fade, IconButton, Slide } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";

const ImageSlideShow = ({ images }) => {
	const CollectionSize = images?.length;
	const theme = useTheme();
	const [activeStep, setActiveStep] = useState(0);
	const [openModal, setOpenModal] = useState(false);

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handlePrev = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};
	const closeModal = () => setOpenModal(false);

	const handleImageClick = () => {
		setOpenModal(true);
	};


	return (
		<div>
			<div className="flex flex-wrap gap-3">
				{images?.map((el, i) => (
					<img
						key={i}
						onClick={() => {
							handleImageClick();
							setActiveStep(i);
						}}
						className="rounded-1 aspect-square max-w-[48%] cursor-pointer rounded-lg object-cover md:max-w-[23%]"
						src={el?.image_url || el?.url || el}
						alt="slide show"
					/>
				))}
			</div>

			<Fade in={openModal}>
				<div
					onClick={(e) => e.target === e.currentTarget && closeModal()}
					className="modal-wrap"
				>
					<Slide direction="up" in={openModal} mountOnEnter unmountOnExit>
						<div
							style={{
								maxWidth: 700,
								flexGrow: 1,
								position: "relative",
							}}
						>
							<IconButton
								sx={{ background: "rgba(0, 0, 0, 0.04) !important" }}
								className="close-modal-btn"
								onClick={closeModal}
							>
								<ClearIcon sx={{ fontSize: "40px" }} color="white" />
							</IconButton>
							<Avatar
								src={images[activeStep]?.image_url || images[activeStep]?.url || images[activeStep]}
								sx={{
									height: 500,
									width: "100%",
									maxWidth: 700,
									display: "block",
									overflow: "hidden",
									borderRadius: "20px",
								}}
								alt={images[activeStep]?.label}
							/>
							<MobileStepper
								variant="text"
								position="static"
								activeStep={activeStep}
								steps={CollectionSize}
								sx={{ background: "transparent" }}
								nextButton={
									<Button
										size="medium"
										onClick={handleNext}
										color="white"
										disabled={activeStep === CollectionSize - 1}
									>
										Next
										{theme.direction !== "rtl" ? (
											<KeyboardArrowRight />
										) : (
											<KeyboardArrowLeft />
										)}
									</Button>
								}
								backButton={
									<Button
										size="medium"
										onClick={handlePrev}
										color="white"
										disabled={activeStep === 0}
									>
										{theme.direction === "rtl" ? (
											<KeyboardArrowRight />
										) : (
											<KeyboardArrowLeft />
										)}
										Back
									</Button>
								}
							/>
						</div>
					</Slide>
				</div>
			</Fade>
		</div>
	);
};

export default ImageSlideShow;
