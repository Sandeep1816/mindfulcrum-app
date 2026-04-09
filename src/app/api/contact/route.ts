import { NextResponse } from "next/server";
import { createMailer, getContactInbox, getMailFrom } from "@/lib/email/nodemailer";
import { escapeHtml } from "@/lib/email/escape-html";
import { getProgramLabel } from "@/lib/email/program-labels";

export const runtime = "nodejs";

type Body = {
  name?: string;
  email?: string;
  phone?: string;
  organization?: string;
  programInterest?: string;
  message?: string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim().toLowerCase();
  const phone = body.phone?.trim() ?? "";
  const organization = body.organization?.trim() ?? "";
  const programInterest = body.programInterest?.trim() ?? "";
  const message = body.message?.trim();

  if (!name || !email || !message || !programInterest) {
    return NextResponse.json(
      { error: "Name, email, program interest, and message are required." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  let transporter: ReturnType<typeof createMailer>;
  let from: string;
  let inbox: string;

  try {
    transporter = createMailer();
    from = getMailFrom();
    inbox = getContactInbox();
  } catch (e) {
    console.error("[contact] Mail configuration error:", e);
    return NextResponse.json(
      {
        error:
          "Email is not configured on the server. Set SMTP_HOST, SMTP_USER, SMTP_PASS, and optionally MAIL_FROM, CONTACT_TO_EMAIL.",
      },
      { status: 503 }
    );
  }

  const programLabel = getProgramLabel(programInterest);
  const safe = {
    name: escapeHtml(name),
    email: escapeHtml(email),
    phone: escapeHtml(phone),
    organization: escapeHtml(organization),
    programLabel: escapeHtml(programLabel),
    message: escapeHtml(message).replace(/\n/g, "<br/>"),
  };

  const adminHtml = `
    <h2>New contact form submission</h2>
    <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">
      <tr><td style="padding:6px 12px 6px 0;font-weight:600;">Name</td><td>${safe.name}</td></tr>
      <tr><td style="padding:6px 12px 6px 0;font-weight:600;">Email</td><td><a href="mailto:${safe.email}">${safe.email}</a></td></tr>
      <tr><td style="padding:6px 12px 6px 0;font-weight:600;">Phone</td><td>${phone ? safe.phone : "—"}</td></tr>
      <tr><td style="padding:6px 12px 6px 0;font-weight:600;">Organization</td><td>${organization ? safe.organization : "—"}</td></tr>
      <tr><td style="padding:6px 12px 6px 0;font-weight:600;">Program</td><td>${safe.programLabel}</td></tr>
    </table>
    <h3 style="margin-top:20px;font-family:sans-serif;">Message</h3>
    <p style="font-family:sans-serif;font-size:14px;line-height:1.5;">${safe.message}</p>
  `;

  const thankYouHtml = `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8" /></head>
    <body style="margin:0;padding:0;background:#f8f9fb;font-family:Georgia,serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8f9fb;padding:32px 16px;">
        <tr>
          <td align="center">
            <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;max-width:100%;">
              <tr>
                <td style="background:#1e3a5f;padding:24px 28px;">
                  <p style="margin:0;color:#ffffff;font-size:20px;font-weight:600;">Mindfulcrum</p>
                  <p style="margin:8px 0 0;color:rgba(255,255,255,0.85);font-size:13px;">Workplace Psychology</p>
                </td>
              </tr>
              <tr>
                <td style="padding:28px 28px 8px;">
                  <p style="margin:0;font-size:16px;color:#1e3a5f;">Dear ${safe.name},</p>
                  <p style="margin:16px 0 0;font-size:15px;line-height:1.6;color:#374151;">
                    Thank you for reaching out to Mindfulcrum. We have received your message and appreciate you taking the time to contact us.
                  </p>
                  <p style="margin:16px 0 0;font-size:15px;line-height:1.6;color:#374151;">
                    Our team will review your inquiry and respond within <strong>24 hours</strong>. If your matter is urgent, please call us at the number listed on our website.
                  </p>
                  <p style="margin:16px 0 0;font-size:15px;line-height:1.6;color:#374151;">
                    Best regards,<br/>
                    <span style="color:#1e3a5f;font-weight:600;">The Mindfulcrum Team</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td style="padding:0 28px 28px;">
                  <p style="margin:0;padding-top:16px;border-top:1px solid #e5e7eb;font-size:12px;color:#9ca3af;">
                    This is an automated confirmation. Please do not reply directly to this email if the address is noreply.
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  try {
    await transporter.sendMail({
      from: `"Mindfulcrum" <${from}>`,
      to: inbox,
      replyTo: email,
      subject: `[Contact] ${name} — ${programLabel}`,
      html: adminHtml,
      text: [
        `New contact from ${name} <${email}>`,
        phone && `Phone: ${phone}`,
        organization && `Organization: ${organization}`,
        `Program: ${programLabel}`,
        "",
        "Message:",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    await transporter.sendMail({
      from: `"Mindfulcrum" <${from}>`,
      to: email,
      subject: "Thank you for contacting Mindfulcrum",
      html: thankYouHtml,
      text: [
        `Dear ${name},`,
        "",
        "Thank you for reaching out to Mindfulcrum. We have received your message.",
        "Our team will review your inquiry and respond within 24 hours.",
        "",
        "Best regards,",
        "The Mindfulcrum Team",
      ].join("\n"),
    });
  } catch (err) {
    console.error("[contact] sendMail error:", err);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later or email us directly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
