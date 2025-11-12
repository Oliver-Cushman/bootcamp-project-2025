import mongoose, { Schema } from "mongoose";

export type ProjectData = {
  title: string;
  image: string;
  imageAlt: string;
  description: string;
  link: string;
  id: string;
};

// schema
const portfolioSchema = new Schema<ProjectData>({
  title: { type: String, required: true },
  image: { type: String, required: true },
  imageAlt: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String, required: true },
  id: { type: String, required: true },
});

// collection & model
const Portfolio =
  mongoose.models["projects"] || mongoose.model("projects", portfolioSchema);

export default Portfolio;
