import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import blogSchema, { Comment } from "@/database/blogSchema";
import { Filter } from "bad-words";

type IParams = {
  params: {
    slug: string;
  };
};

export async function POST(req: NextRequest, { params }: IParams) {
  const filter = new Filter();
  const comment: Comment = await req.json();
  comment.user = comment.user || "Anonymous";
  comment.time = comment.time || new Date();
  const { slug } = await params;
  // validate body
  if (!comment.body) {
    return NextResponse.json("Comment must not be empty", { status: 400 });
  }
  if (filter.isProfane(comment.body) || filter.isProfane(comment.user)) {
    return NextResponse.json("Comment contains profanity!", { status: 400 });
  }

  await connectDB();
  // push comment object to document
  try {
    const res = await blogSchema
      .findOneAndUpdate({ slug: slug }, { $push: { comments: comment } })
      .exec();
    if (!res) {
      return NextResponse.json("Blog not found", { status: 404 });
    }
    return NextResponse.json("Comment added", { status: 201 });
  } catch (err) {
    return NextResponse.json("Bad comment", { status: 400 });
  }
}
