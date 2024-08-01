import { Box, Button, Grid, ThemeProvider } from "@mui/material";

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
        minHeight: "100vh",
        minWidth: "100%",
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
        boxShadow: "1px 4px 5px #979797",
        background: props?.style?.background || "white",
        color: "white",
        width: "255px",
        minHeight: "137px",
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

export const CustomButton = (props) => {
  return(
    <Button sx={{
      borderRadius: '7px',
      backgroundColor: '#F2F4FF',
      color: '#4661E6',
      fontWeight: 'bold' ,
      textTransform: 'none',
    }}>{props.text}</Button>
  );
};
