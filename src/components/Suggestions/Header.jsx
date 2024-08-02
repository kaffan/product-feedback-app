import { Grid } from "@mui/material";
import { HeaderStyles } from "./Styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

export const Header = () =>{
    return(
        <Grid container sx={HeaderStyles}>
            <Grid item><img style={{
                color: 'white',
                width: '25px',
                height: '25px'
            }} src='./../../../static/images/bulb2.svg' /></Grid>
            <Grid item><span></span></Grid>
            <Grid item>a</Grid>
            <Grid item>a</Grid>
        </Grid>
    );
};