import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import blogSchema, {BlogData} from "@/database/blogSchema";

type IParams = {
  params: {
    slug: string;
  };
};

/*
	The function below and the functions you create inside route.ts files are called
	"API route handlers" 
	
	Next.js automatically passes two arguments to API route handlers:
		1. First argument: NextRequest - The incoming HTTP request object
		2. Second argument: NextJS Object - Contains route information and other metadata
				There is ALWAYS a "params" object here but the object within is based on our
				api path naming which in this case is "slug"
	We need to include req, even though we don't use it here, so that we can access
	the second argument
*/
export async function GET(req: NextRequest, { params }: IParams) {
  // If { params } looks confusing, check the note below this code block

  await connectDB(); // function from db.ts before
  const slug = params.slug; // another destructure

  try {
    const blog: BlogData = await blogSchema.findOne({ id: slug }).orFail();
    return NextResponse.json(blog);
  } catch (err) {
    return NextResponse.json("Blog not found.", { status: 404 });
  }
}
