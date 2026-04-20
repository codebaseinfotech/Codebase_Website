import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const formData = await request.formData()

    const name        = formData.get("name") as string
    const email       = formData.get("email") as string
    const phone       = formData.get("phone") as string | null
    const experience  = formData.get("experience") as string | null
    const role        = formData.get("role") as string
    const coverLetter = formData.get("coverLetter") as string | null
    const resumeFile  = formData.get("resumeFile") as File | null
    const type        = formData.get("type") as string // "apply" | "resume"

    if (!name || !email || !role) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // ── Nodemailer transporter ──────────────────────────────────────
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true" || false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // ── Convert resume file to buffer attachment ────────────────────
    let attachments: { filename: string; content: Buffer; contentType: string }[] = []
    if (resumeFile && resumeFile.size > 0) {
      const buffer = Buffer.from(await resumeFile.arrayBuffer())
      attachments = [{ filename: resumeFile.name, content: buffer, contentType: resumeFile.type }]
    }

    const isApply = type === "apply"
    const companySubject = isApply
      ? `New Job Application — ${role} | ${name}`
      : `General Resume Submission — ${name}`

    // ══════════════════════════════════════════════════════════════════
    // EMAIL 1 — To Company (with resume attached)
    // ══════════════════════════════════════════════════════════════════
    const companyHtml = isApply
      ? `
        <div style="font-family:Arial,sans-serif;padding:30px;max-width:620px;margin:0 auto;border:1px solid #e2e8f0;border-radius:12px;background:#fff;">
          <div style="background:linear-gradient(135deg,#2563eb,#06b6d4);padding:20px 24px;border-radius:8px 8px 0 0;margin:-30px -30px 24px -30px;">
            <h2 style="color:#fff;margin:0;font-size:20px;">📋 New Job Application</h2>
            <p style="color:rgba(255,255,255,0.75);margin:4px 0 0;font-size:13px;">Received via Codebase Infotech Careers Page</p>
          </div>
          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            <tr style="background:#f8fafc;"><td style="padding:10px 12px;width:150px;color:#64748b;font-weight:bold;border-radius:4px;">Applying For</td><td style="padding:10px 12px;color:#0f172a;font-weight:700;">${role}</td></tr>
            <tr><td style="padding:10px 0;color:#64748b;font-weight:bold;">Full Name</td><td style="padding:10px 0;color:#0f172a;">${name}</td></tr>
            <tr style="background:#f8fafc;"><td style="padding:10px 12px;color:#64748b;font-weight:bold;border-radius:4px;">Email</td><td style="padding:10px 12px;"><a href="mailto:${email}" style="color:#2563eb;">${email}</a></td></tr>
            ${phone ? `<tr><td style="padding:10px 0;color:#64748b;font-weight:bold;">Phone</td><td style="padding:10px 0;color:#0f172a;">${phone}</td></tr>` : ""}
            ${experience ? `<tr style="background:#f8fafc;"><td style="padding:10px 12px;color:#64748b;font-weight:bold;border-radius:4px;">Experience</td><td style="padding:10px 12px;color:#0f172a;">${experience}</td></tr>` : ""}
          </table>
          ${coverLetter ? `
          <div style="margin-top:20px;">
            <p style="font-weight:bold;color:#0f172a;margin-bottom:8px;">Cover Letter:</p>
            <div style="padding:14px 16px;background:#f8fafc;border-left:4px solid #2563eb;border-radius:0 8px 8px 0;color:#334155;font-size:14px;line-height:1.7;">
              ${coverLetter.replace(/\n/g, "<br/>")}
            </div>
          </div>` : ""}
          ${attachments.length > 0
            ? `<p style="margin-top:20px;color:#16a34a;font-size:13px;">📎 Resume attached to this email.</p>`
            : `<p style="margin-top:20px;color:#ef4444;font-size:13px;">⚠️ No resume was attached.</p>`}
          <hr style="border:none;border-top:1px solid #e2e8f0;margin:24px 0;"/>
          <p style="color:#94a3b8;font-size:12px;margin:0;">Codebase Infotech — Careers Portal</p>
        </div>`
      : `
        <div style="font-family:Arial,sans-serif;padding:30px;max-width:620px;margin:0 auto;border:1px solid #e2e8f0;border-radius:12px;background:#fff;">
          <div style="background:linear-gradient(135deg,#2563eb,#06b6d4);padding:20px 24px;border-radius:8px 8px 0 0;margin:-30px -30px 24px -30px;">
            <h2 style="color:#fff;margin:0;font-size:20px;">📄 General Resume Submission</h2>
            <p style="color:rgba(255,255,255,0.75);margin:4px 0 0;font-size:13px;">Received via Codebase Infotech Careers Page</p>
          </div>
          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            <tr style="background:#f8fafc;"><td style="padding:10px 12px;width:150px;color:#64748b;font-weight:bold;border-radius:4px;">Full Name</td><td style="padding:10px 12px;color:#0f172a;">${name}</td></tr>
            <tr><td style="padding:10px 0;color:#64748b;font-weight:bold;">Email</td><td style="padding:10px 0;"><a href="mailto:${email}" style="color:#2563eb;">${email}</a></td></tr>
            ${role ? `<tr style="background:#f8fafc;"><td style="padding:10px 12px;color:#64748b;font-weight:bold;border-radius:4px;">Preferred Role</td><td style="padding:10px 12px;color:#0f172a;">${role}</td></tr>` : ""}
          </table>
          ${attachments.length > 0
            ? `<p style="margin-top:20px;color:#16a34a;font-size:13px;">📎 Resume attached to this email.</p>`
            : `<p style="margin-top:20px;color:#ef4444;font-size:13px;">⚠️ No resume was attached.</p>`}
          <hr style="border:none;border-top:1px solid #e2e8f0;margin:24px 0;"/>
          <p style="color:#94a3b8;font-size:12px;margin:0;">Codebase Infotech — Careers Portal</p>
        </div>`

    // ══════════════════════════════════════════════════════════════════
    // EMAIL 2 — Confirmation to Applicant (no attachment)
    // ══════════════════════════════════════════════════════════════════
    const applicantSubject = isApply
      ? `Your Application for "${role}" has been received — Codebase Infotech`
      : `We've received your resume — Codebase Infotech`

    const applicantHtml = `
      <div style="font-family:Arial,sans-serif;padding:0;max-width:600px;margin:0 auto;border-radius:16px;overflow:hidden;border:1px solid #e2e8f0;">

        <!-- Header -->
        <div style="background:linear-gradient(135deg,#0f172a 0%,#1e3a5f 100%);padding:40px 36px 32px;">
          <p style="color:#60a5fa;font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;margin:0 0 12px;">Codebase Infotech</p>
          <h1 style="color:#ffffff;font-size:26px;font-weight:900;margin:0 0 8px;line-height:1.3;">
            ${isApply ? "Application Received! 🎉" : "Resume Received! 👋"}
          </h1>
          <p style="color:rgba(255,255,255,0.55);font-size:14px;margin:0;">
            ${isApply
              ? `Thank you for applying for <strong style="color:#67e8f9;">${role}</strong>`
              : "Thank you for sharing your resume with us"}
          </p>
        </div>

        <!-- Body -->
        <div style="background:#ffffff;padding:36px;">
          <p style="color:#334155;font-size:15px;line-height:1.7;margin:0 0 20px;">
            Hi <strong>${name}</strong>,
          </p>
          <p style="color:#334155;font-size:15px;line-height:1.7;margin:0 0 20px;">
            ${isApply
              ? `We're excited to let you know that we've successfully received your application for the <strong>${role}</strong> position at Codebase Infotech.`
              : `We've successfully received your resume and we're glad you're interested in joining the Codebase Infotech team.`}
          </p>

          <!-- Highlight Box -->
          <div style="background:#f0f9ff;border:1px solid #bae6fd;border-left:4px solid #0ea5e9;border-radius:8px;padding:16px 20px;margin:24px 0;">
            <p style="color:#0369a1;font-size:14px;font-weight:700;margin:0 0 6px;">⏱ What happens next?</p>
            <p style="color:#334155;font-size:14px;line-height:1.7;margin:0;">
              Our HR team will carefully review your ${isApply ? "application and resume" : "resume"} and get back to you within <strong>24–48 hours</strong>. If your profile matches our requirements, we'll reach out to schedule the next steps.
            </p>
          </div>

          ${isApply ? `
          <!-- Application Summary -->
          <div style="background:#f8fafc;border-radius:8px;padding:16px 20px;margin:20px 0;">
            <p style="color:#64748b;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin:0 0 12px;">Your Application Summary</p>
            <table style="font-size:14px;width:100%;border-collapse:collapse;">
              <tr><td style="color:#64748b;padding:4px 0;width:130px;">Role</td><td style="color:#0f172a;font-weight:600;">${role}</td></tr>
              <tr><td style="color:#64748b;padding:4px 0;">Name</td><td style="color:#0f172a;">${name}</td></tr>
              <tr><td style="color:#64748b;padding:4px 0;">Email</td><td style="color:#0f172a;">${email}</td></tr>
              ${experience ? `<tr><td style="color:#64748b;padding:4px 0;">Experience</td><td style="color:#0f172a;">${experience}</td></tr>` : ""}
            </table>
          </div>` : ""}

          <p style="color:#334155;font-size:15px;line-height:1.7;margin:20px 0 0;">
            In the meantime, feel free to explore more about us at
            <a href="https://codebaseinfotech.com" style="color:#2563eb;font-weight:600;text-decoration:none;">codebaseinfotech.com</a>.
          </p>
          <p style="color:#334155;font-size:15px;line-height:1.7;margin:12px 0 0;">
            We appreciate your interest and look forward to connecting with you. 🙌
          </p>

          <p style="color:#334155;font-size:15px;margin:28px 0 4px;">Warm regards,</p>
          <p style="color:#0f172a;font-size:15px;font-weight:700;margin:0;">The HR Team</p>
          <p style="color:#64748b;font-size:13px;margin:2px 0 0;">Codebase Infotech</p>
        </div>

        <!-- Footer -->
        <div style="background:#f8fafc;padding:20px 36px;border-top:1px solid #e2e8f0;">
          <p style="color:#94a3b8;font-size:12px;margin:0;text-align:center;">
            This is an automated confirmation email. Please do not reply directly to this message.<br/>
            © ${new Date().getFullYear()} Codebase Infotech. All rights reserved.
          </p>
        </div>

      </div>`

    // ── Send both emails simultaneously ─────────────────────────────
    await Promise.all([
      // To company
      transporter.sendMail({
        from: `"Codebase Infotech Careers" <${process.env.SMTP_USER}>`,
        replyTo: email,
        to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
        subject: companySubject,
        html: companyHtml,
        attachments,
      }),
      // To applicant
      transporter.sendMail({
        from: `"Codebase Infotech HR" <${process.env.SMTP_USER}>`,
        to: email,
        subject: applicantSubject,
        html: applicantHtml,
      }),
    ])

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("Careers email error:", error)
    return NextResponse.json({ error: "Failed to send. Please try again." }, { status: 500 })
  }
}
