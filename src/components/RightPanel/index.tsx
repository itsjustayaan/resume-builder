import React from "react";

import type { Resume } from "../../data/resume";

import styles from "./index.module.css";

function RightPanel(props: { resume: Resume }) {
  return (
    <div className={styles.Div}>
      <div className={styles.Paper}>
        {JSON.stringify(props.resume, null, 2)}
      </div>
    </div>
  );
}

export default RightPanel;
