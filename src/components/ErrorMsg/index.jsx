import Box from "@mui/material/Box";
import ErrorIcon from "./ErrorIcon";
export default function ErrorMsg({error}) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "60vh",
        width: "100%",
        textAlign: "center",
      }}
    >
      <ErrorIcon
        style={{
          width: "80px",
          height: "90px",
          marginBottom: "0.5rem",
        }}
      />
      <h3>Oops, Error</h3>
      <p style={{textAlign: "center", marginTop: 10}}>
        {error.status === "FETCH_ERROR"
          ? "Please check your internet connection and try again..."
          : error.data.message}
      </p>
    </Box>
  );
}
