import React from "react";
import Collapsible from "./Collapsible";
import Input from "./Input";


const Project = () => {
  return (
    <div>
      <Collapsible name="Project 1">
        <div>
          <div className="protitle">
            <label>Project Title</label>
            <Input />
          </div>
          <div className="protech">
            <label>Project Technologies</label>
            <Input />
          </div>
          <div className="prolinks">
            <label>Project Links</label>
            <Input />
          </div>
          <div
            className="prodesc"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <label>Description</label>
            <textarea />
          </div>
        </div>
      </Collapsible>
    </div>
  );
};

export default Project;
