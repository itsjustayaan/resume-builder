import React from "react";
import { Paper } from "@mui/material";

import type { Resume } from "../../data/resume";

import styles from "./index.module.css";

function RightPanel(props: { resume: Resume }) {
  return (
    <div className={styles.Div}>
      <Paper elevation={6} sx={styles.Paper}>
        {/* {JSON.stringify(props.resume, null, 2)} */}
      </Paper>
    </div>
  );
}

export default RightPanel;
