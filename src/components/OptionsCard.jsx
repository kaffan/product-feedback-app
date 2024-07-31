import { Button, Grid } from "@mui/material";
import { Card, CustomButton } from "../common/CommonStyles";
import styled from "@emotion/styled";

// const CardButton = styled(Button, {name: ''})(({theme}) => ({
//     background: theme.palette.primary.
//     '&;hover':{

//     }
// }));
const OptionsCard = () =>{
    return(
        <Card>
            <Grid container spacing="7px" sx={{
                padding: '12px'
            }}>
                <Grid item><CustomButton text="All"></CustomButton></Grid>
                <Grid item><CustomButton text="UI"></CustomButton></Grid>
                <Grid item><CustomButton text="UX"></CustomButton></Grid>
                <Grid item><CustomButton text="Enhancement"></CustomButton></Grid>
                <Grid item><CustomButton text="Bug"></CustomButton></Grid>
                <Grid item><CustomButton text="Feature"></CustomButton></Grid>
            </Grid>
        </Card>
    );
}; 

export default OptionsCard;