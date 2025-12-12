import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import Blog, { Comment } from "@/database/blogSchema";
import { Filter } from "bad-words";

type IParams = {
  params: Promise<{
    slug: string;
  }>;
};

export async function POST(req: NextRequest, { params }: IParams) {
  try {
    const filter = new Filter();
    const commentwhy: Comment = await req.json();
    comment.user = comment.user || "Anonymous";
    comment.time = comment.time || new Date();
    const { slug } = await params;
    // validate body
    if (!comment.body) {
      return NextResponse.json("Comment must not be empty", { status: 400 });
    }
    if (filter.isProfane(comment.body) || filter.isProfane(comment.user)) {
      return NextResponse.json("Comment must not contian profanity", {
        status: 400,
      });
    }
    await connectDB();
    const res = await Blog.findOneAndUpdate(
      { slug: slug },
      { $push: { comments: comment } }
    ).exec();
    if (!res) {
      return NextResponse.json("Blog not found", { status: 404 });
    }
    return NextResponse.json("Comment added", { status: 201 });
  } catch (err) {
    return NextResponse.json("Internal server Error", { status: 500 });
  }
}
