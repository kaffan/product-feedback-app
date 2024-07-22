import { Fragment } from "react";
import { BackGroundTemplate } from "../common/CommonStyles";
import { Grid } from "@mui/material";
import FeedbackCard from "../components/FeedbackCard";
import OptionsCard from "../components/OptionsCard";

const SuggestionsView = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        padding: "6.5% 11.5%",
        // paddingLeft: "",
      }}
    >
      <Grid item key={1}>
        <Grid container direction="column" spacing={2}>
          <Grid item key={1}>
             <FeedbackCard />
          </Grid>
          <Grid item key={1}>
             <OptionsCard />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SuggestionsView;
