import ImageWithCaption from "@/components/imageWithCaption";
import mongoose, { Schema } from "mongoose";

export type Paragraph = {
  type: "paragraph";
  body: string;
};

export type ImageWithCaption = {
  type: "image";
  src: string;
  alt: string;
  caption: string;
};

export type BodySection = Paragraph | ImageWithCaption;

export type Comment = {
  user?: string;
  time: string;
  body: string;
};

export type BlogData = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  body: Array<BodySection>;
  comments: Array<Comment>;
  slug: string;
  id: string;
};

const bodySectionSchema = new Schema<BodySection>({
  type: { type: String, required: true },
  body: String,
  src: String,
  alt: String,
  caption: String,
});

const commentSchema = new Schema<Comment>({
  user: String,
  time: { type: String, required: true },
  body: { type: String, required: true }
});

// schema
const blogSchema = new Schema<BlogData>({
  title: { type: String, required: true },
  date: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  imageAlt: { type: String, required: true },
  body: { type: [bodySectionSchema], required: true},
  comments: { type: [commentSchema], required: true },
  slug: { type: String, required: true },
  id: { type: String, required: true },
});

// collection & model
const Blog = mongoose.models["blogs"] || mongoose.model("blogs", blogSchema);

export default Blog;
