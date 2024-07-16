import { Fragment } from "react";
import { BackGroundTemplate } from "./common/CommonStyles";
import SuggestionsView from "./views/SuggestionsView";

const Mainview = () => {
  return (
    <Fragment>
      <BackGroundTemplate>
      <SuggestionsView />
      
      </BackGroundTemplate>
    </Fragment>
  );
};

export default Mainview;
