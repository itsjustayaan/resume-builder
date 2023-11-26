import React from "react";
import { useImmerReducer } from "use-immer";

import LeftPanel from "../LeftPanel";
import RightPanel from "../RightPanel";
import { Resume, emptyResume, emptyResumeArray } from "../../data/resume";
import { ResumeActions } from "../../data/actions";

import styles from "./index.module.css";

export const Editor = () => {
  const [resume, disptch] = useImmerReducer<Resume, ResumeActions>(
    (draft, action) => {
      switch (action.name) {
        case "add":
          {
            const obj: Array<any> = draft[action.value.path];
            obj.push(Object.assign({}, emptyResumeArray[action.value.path]));
          }
          break;

        case "delete":
          {
            const obj: Array<any> = draft[action.value.path];
            obj.splice(action.value.index, 1);
          }
          break;

        case "mutate":
          {
            const obj: any = draft[action.value.object];
            obj[action.value.key] = action.value.value;
          }
          break;

        case "mutate-array":
          {
            const obj: any = draft[action.value.object];
            obj[action.value.index][action.value.key] = action.value.value;
          }
          break;
      }
    },
    emptyResume
  );

  return (
    <div className={styles.Div}>
      <LeftPanel resume={resume} dispatch={disptch} />
      <RightPanel resume={resume} />
    </div>
  );
};
