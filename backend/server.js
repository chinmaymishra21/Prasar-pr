require('dotenv').config()
const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:3000' }))
app.use(express.json())

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
})

app.post('/api/enquiry', async (req, res) => {
  const { name, organisation, role, email, phone, enquiry, message, _honey } = req.body

  // Honeypot check — bots fill hidden fields
  if (_honey) return res.status(400).json({ error: 'Bad request' })

  // Basic server-side validation
  if (!name || !organisation || !role || !email || !enquiry || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const mailOptions = {
    from: `"Prasar PR Website" <${process.env.GMAIL_USER}>`,
    to: process.env.RECIPIENT_EMAIL,
    replyTo: email,
    subject: `New Enquiry: ${enquiry} — ${name} (${organisation})`,
    html: `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #333;">
        <div style="background: #0A1F44; padding: 24px 32px; border-radius: 4px 4px 0 0;">
          <h1 style="color: #D48842; font-size: 18px; margin: 0; letter-spacing: 2px; text-transform: uppercase;">
            New Enquiry — Prasar PR
          </h1>
        </div>
        <div style="background: #fff; border: 1px solid #e8e4dc; border-top: none; padding: 32px; border-radius: 0 0 4px 4px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0ede8; width: 140px;">
                <strong style="color: #666; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">Name</strong>
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0ede8; font-size: 14px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0ede8;">
                <strong style="color: #666; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">Organisation</strong>
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0ede8; font-size: 14px;">${organisation}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0ede8;">
                <strong style="color: #666; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">Role</strong>
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0ede8; font-size: 14px;">${role}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0ede8;">
                <strong style="color: #666; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">Email</strong>
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0ede8; font-size: 14px;">
                <a href="mailto:${email}" style="color: #0A1F44;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0ede8;">
                <strong style="color: #666; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">Phone</strong>
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0ede8; font-size: 14px;">${phone || '—'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0ede8;">
                <strong style="color: #666; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">Enquiry Type</strong>
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0ede8; font-size: 14px;">${enquiry}</td>
            </tr>
          </table>
          <div style="margin-top: 24px;">
            <strong style="color: #666; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">Message</strong>
            <p style="margin-top: 10px; font-size: 14px; line-height: 1.7; color: #333; background: #f9f8f6; padding: 16px; border-radius: 4px; border-left: 3px solid #D48842;">
              ${message.replace(/\n/g, '<br>')}
            </p>
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #999;">
            Reply directly to this email to respond to ${name}.
          </p>
        </div>
      </div>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    res.status(200).json({ success: true })
  } catch (err) {
    console.error('Mail error:', err)
    res.status(500).json({ error: 'Failed to send email. Please try again.' })
  }
})

app.listen(PORT, () => {
  console.log(`Prasar PR backend running on port ${PORT}`)
})
