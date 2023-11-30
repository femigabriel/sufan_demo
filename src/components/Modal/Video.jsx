import { useEffect, useState } from "react";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import { Avatar, Fade, IconButton, Slide } from "@mui/material";
import "./style.scss";
import getVideoId from "get-video-id";
import ClearIcon from "@mui/icons-material/Clear";

export const getVideoThumbnail = async (videoUrl = "") => {
	const { service, id } = getVideoId(videoUrl);

	switch (service) {
		case "youtube":
			return `https://img.youtube.com/vi/${id}/mqdefault.jpg`;
		case "vimeo":
			const response = await fetch(
				`https://vimeo.com/api/oembed.json?url=${videoUrl}`
			);
			const json = await response.json();
			return json.thumbnail_url;
		default:
			return null;
	}
};

const Video = ({ type, videoUrl, maxWidth = 600 }) => {
	const [videoIsPlaying, setVideoIsPlaying] = useState(false);
	const [openVideoModal, setOpenVideoModal] = useState(false);
	const [thumbnailUrl, setThumbnailUrl] = useState(null);

	useEffect(() => {
		const fetchThumbnail = async () => {
			try {
				const url = await getVideoThumbnail(videoUrl);
				setThumbnailUrl(url);
			} catch (error) {
				console.error(error);
			}
		};
		fetchThumbnail();
	}, [videoUrl]);

	return (
		<>
			<div className="relative h-[350px] w-[600px] rounded-2xl overflow-hidden">
				{thumbnailUrl || type === "embeded_video" ? (
					<div
						onClick={() => {
							setOpenVideoModal(!openVideoModal);
							setVideoIsPlaying(!videoIsPlaying);
						}}
						className="h-full rounded-16 object-cover w-full"
					>
						<Avatar
							alt={"yo"}
							sx={{ width: "100%", height: "100%", borderRadius: "16px" }}
							src={thumbnailUrl || ""}
						>
							<img
								className="w-full object-cover"
								alt="broken"
								src="/images/broken-image.png"
							/>
						</Avatar>
					</div>
				) : (
					<video
						onClick={() => {
							setOpenVideoModal(!openVideoModal);
							setVideoIsPlaying(!videoIsPlaying);
						}}
						className="h-full block m-auto object-cover rounded-16 w-full"
					>
						<source
							src={
								videoUrl ||
								"https://youtu.be/aQDC6c675ms?list=UUm3hAp1m1xlAz0ve_EKAo4g"
							}
						/>
					</video>
				)}

				<IconButton
					onClick={() => {
						setOpenVideoModal(!openVideoModal);
						setVideoIsPlaying(!videoIsPlaying);
					}}
					sx={{
						bgcolor: "rgba(0, 0, 0, 0.3)",
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						"&:hover": {
							bgcolor: "rgba(0, 0, 0, 0.4)",
						},
					}}
				>
					<PlayArrowOutlinedIcon sx={{ color: "#FFF", fontSize: "1.9rem" }} />
				</IconButton>
			</div>
			<Fade in={openVideoModal}>
				<div
					onClick={(e) => {
						if (e.target === e.currentTarget) {
							setOpenVideoModal(!openVideoModal);
							setVideoIsPlaying(!videoIsPlaying);
						}
					}}
					className="modal-wrap"
				>
					<Slide direction="up" in={openVideoModal} mountOnEnter unmountOnExit>
						<div
							style={{
								maxWidth,
								minHeight: "unset",
								padding: 0,
								background: "none",
							}}
							className="modal-content scrollbar-style"
						>
							<IconButton
								className="!absolute top-0 right-0 z-10"
								sx={{ background: "rgba(0, 0, 0, 0.04) !important" }}
								onClick={() => {
									setOpenVideoModal(!openVideoModal);
									setVideoIsPlaying(false);
								}}
							>
								<ClearIcon />
							</IconButton>
							<div className={`relative w-full`}>
								{thumbnailUrl || type === "embeded_video" ? (
									<iframe
										className={`aspect-video w-full rounded-16 object-cover`}
										src={
											videoUrl ||
											"https://youtu.be/aQDC6c675ms?list=UUm3hAp1m1xlAz0ve_EKAo4g"
										}
										title="YouTube video player"
										frameborder="0"
										allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
										allowfullscreen
									>
										Your browser does not support this video format
									</iframe>
								) : (
									<video
										controls
										className={`aspect-video w-full rounded-16 object-cover`}
									>
										<source
											src={
												videoUrl ||
												"https://youtu.be/aQDC6c675ms?list=UUm3hAp1m1xlAz0ve_EKAo4g"
											}
										/>
										Your browser does not support the video tag.
									</video>
								)}
							</div>
						</div>
					</Slide>
				</div>
			</Fade>
		</>
	);
};

export default Video;
