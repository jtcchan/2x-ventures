import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const runtime = 'nodejs'

type ApplyPayload = {
  name?: string
  email?: string
  investmentPreference?: string
  minInvestment?: string
  maxInvestment?: string
  experience?: string
  company?: string
}

const EMAIL_TO = 'john@2xcd.com'

const buildEmailText = (payload: Required<Omit<ApplyPayload, 'company'>>) => {
  return [
    'New investment application received:',
    '',
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Investment preference: ${payload.investmentPreference}`,
    `Minimum investment: ${payload.minInvestment}`,
    `Maximum investment: ${payload.maxInvestment}`,
    '',
    'Experience:',
    payload.experience,
  ].join('\n')
}

const getTransporter = () => {
  const host = process.env.SMTP_HOST
  const port = Number(process.env.SMTP_PORT || 587)
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS

  if (!host || !user || !pass) {
    return null
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  })
}

export async function POST(req: Request) {
  let payload: ApplyPayload

  try {
    payload = (await req.json()) as ApplyPayload
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid submission.' }, { status: 400 })
  }

  const honeypot = String(payload.company || '').trim()
  if (honeypot) {
    return NextResponse.json({ success: true })
  }

  const requiredFields: Array<keyof ApplyPayload> = [
    'name',
    'email',
    'investmentPreference',
    'minInvestment',
    'maxInvestment',
    'experience',
  ]

  const missing = requiredFields.filter((field) => !String(payload[field] || '').trim())
  if (missing.length > 0) {
    return NextResponse.json({ success: false, error: 'Please complete all required fields.' }, { status: 400 })
  }

  const transporter = getTransporter()
  const from = process.env.SMTP_FROM || process.env.SMTP_USER

  if (!transporter || !from) {
    console.error('Email transport not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM.')
    return NextResponse.json({ success: false, error: 'Email service is not configured.' }, { status: 500 })
  }

  try {
    const emailPayload = {
      name: String(payload.name).trim(),
      email: String(payload.email).trim(),
      investmentPreference: String(payload.investmentPreference).trim(),
      minInvestment: String(payload.minInvestment).trim(),
      maxInvestment: String(payload.maxInvestment).trim(),
      experience: String(payload.experience).trim(),
    }

    await transporter.sendMail({
      from,
      to: EMAIL_TO,
      replyTo: emailPayload.email,
      subject: `New Investment Application - ${emailPayload.name}`,
      text: buildEmailText(emailPayload),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Failed to send application email', error)
    return NextResponse.json({ success: false, error: 'Failed to send application. Please try again.' }, { status: 500 })
  }
}
