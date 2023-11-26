import React, { useRef, useEffect } from "react";
import { Paper } from "@mui/material";

import type { Resume } from "../../data/resume";

import styles from "./index.module.css";

function RightPanel(props: { resume: Resume }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;
  }, [props.resume]);

  return (
    <div className={styles.Div}>
      <Paper elevation={6} sx={styles.Paper}>
        {/* {JSON.stringify(props.resume, null, 2)} */}
        <iframe ref={iframeRef} />
      </Paper>
    </div>
  );
}

export default RightPanel;
