import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, phone, company } = body;

    // Basic validation: Name, email, subject, and message are required
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Name, email, subject, and message are required fields.' },
        { status: 400 }
      );
    }

    // SMTP Credentials are required to be set in environment variables:
    // SMTP_HOST     - e.g., smtp.gmail.com or smtp.mail.yahoo.com
    // SMTP_PORT     - e.g., 587 (TLS) or 465 (SSL)
    // SMTP_USER     - e.g., sender@example.com
    // SMTP_PASSWORD - App Password or Account Password
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Send email to both required addresses
    const mailOptions = {
      from: process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER, // The sender address
      to: 'zafronsoft@yahoo.com', // Recipients
      // replyTo: email, // Omitted: Yahoo SMTP returns 550 error if Reply-To differs from From
      subject: `Contact Form Submission: ${subject}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || 'N/A'}
Company: ${company || 'N/A'}
Subject: ${subject}
Message:
${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Message sent successfully.' }, { status: 200 });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Failed to send message.' },
      { status: 500 }
    );
  }
}
