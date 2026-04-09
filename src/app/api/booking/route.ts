import { NextResponse } from "next/server";
import { createMailer, getContactInbox, getMailFrom } from "@/lib/email/nodemailer";
import { escapeHtml } from "@/lib/email/escape-html";
import { getTherapistById } from "@/data/therapists-list";

export const runtime = "nodejs";

type Body = {
  therapistId?: string;
  therapistName?: string;
  specialty?: string;
  pricePerSession?: number;
  appointmentDateIso?: string;
  dayLabel?: string;
  daySub?: string;
  timeSlot?: string;
  patientName?: string;
  patientEmail?: string;
  patientPhone?: string;
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

  const therapistId = body.therapistId?.trim();
  const timeSlot = body.timeSlot?.trim();
  const appointmentDateIso = body.appointmentDateIso?.trim();
  const patientName = body.patientName?.trim();
  const patientEmail = body.patientEmail?.trim().toLowerCase();

  if (!therapistId || !timeSlot || !appointmentDateIso || !patientName || !patientEmail) {
    return NextResponse.json(
      { error: "Therapist, date, time slot, name, and email are required." },
      { status: 400 }
    );
  }

  if (!isValidEmail(patientEmail)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const known = getTherapistById(therapistId);
  const therapistName = escapeHtml(known?.name ?? body.therapistName?.trim() ?? "Therapist");
  const specialty = escapeHtml(known?.specialty ?? body.specialty?.trim() ?? "");
  const price = known?.pricePerSession ?? body.pricePerSession ?? 0;
  const dayLabel = escapeHtml(body.dayLabel?.trim() ?? "");
  const daySub = escapeHtml(body.daySub?.trim() ?? "");
  const safeName = escapeHtml(patientName);
  const safeEmail = escapeHtml(patientEmail);
  const safePhone = escapeHtml(body.patientPhone?.trim() ?? "");
  const safeSlot = escapeHtml(timeSlot);
  const safeDateIso = escapeHtml(appointmentDateIso);

  let transporter: ReturnType<typeof createMailer>;
  let from: string;
  let inbox: string;

  try {
    transporter = createMailer();
    from = getMailFrom();
    inbox = getContactInbox();
  } catch (e) {
    console.error("[booking] Mail configuration error:", e);
    return NextResponse.json(
      {
        error:
          "Email is not configured on the server. Set SMTP_HOST, SMTP_USER, SMTP_PASS, and optionally MAIL_FROM, CONTACT_TO_EMAIL.",
      },
      { status: 503 }
    );
  }

  const patientHtml = `
    <!DOCTYPE html>
    <html><head><meta charset="utf-8" /></head>
    <body style="margin:0;padding:0;background:#f8f9fb;font-family:Georgia,serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8f9fb;padding:32px 16px;">
        <tr><td align="center">
          <table width="560" style="background:#fff;border:1px solid #e5e7eb;border-radius:8px;max-width:100%;">
            <tr><td style="background:#1e3a5f;padding:22px 26px;">
              <p style="margin:0;color:#fff;font-size:18px;font-weight:600;">Appointment confirmed</p>
              <p style="margin:6px 0 0;color:rgba(255,255,255,0.85);font-size:13px;">Mindfulcrum</p>
            </td></tr>
            <tr><td style="padding:26px;">
              <p style="margin:0;font-size:15px;color:#1e3a5f;">Dear ${safeName},</p>
              <p style="margin:14px 0 0;font-size:15px;line-height:1.6;color:#374151;">
                Thank you for booking a consultation with us. Here are your appointment details:
              </p>
              <table style="margin-top:18px;font-size:14px;color:#1e3a5f;border-collapse:collapse;width:100%;">
                <tr><td style="padding:6px 0;font-weight:600;">Expert</td><td>${therapistName}</td></tr>
                ${specialty ? `<tr><td style="padding:6px 0;font-weight:600;">Focus</td><td>${specialty}</td></tr>` : ""}
                <tr><td style="padding:6px 0;font-weight:600;">Date</td><td>${dayLabel} (${daySub}) — ${safeDateIso}</td></tr>
                <tr><td style="padding:6px 0;font-weight:600;">Time</td><td>${safeSlot}</td></tr>
                <tr><td style="padding:6px 0;font-weight:600;">Fee</td><td>₹${price} per session</td></tr>
              </table>
              <p style="margin:18px 0 0;font-size:14px;line-height:1.6;color:#374151;">
                We will send a calendar invite or call you shortly if any clarification is needed.
              </p>
              <p style="margin:16px 0 0;font-size:14px;color:#1e3a5f;"><strong>The Mindfulcrum Team</strong></p>
            </td></tr>
          </table>
        </td></tr>
      </table>
    </body></html>
  `;

  const phoneRaw = body.patientPhone?.trim();
  const adminText = [
    `New booking: ${patientName} <${patientEmail}>`,
    phoneRaw ? `Phone: ${phoneRaw}` : null,
    `Therapist: ${therapistName} (${therapistId})`,
    `When: ${dayLabel} ${appointmentDateIso} at ${timeSlot}`,
    `Price: ₹${price}`,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    await transporter.sendMail({
      from: `"Mindfulcrum" <${from}>`,
      to: patientEmail,
      subject: `Your Mindfulcrum appointment — ${therapistName}`,
      html: patientHtml,
      text: [
        `Dear ${patientName},`,
        "",
        "Thank you for booking a consultation. Details:",
        `- Expert: ${therapistName}`,
        `- Date: ${dayLabel} (${appointmentDateIso})`,
        `- Time: ${timeSlot}`,
        `- Fee: ₹${price} per session`,
        "",
        "The Mindfulcrum Team",
      ].join("\n"),
    });

    await transporter.sendMail({
      from: `"Mindfulcrum" <${from}>`,
      to: inbox,
      replyTo: patientEmail,
      subject: `[Booking] ${patientName} — ${therapistName} @ ${timeSlot}`,
      text: adminText,
      html: `<pre style="font-family:ui-sans-serif,system-ui,sans-serif;font-size:14px;white-space:pre-wrap;">${escapeHtml(adminText)}</pre>`,
    });
  } catch (err) {
    console.error("[booking] sendMail error:", err);
    return NextResponse.json(
      { error: "Failed to send confirmation email. Please try again or contact us directly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
