import { Box, Grid, ThemeProvider } from "@mui/material";

export const BackGroundTemplate = (props) => {
  return (
    // <ThemeProvider
    //   theme={{
    //     palette: {
    //       primary: {
    //         main: "#F2F2F2",
    //       },
    //     },
    //   }}
    // >
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        bgcolor: "#F7F8FD",
      }}
    >
      {props.children}
    </Box>
    // </ThemeProvider>
  );
};

export const Card = (props) => {
  console.log(props)
  return (
    <div
      style={{
        position: "relative",
        boxShadow: "1px 1px 7px black",
        background: props.style.background || "white",
        color: "white",
        width: "255px",
        height: "137px",
        borderRadius: "7px",
      }}
    >
      {props.children}
    </div>
  );
};
export const CommonGridLayout = () => {
  return <Grid container spacing={2}></Grid>;
};
