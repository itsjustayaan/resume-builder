import React from "react";
import Collapsible from "./Collapsible";
import Input from "./Input";


const Certificate = () => {
  return (
    <div>
      <Collapsible name="Certificate 1">
        <div>
          <div className="certititle">
            <label>Certificate Title</label>
            <Input />
          </div>
          <div className="certilinks">
            <label>Project Links</label>
            <Input />
          </div>
          <div className="certiissue">
            <label>Issued by</label>
            <Input />
          </div>
        </div>
      </Collapsible>
    </div>
  );
};

export default Certificate;
