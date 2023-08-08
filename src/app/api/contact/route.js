import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  console.log("estuve acá")
  const request = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USER,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASS
    }
  });

  const mailOptions = {
    from: request.email, // sender address
    to: process.env.NEXT_PUBLIC_EMAIL_SEND_TO, // list of receivers
    subject: request.subject, // Subject line
    text: request.message, // plain text body
    html: `<div>${request.message}</div>` // html body
  };

  return await transporter
    .sendMail(mailOptions)
    .then((response) => {
      return NextResponse.json(
        { error: false, emailSent: true, errors: [], response },
        { status: 200 }
      );
    })
    .catch((error) => {
      return NextResponse.json(
        { error: true, emailSent: false, errors: [error] },
        { status: 500 }
      );
    });
}