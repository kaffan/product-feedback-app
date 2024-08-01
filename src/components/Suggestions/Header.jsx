import { Grid } from "@mui/material";
import { HeaderStyles } from "./Styles";

export const Header = () =>{
    return(
        <Grid container sx={HeaderStyles}>
            <Grid item>a</Grid>
            <Grid item>a</Grid>
            <Grid item>a</Grid>
            <Grid item>a</Grid>
        </Grid>
    );
};