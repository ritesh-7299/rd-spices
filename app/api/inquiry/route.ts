import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";
import { canSubmitForm } from "@/lib/rate-limit";

const MIN_FORM_FILL_MS = 3_000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type RawPayload = Record<string, unknown>;

function clean(value: unknown): string {
  if (typeof value !== "string") {
    return "";
  }
  return value.replace(/\s+/g, " ").trim();
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getClientKey(request: NextRequest): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown-ip";
  }
  return request.headers.get("x-real-ip") ?? "unknown-ip";
}

function validateSpamGuards(payload: RawPayload): string | null {
  if (clean(payload.website)) {
    return "Spam validation failed.";
  }

  const startedAt = Number(payload.startedAt);
  if (!Number.isFinite(startedAt) || Date.now() - startedAt < MIN_FORM_FILL_MS) {
    return "Please complete the form and try again.";
  }

  return null;
}

function validateExportInquiry(payload: RawPayload): { valid: boolean; message?: string } {
  const requiredFields = [
    "fullName",
    "companyName",
    "country",
    "email",
    "phoneNumber",
    "productInterestedIn",
    "quantityRequired",
    "message",
  ] as const;

  for (const field of requiredFields) {
    if (!clean(payload[field])) {
      return { valid: false, message: "Please complete all required fields." };
    }
  }

  if (!EMAIL_PATTERN.test(clean(payload.email))) {
    return { valid: false, message: "Please enter a valid email address." };
  }

  return { valid: true };
}

function validateContactInquiry(payload: RawPayload): { valid: boolean; message?: string } {
  const requiredFields = ["name", "company", "country", "email", "phone", "message"] as const;

  for (const field of requiredFields) {
    if (!clean(payload[field])) {
      return { valid: false, message: "Please complete all required fields." };
    }
  }

  if (!EMAIL_PATTERN.test(clean(payload.email))) {
    return { valid: false, message: "Please enter a valid email address." };
  }

  return { valid: true };
}

function formatRows(entries: Array<[label: string, value: string]>): string {
  return entries
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px;border:1px solid #e5e7eb;font-weight:600;background:#f9fafb;">${escapeHtml(label)}</td><td style="padding:8px;border:1px solid #e5e7eb;">${escapeHtml(value)}</td></tr>`,
    )
    .join("");
}

export async function POST(request: NextRequest) {
  let payload: RawPayload;

  try {
    payload = (await request.json()) as RawPayload;
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request payload." }, { status: 400 });
  }

  const spamValidationError = validateSpamGuards(payload);
  if (spamValidationError) {
    return NextResponse.json({ ok: false, message: spamValidationError }, { status: 400 });
  }

  const clientKey = getClientKey(request);
  if (!canSubmitForm(clientKey)) {
    return NextResponse.json(
      { ok: false, message: "Too many attempts. Please wait and try again." },
      { status: 429 },
    );
  }

  const formType = clean(payload.formType) === "contact" ? "contact" : "export-inquiry";
  const validation =
    formType === "contact" ? validateContactInquiry(payload) : validateExportInquiry(payload);

  if (!validation.valid) {
    return NextResponse.json({ ok: false, message: validation.message }, { status: 400 });
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpPort = Number(process.env.SMTP_PORT ?? "587");
  const receiver = process.env.INQUIRY_RECEIVER_EMAIL ?? smtpUser;

  if (!smtpHost || !smtpUser || !smtpPass || !receiver || Number.isNaN(smtpPort)) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "Email delivery is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and INQUIRY_RECEIVER_EMAIL.",
      },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: process.env.SMTP_SECURE === "true" || smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const from = process.env.EMAIL_FROM ?? smtpUser;

  try {
    if (formType === "contact") {
      const fields: Array<[string, string]> = [
        ["Name", clean(payload.name)],
        ["Company", clean(payload.company)],
        ["Country", clean(payload.country)],
        ["Email", clean(payload.email)],
        ["Phone", clean(payload.phone)],
        ["Message", clean(payload.message)],
      ];

      await transporter.sendMail({
        from,
        to: receiver,
        replyTo: clean(payload.email),
        subject: `RD Naturals Contact Inquiry | ${clean(payload.company)}`,
        html: `<div style="font-family:Arial,sans-serif;line-height:1.6;"><h2>New Contact Inquiry</h2><table style="border-collapse:collapse;width:100%;max-width:760px;">${formatRows(fields)}</table></div>`,
        text: fields.map(([label, value]) => `${label}: ${value}`).join("\n"),
      });
    } else {
      const fields: Array<[string, string]> = [
        ["Full Name", clean(payload.fullName)],
        ["Company Name", clean(payload.companyName)],
        ["Country", clean(payload.country)],
        ["Email", clean(payload.email)],
        ["Phone Number", clean(payload.phoneNumber)],
        ["Product Interested In", clean(payload.productInterestedIn)],
        ["Quantity Required", clean(payload.quantityRequired)],
        ["Message", clean(payload.message)],
      ];

      await transporter.sendMail({
        from,
        to: receiver,
        replyTo: clean(payload.email),
        subject: `RD Naturals Export Inquiry | ${clean(payload.productInterestedIn)}`,
        html: `<div style="font-family:Arial,sans-serif;line-height:1.6;"><h2>New Export Inquiry</h2><table style="border-collapse:collapse;width:100%;max-width:760px;">${formatRows(fields)}</table></div>`,
        text: fields.map(([label, value]) => `${label}: ${value}`).join("\n"),
      });
    }

    return NextResponse.json({
      ok: true,
      message: "Thank you. Our export team will contact you shortly.",
    });
  } catch (error) {
    console.error("Inquiry email send failed:", error);
    return NextResponse.json(
      { ok: false, message: "Unable to send your request right now. Please try again." },
      { status: 500 },
    );
  }
}
