import React from 'react';
import { Paper } from '@mui/material';

import styles from "./index.module.css"

const paper_style = {
  minHeight: "279mm", 
  maxHeight: "279mm",
  width: "216mm",
  display: "flex",
  // flexDirection: "row",
  alignItems: "flex-start",
  // justifyContent: "center",
};

function RightPanel() {
  return (
    <div className={styles.Div}>
      <Paper elevation={6} sx={paper_style}>
        fdsfsdfds
      </Paper>
    </div>
  );
}

export default RightPanel;
