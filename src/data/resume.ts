export type Resume = ResumeFlat & ResumeArray;

export type ResumeFlat = {
  personal: Personal;
  skillset: Skillset;
};

export type ResumeArray = {
  experience: Experience[];
  education: Education[];
  projects: Project[];
  certifications: Certification[];
};

export const emptyResumeArray: {
  experience: Experience;
  education: Education;
  projects: Project;
  certifications: Certification;
} = {
  experience: {
    employer: "",
    title: "",
    location: "",
    description: "",
    startDate: new Date(),
    endDate: new Date(),
  },
  education: {
    institute: "",
    location: "",
    degree: "",
    field: "",
    score: 0,
    startDate: new Date(),
    endDate: new Date(),
  },
  projects: {
    title: "",
    technologies: "",
    link: "",
    description: "",
  },
  certifications: {
    title: "",
    link: "",
    issuer: "",
  },
};

export const emptyResume: Resume = Object.freeze({
  personal: {
    name: "",
    email: "",
    number: "",
    linkedin: "",
    portfolio: "",
  },
  experience: [],
  education: [],
  projects: [],
  skillset: {
    languages: "",
    libraries: "",
    tools: "",
  },
  certifications: [],
});

export type Personal = {
  name: string;
  email: string;
  number: string;
  linkedin: string;
  portfolio: string;
};

export type Experience = {
  employer: string;
  title: string;
  location: string;
  description: string;
  startDate: Date;
  endDate: Date;
};

export type Education = {
  institute: string;
  location: string;
  degree: string;
  field: string;
  score: number;
  startDate: Date;
  endDate: Date;
};

export type Project = {
  title: string;
  technologies: string;
  link: string;
  description: string;
};

export type Skillset = {
  languages: string;
  libraries: string;
  tools: string;
};

export type Certification = {
  title: string;
  link: string;
  issuer: string;
};
