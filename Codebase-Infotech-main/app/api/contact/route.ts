import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Validate incoming data
    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Configure the Email Transporter using SMTP
    // You should define these inside your .env or .env.local file.
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true" || false,
      auth: {
        user: process.env.SMTP_USER, // e.g. "your-email@gmail.com"
        pass: process.env.SMTP_PASS, // e.g. "your-app-password"
      },
    })

    // Prepare the email template
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`, // Needs to be authenticated sender
      replyTo: email,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER, // The admin email receiving the inquiry
      subject: `New Lead: Codebase Infotech Contact Form - ${name}`,
      text: `
        You have received a new message from your website contact form:
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        
        Message:
        ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 30px; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
          <h2 style="color: #0f172a; margin-top: 0;">New Website Inquiry</h2>
          <p style="color: #64748b; font-size: 14px;">A new user has submitted the contact form on Codebase Infotech.</p>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          <p style="margin: 0 0 10px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 0 0 10px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #3b82f6;">${email}</a></p>
          <p style="margin: 0 0 20px 0;"><strong>Phone:</strong> ${phone}</p>
          
          <h3 style="color: #0f172a; margin-bottom: 10px;">Message:</h3>
          <div style="padding: 15px; background-color: #f8fafc; border-radius: 8px; border-left: 4px solid #3b82f6; color: #334155; line-height: 1.6;">
            ${message.replace(/\n/g, "<br/>")}
          </div>
        </div>
      `,
    }

    // Try to send the email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: "Message sent successfully!" }, { status: 200 })
  } catch (error) {
    console.error("Error sending contact form email:", error)
    return NextResponse.json(
      { error: "Failed to send message. Please ensure SMTP credentials are configured." },
      { status: 500 },
    )
  }
}
