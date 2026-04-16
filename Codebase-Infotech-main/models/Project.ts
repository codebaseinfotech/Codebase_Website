import mongoose, { Schema, Document, Model } from "mongoose";

export interface ICaseStudy {
  challenge?: string;
  solution?: string;
  outcome?: string;
  timeline?: string;
  teamSize?: string;
  projectDetails?: string;
  AppHighlights?: string[];
  technologies?: string[];
  thirdPartyServices?: string[];
}

export interface IProject extends Document {
  id: any;
  title: string;
  category: string;
  type: string;
  iOS_Link?: string;
  Android_Link?: string;
  website_link?: string;
  description: string;
  image: string;
  isActive?: boolean;
  technologies: string[];
  client?: string;
  results?: string[];
  caseStudy?: ICaseStudy;
  createdAt: Date;
  updatedAt: Date;
}

const CaseStudySchema = new Schema<ICaseStudy>(
  {
    challenge: { type: String, default: "" },
    solution: { type: String, default: "" },
    outcome: { type: String, default: "" },
    timeline: { type: String, default: "" },
    teamSize: { type: String, default: "" },
    projectDetails: { type: String, default: "" },
    AppHighlights: { type: [String], default: [] },
    technologies: { type: [String], default: [] },
    thirdPartyServices: { type: [String], default: [] },
  },
  { _id: false }
);

const ProjectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    type: { type: String, required: true, default: "mobile" },
    iOS_Link: { type: String, default: "" },
    Android_Link: { type: String, default: "" },
    website_link: { type: String, default: "" },
    description: { type: String, required: true },
    image: { type: String, required: true },
    isActive: { type: Boolean, default: true },
    technologies: { type: [String], default: [] },
    client: { type: String, default: "" },
    results: { type: [String], default: [] },
    caseStudy: { type: CaseStudySchema, default: {} },
  },
  {
    timestamps: true,
  }
);

const Project: Model<IProject> =
  mongoose.models.Project || mongoose.model<IProject>("Project", ProjectSchema);

export default Project;
