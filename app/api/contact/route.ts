import { headers } from "next/headers";
import { Resend } from "resend";

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  website?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FIELD_LENGTHS = {
  name: 80,
  email: 120,
  subject: 160,
  message: 4000,
} as const;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const ipRequestLog = new Map<string, number[]>();

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getClientIp(requestHeaders: Headers) {
  const forwardedFor = requestHeaders.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return requestHeaders.get("x-real-ip") ?? "unknown";
}

function isAllowedOrigin(requestHeaders: Headers, requestUrl: string) {
  const origin = requestHeaders.get("origin");
  const referer = requestHeaders.get("referer");
  const allowedOrigin = new URL(requestUrl).origin;

  if (origin) {
    return origin === allowedOrigin;
  }

  if (referer) {
    return referer.startsWith(`${allowedOrigin}/`) || referer === allowedOrigin;
  }

  return true;
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const recentRequests = (ipRequestLog.get(ip) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
  );

  if (recentRequests.length >= RATE_LIMIT_MAX_REQUESTS) {
    ipRequestLog.set(ip, recentRequests);
    return true;
  }

  recentRequests.push(now);
  ipRequestLog.set(ip, recentRequests);
  return false;
}

export async function POST(request: Request) {
  try {
    const requestHeaders = await headers();
    const body = (await request.json()) as ContactPayload;

    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const subject = body.subject?.trim() ?? "";
    const message = body.message?.trim() ?? "";
    const website = body.website?.trim() ?? "";

    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: "All fields are required." },
        { status: 400 },
      );
    }

    if (website) {
      return Response.json({ message: "Message sent successfully." });
    }

    if (!isAllowedOrigin(requestHeaders, request.url)) {
      return Response.json(
        { error: "This request origin is not allowed." },
        { status: 403 },
      );
    }

    if (!EMAIL_PATTERN.test(email)) {
      return Response.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    if (
      name.length > MAX_FIELD_LENGTHS.name ||
      email.length > MAX_FIELD_LENGTHS.email ||
      subject.length > MAX_FIELD_LENGTHS.subject ||
      message.length > MAX_FIELD_LENGTHS.message
    ) {
      return Response.json(
        { error: "One or more fields are too long." },
        { status: 400 },
      );
    }

    const clientIp = getClientIp(requestHeaders);
    if (isRateLimited(clientIp)) {
      return Response.json(
        { error: "Too many messages sent. Please wait a few minutes and try again." },
        { status: 429 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return Response.json(
        { error: "Email service is not configured yet." },
        { status: 500 },
      );
    }

    const from = process.env.RESEND_FROM_EMAIL;
    const to = process.env.CONTACT_TO_EMAIL ?? "sanjai05126@gmail.com";

    if (!from) {
      return Response.json(
        { error: "Sender email is not configured yet." },
        { status: 500 },
      );
    }

    const resend = new Resend(apiKey);

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
          <h2 style="margin-bottom: 16px;">New portfolio contact message</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Subject:</strong> ${safeSubject}</p>
          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        </div>
      `,
      text: [
        "New portfolio contact message",
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (error) {
      return Response.json(
        { error: "Failed to send your message. Please try again." },
        { status: 500 },
      );
    }

    return Response.json({
      message: "Message sent successfully.",
    });
  } catch {
    return Response.json(
      { error: "Invalid request. Please try again." },
      { status: 400 },
    );
  }
}
