import dotenv from "dotenv";
import express from "express";
import nodemailer from "nodemailer";

dotenv.config({ path: ".env.local" });
dotenv.config();

const app = express();
const port = Number(process.env.API_PORT ?? 4000);
const mailTo = "venkatcharan.ds@gmail.com";

app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.post("/api/contact", async (req, res) => {
  const firstName = String(req.body?.firstName ?? "").trim();
  const lastName = String(req.body?.lastName ?? "").trim();
  const email = String(req.body?.email ?? "").trim();
  const organization = String(req.body?.organization ?? "").trim();
  const message = String(req.body?.message ?? "").trim();

  if (!firstName || !lastName || !email || !organization || !message) {
    res.status(400).json({ error: "Missing required fields." });
    return;
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT ?? 587);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpHost || !smtpUser || !smtpPass) {
    res.status(500).json({
      error: "Mail server is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS.",
    });
    return;
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: `"VitalEdge Contact" <${smtpUser}>`,
      to: mailTo,
      replyTo: email,
      subject: `New VitaLEdge Request: ${firstName} ${lastName}`,
      text: [
        `First Name: ${firstName}`,
        `Last Name: ${lastName}`,
        `Email: ${email}`,
        `Organization: ${organization}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <h2>New VitaLEdge Request</h2>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Organization:</strong> ${organization}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    res.json({ ok: true });
  } catch (error) {
    console.error("Contact mail send failed", error);
    res.status(500).json({ error: "Failed to send email." });
  }
});

app.listen(port, () => {
  console.log(`Contact API listening on http://localhost:${port}`);
});
