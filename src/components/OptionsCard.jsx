import { Button, Grid } from "@mui/material";
import { Card } from "../common/CommonStyles";
import styled from "@emotion/styled";

// const CardButton = styled(Button, {name: ''})(({theme}) => ({
//     background: theme.palette.primary.
//     '&;hover':{

//     }
// }));
const OptionsCard = () =>{
    return(
        <Card>
            <Grid container sx={{
                
            }}>
                <Grid item><Button>All</Button></Grid>
                <Grid item><Button>UI</Button></Grid>
                <Grid item><Button>UX</Button></Grid>
                <Grid item><Button>Enhancement</Button></Grid>
                <Grid item><Button>Bug</Button></Grid>
                <Grid item><Button>Feature</Button></Grid>
            </Grid>
        </Card>
    );
}; 

export default OptionsCard;