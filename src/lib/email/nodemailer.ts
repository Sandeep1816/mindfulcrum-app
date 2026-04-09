import nodemailer from "nodemailer";

function requireEnv(name: string): string {
  const v = process.env[name];
  if (!v?.trim()) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return v.trim();
}

export function createMailer() {
  const host = requireEnv("SMTP_HOST");
  const port = Number(process.env.SMTP_PORT ?? "587");
  const user = requireEnv("SMTP_USER");
  const pass = requireEnv("SMTP_PASS");

  const secure = process.env.SMTP_SECURE === "true" || port === 465;

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });
}

export function getMailFrom(): string {
  return process.env.MAIL_FROM?.trim() || requireEnv("SMTP_USER");
}

/** Inbound address for new contact notifications (defaults to SMTP user, e.g. shared mailbox). */
export function getContactInbox(): string {
  return process.env.CONTACT_TO_EMAIL?.trim() || requireEnv("SMTP_USER");
}
