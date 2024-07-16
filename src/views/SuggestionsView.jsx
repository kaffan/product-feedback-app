import { Fragment } from "react";
import { BackGroundTemplate } from "../common/CommonStyles";
import { Grid } from "@mui/material";
import FeedbackCard from "../components/FeedbackCard";

const SuggestionsView = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        paddingTop: "6.5%",
        paddingLeft: "11.5%",
      }}
    >
      <Grid item key={1}>
        <Grid container spacing={2}>
          <Grid item key={1}>
             <FeedbackCard />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SuggestionsView;
