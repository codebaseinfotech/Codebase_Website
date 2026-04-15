import mongoose, { Schema, Document, Model } from "mongoose";

export interface IFAQ {
  question: string;
  answer: string;
}

export interface IBlog extends Document {
  slug: string;
  title: string;
  description: string;
  image: string;
  faqs: IFAQ[];
  createdAt: Date;
  updatedAt: Date;
}

const FAQSchema = new Schema<IFAQ>(
  {
    question: { type: String, required: true },
    answer: { type: String, required: true },
  },
  { _id: false }
);

const BlogSchema = new Schema<IBlog>(
  {
    slug: { type: String, required: true, unique: true, index: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, default: "" },
    faqs: { type: [FAQSchema], default: [] },
  },
  {
    timestamps: true, // auto createdAt + updatedAt
  }
);

// Prevent model recompilation in dev (hot reload)
const Blog: Model<IBlog> =
  mongoose.models.Blog || mongoose.model<IBlog>("Blog", BlogSchema);

export default Blog;
