import React from "react";
import Input from "./Input";

const innerEdu = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  };

const Education = () => {
  return (
    <div className="edu">
      <div className="cont1" style={innerEdu}>
        <div className="school">
          <label>School </label>
          <Input />
        </div>
        <div className="location">
          <label>Location </label>
          <Input />
        </div>
      </div>
      <div className="cont2" style={innerEdu}>
        <div className="degree">
          <label>Degree Type</label>
          <Input />
        </div>
        <div className="major">
          <label>Major </label>
          <Input />
        </div>
      </div>
      <div className="gradDate" style={innerEdu}>
        <div className="startDate">
          <label>Start Date </label>
          <Input />
        </div>
        <div className="endDate">
          <label>End Date </label>
          <Input />
        </div>
      </div>
      <div
        className="gpa"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <label>CGPA</label>
        <Input />
      </div>
    </div>
  );
};

export default Education;
