import mongoose, { Schema, Document, Model } from "mongoose";

export interface IJob extends Document {
  title: string;
  location: string;
  type: string;
  experience: string;
  summary: string;
  responsibilities: string[];
  requiredSkills: string[];
  preferredSkills: string[];
  education: string;
  offers: string[];
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const JobSchema = new Schema<IJob>(
  {
    title: { type: String, required: true },
    location: { type: String, required: true },
    type: { type: String, required: true },
    experience: { type: String, required: true },
    summary: { type: String, required: true },
    responsibilities: { type: [String], default: [] },
    requiredSkills: { type: [String], default: [] },
    preferredSkills: { type: [String], default: [] },
    education: { type: String, required: true },
    offers: { type: [String], default: [] },
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

const Job: Model<IJob> = mongoose.models.Job || mongoose.model<IJob>("Job", JobSchema);

export default Job;
