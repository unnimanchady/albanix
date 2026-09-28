import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    console.log(`SMTP user configured: ${!!process.env.BREVO_SMTP_USER}`);
    console.log(`SMTP password configured: ${!!process.env.BREVO_SMTP_KEY}`);
    console.log(`SMTP host: smtp-relay.brevo.com`);
    console.log(`SMTP port: 587`);

    // Configure nodemailer transporter using environment variables
    // In production, these should be set in the server environment or .env.local
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.BREVO_SMTP_USER,
        pass: process.env.BREVO_SMTP_KEY,
      },
    });

    const mailOptions = {
      from: "zafronsoft@yahoo.com",
      to: "zafronsoft@yahoo.com",
      replyTo: email,
      subject: `New Contact Form Submission: ${subject}`,
      text: `New Contact Form Submission

Full Name: ${name}
Email Address: ${email}
Phone Number: ${phone || "N/A"}
Company: ${company || "N/A"}
Subject: ${subject}

Message:
${message}
`
    };

    if (!process.env.BREVO_SMTP_USER) {
      console.error("No BREVO_SMTP_USER configured. Cannot send email.");
      return NextResponse.json(
        { error: "Email server configuration is missing" },
        { status: 500 }
      );
    }

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
