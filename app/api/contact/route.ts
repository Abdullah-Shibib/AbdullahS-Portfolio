import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    console.log('Attempting to send email with Resend...');
    console.log('From:', 'Portfolio Contact Form <onboarding@resend.dev>');
    console.log('To:', 'abdullahshibib@yahoo.com');
    console.log('Subject:', `New Contact Form Submission: ${subject}`);

    const data = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      to: ['abdullahshibib@yahoo.com'],
      subject: `New Contact Form Submission: ${subject}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Subject:</strong> ${subject}</p>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    console.log('Email sent successfully:', data);

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Detailed error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send message', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
} 