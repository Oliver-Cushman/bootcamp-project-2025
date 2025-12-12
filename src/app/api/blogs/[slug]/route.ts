import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import Blog, { BlogData } from "@/database/blogSchema";

type IParams = {
  params: Promise<{
    slug: string;
  }>;
};

export async function GET(req: NextRequest, { params }: IParams) {
  // If { params } looks confusing, check the note below this code block

  await connectDB(); // function from db.ts before
  const { slug } = await params; // another destructure

  try {
    const blog: BlogData = await Blog.findOne({ slug: slug }).orFail();
    return NextResponse.json(blog);
  } catch (err) {
    return NextResponse.json("Blog not found.", { status: 404 });
  }
}
