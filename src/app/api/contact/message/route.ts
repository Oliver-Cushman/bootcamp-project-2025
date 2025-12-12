import { NextRequest, NextResponse } from "next/server";
import { EmailData } from "@/static/emailData";
import emailjs from "@emailjs/nodejs";
import { Filter } from "bad-words";

function validateEmail(email: string): boolean {
  const emailPattern: RegExp =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}

export async function POST(req: NextRequest) {
  try {
    emailjs.init({
      publicKey: process.env.EMAILJS_PUBLIC_KEY as string,
      privateKey: process.env.EMAILJS_PRIVATE_KEY as string,
    });
    const filter = new Filter();
    const email: EmailData = await req.json();
    for (const [key, value] of Object.entries(email)) {
      if (value.length == 0) {
        return NextResponse.json(`${key} must not be empty`);
      }
    }
    if (!validateEmail(email.email)) {
      return NextResponse.json("Must use valid email address", { status: 400 });
    }
    if (
      filter.isProfane(email.name) ||
      filter.isProfane(email.title) ||
      filter.isProfane(email.message)
    ) {
      return NextResponse.json("Message must not contain profanity", {
        status: 400,
      });
    }
    const templateParams = {
      name: email.name,
      email: email.email,
      title: email.title,
      message: email.message,
      time: new Date().toUTCString(),
    };
    const serviceId = process.env.EMAILJS_SERVICE_ID as string;
    const templateId = process.env.EMAILJS_TEMPLATE_ID as string;
    const res = await emailjs.send(serviceId, templateId, templateParams);
    if (res.status >= 400) {
      return NextResponse.json("Unable to send email", { status: res.status });
    }
    return NextResponse.json("Email sent", { status: 200 });
  } catch (err) {
    return NextResponse.json("Internal server error", { status: 500 });
  }
}
