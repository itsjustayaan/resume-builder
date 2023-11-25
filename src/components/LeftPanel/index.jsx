import React, { useState } from "react";

import Collapsible from "../Collapsible";
import Input from "../Input";
import Education from "../Education";
import Experience from "../Experience";
import Project from "../Project";
import Certificate from "../Certificate";

import styles from "./index.module.css";

function LeftPanel() {
  const [educations, setEducations] = useState([<Education key={0} />]);

  const addEducation = () => {
    const newEducation = <Education key={educations.length} />;
    setEducations([...educations, newEducation]);
  };

  const [experiences, setExperiences] = useState([<Experience key={0} />]);

  const addExperiences = () => {
    const newExperiences = <Experience key={experiences.length} />;
    setExperiences([...experiences, newExperiences]);
  };

  const [projects, setProjects] = useState([<Project key={0} />]);

  const addProjects = () => {
    const newProjects = <Project key={projects.length} />;
    setProjects([...projects, newProjects]);
  };

  const [certificates, setCertificates] = useState([<Certificate key={0} />]);

  const addCertificates = () => {
    const newCertificates = <Certificate key={certificates.length} />;
    setCertificates([...certificates, newCertificates]);
  };

  const NandC_style = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const link_style = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  };

  return (
    <div className={styles.Style}>
      <Collapsible name="Personal Info" className={styles.Collapsible}>
        <Input label="First Name" />
        <Input label="Last Name" />
        <Input label="Email" />
        <Input label="Phone Number" />
        <Input label="LinkedIn" />
        <Input label="GitHub" />
        <Input label="Portfolio" />
      </Collapsible>
      <Collapsible name="Education">
        <div>
          {/* <div className="header"></div> */}
          <div className="content">
            {educations.map((education) => education)}
          </div>
          <div>
            <button onClick={addEducation}>Add Education</button>
          </div>
        </div>
      </Collapsible>
      <Collapsible name="Experience">
        <div>
          {/* <div className="header"></div> */}
          <div className="experience">
            {experiences.map((experience) => experience)}
          </div>
          <div>
            <button onClick={addExperiences}>Add Experience</button>
          </div>
        </div>
      </Collapsible>
      <Collapsible name="Skillsets">
        <div>
          <div className="lang">
            <label>Add Language</label>
            <Input />
          </div>
          <div className="libframe">
            <label>Add Libraries/Frameworks</label>
            <Input />
          </div>
          <div className="tools">
            <label>Add Tools/Platforms</label>
            <Input />
          </div>
          <div className="databases">
            <label>Add Databases</label>
            <Input />
          </div>
        </div>
      </Collapsible>
      <Collapsible name="Projects">
        <div>
          {/* <div className="header"></div> */}
          <div className="Project">{projects.map((project) => project)}</div>
          <div>
            <button onClick={addProjects}>Add Project</button>
          </div>
        </div>
      </Collapsible>
      <Collapsible name="Certification">
        <div>
          {/* <div className="header"></div> */}
          <div className="certificate">
            {certificates.map((certificate) => certificate)}
          </div>
          <div>
            <button onClick={addCertificates}>Add Certificate</button>
          </div>
        </div>
      </Collapsible>
    </div>
  );
}

export default LeftPanel;
