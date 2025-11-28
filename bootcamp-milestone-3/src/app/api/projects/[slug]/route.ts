import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import portfolioSchema, { ProjectData } from "@/database/portfolioSchema";

type IParams = {
  params: {
    slug: string;
  };
};

export async function GET(req: NextRequest, { params }: IParams) {

  await connectDB(); // function from db.ts before
  const slug = params.slug; // another destructure

  try {
    const project: ProjectData = await portfolioSchema.findOne({ id: slug }).orFail();
    return NextResponse.json(project);
  } catch (err) {
    return NextResponse.json("Blog not found.", { status: 404 });
  }
}
