import { Button, Fade, Slide } from "@mui/material";
import { memo } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
const MessageModal = memo(
	({
		otherChildren,
		closeModal,
		openModal = true,
		title,
		icon,
		description,
		cta,
		isLoading,
		otherClasses,
		iconBg,
		btnText,
		btnColor,
		button2,
		btn2Color,
		btn3Color,
		button2Title,
		button3Title,
		btn3Link,
		btn3IsLink = true,
		full_width = true,
		handleClick,
	}) => {
		// console.log(isLoading);
		return (
			<Fade in={openModal}>
				<div
					onClick={(e) => e.target === e.currentTarget && closeModal()}
					className={`modal-wrap  ${otherClasses || ""}`}
				>
					<Slide direction="up" in={openModal} mountOnEnter unmountOnExit>
						<div className="modal-content msg-modal">
							{iconBg && (
								<div className={`icon-wrap ${iconBg || "bg-primary-100"}`}>
									{icon}
								</div>
							)}
							<div className="my-auto max-w-[358px]">
								<p className="font-semibold text-[20px] text-prop text-center ">
									{title}
								</p>
								<div className="mb-8 text-grey50 font-normal text-sm mt-4">
									{description}
								</div>
								{otherChildren}
							</div>
							{!button2 &&
								(cta ||
									(handleClick ? (
										<Button
											fullWidth={full_width}
											variant={"contained"}
											color={btnColor && btnColor}
											onClick={() => handleClick()}
										>
											{btnText ? btnText : "Thanks"}
										</Button>
									) : (
										<Button
											fullWidth={full_width}
											variant={"contained"}
											color={btnColor && btnColor}
											onClick={closeModal}
										>
											{btnText ? btnText : "Thanks"}
										</Button>
									)))}

							{button2 && (
								<div className="flex w-full gap-2">
									<Button
										fullWidth
										variant="contained"
										color={btn2Color ? btn2Color : "primaryInverse"}
										onClick={closeModal}
									>
										{button2Title ? button2Title : "Thanks"}
									</Button>
									<Button
										fullWidth
										component={btn3IsLink ? Link : "button"}
										to={btn3IsLink ? btn3Link : undefined}
										variant="contained"
										color={btn3Color ? btn3Color : "primary"}
										onClick={(e) => {
											e.preventDefault();
											if (typeof handleClick === "function") {
												handleClick();
											}
											closeModal();
										}}
									>
										{button3Title}
									</Button>
								</div>
							)}
						</div>
					</Slide>
				</div>
			</Fade>
		);
	}
);

export default MessageModal;

MessageModal.defaultProps = {
	handleClick: () => {},
};
