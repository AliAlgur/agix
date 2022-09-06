import React, { Fragment } from "react";
import { withStyles } from "@material-ui/styles";
import Upload from "./Upload";
import StyledButton from "../../../../common/StyledButton";
import { useStyles } from "./styles";

const Data = ({ classes }) => {
  return (
    <div className={classes.modelDataContaienr}>
      <div className={classes.createDatasetContainer}>
        <span>Creating your dataset</span>
        <p>
          This AI requires a certain type of data set for Model trainng. Download sample data from following and submit.
        </p>
        <div>
          <i class="fa-solid fa-file-arrow-down"></i>
          <span>filename.zip</span>
          <StyledButton type="blue" btnText="Download Sample" />
        </div>
      </div>
      <div className={classes.uploadDatasetContainer}>
        <span>Upload your dataset</span>
        <Upload />
      </div>
      <div className={classes.btnContainer}>
        <StyledButton btnText="Back" type="transparent" />
        <StyledButton btnText="Next" type="blue" />
      </div>
    </div>
  );
};

export default withStyles(useStyles)(Data);
