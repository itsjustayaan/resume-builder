import React from "react";
import Input from "./Input";

const innerEdu = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  };

const Experience = () => {
  return (
    <div className="exp">
      <div className="exp1" style={innerEdu}>
        <div className="employer">
          <label>Employer </label>
          <Input />
        </div>
        <div className="jobTitle">
          <label>Job Title </label>
          <Input />
        </div>
      </div>
      <div className="date" style={innerEdu}>
        <div className="startDate">
          <label>Start Date </label>
          <Input />
        </div>
        <div className="endDate">
          <label>End Date </label>
          <Input />
        </div>
      </div>
      <div className="location">
        <label>Location</label>
        <Input />
      </div>
      <div className="exp3">
        <div
          className="description"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <label>Description</label>
          <textarea />
        </div>
      </div>
    </div>
  );
};

export default Experience;
