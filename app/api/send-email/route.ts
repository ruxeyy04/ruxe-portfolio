// app/api/send-email/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
   let info = await transporter.sendMail({
        from: email,
        to: 'pasok.ruxe.23@gmail.com', // your email address
        subject: `Contact Form Submission from ${name}`,
        text: message,
      });
    console.log('Message send %s', info.messageId)
    return Response.json({ success: true });
  } catch (errorr) {
    return Response.json({ error: "Failed to send a Message" }, { status: 500 });
  }
}

export async function GET (req: Request) {
    return Response.json({"test": 1})
}