import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import Portfolio, { ProjectData } from "@/database/portfolioSchema";

type IParams = {
  params: Promise<{
    slug: string;
  }>;
};

export async function GET(req: NextRequest, { params }: IParams) {
  await connectDB(); // function from db.ts before
  const { slug } = await params; // another destructure

  try {
    const project: ProjectData = await Portfolio.findOne({ id: slug }).orFail();
    return NextResponse.json(project);
  } catch (err) {
    return NextResponse.json("Blog not found.", { status: 404 });
  }
}
