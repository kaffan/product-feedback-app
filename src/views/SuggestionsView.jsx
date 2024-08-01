import { Fragment } from "react";
import { BackGroundTemplate } from "../common/CommonStyles";
import { Grid } from "@mui/material";
import FeedbackCard from "../components/FeedbackCard";
import OptionsCard from "../components/OptionsCard";
import { Roadmap } from "../components/Roadmap";
import { Suggestions } from "../components/Suggestions/Suggestions";

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
        <Grid container direction="column" spacing={6} columnSpacing={6}>
          <Grid item key={1}>
             <FeedbackCard />
          </Grid>
          <Grid item key={1}>
             <OptionsCard />
          </Grid>
          <Grid item>
            <Roadmap />
          </Grid>
        </Grid>
      </Grid>
      <Grid item sx={{width: '55%'}}>
        <Suggestions />
      </Grid>
    </Grid>
  );
};

export default SuggestionsView;
