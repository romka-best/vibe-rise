import { NextResponse } from "next/server"

// Tiny in-memory store for demo purposes
type Entry = { email: string; role: "investor" | "talent" | "supporter"; ts: number }
const g = globalThis as unknown as { __waitlist?: Entry[] }
if (!g.__waitlist) g.__waitlist = []

export async function GET() {
  try {
    return NextResponse.json({ ok: true, count: g.__waitlist!.length })
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const email: string | undefined = data?.email
    const role: "investor" | "talent" | "supporter" | undefined = data?.role
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !role) {
      return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 })
    }
    const normalized = email.trim().toLowerCase()
    const exists = g.__waitlist!.some((e) => e.email === normalized)
    if (exists) {
      return NextResponse.json({ ok: true, duplicate: true, count: g.__waitlist!.length }, { status: 409 })
    }
    g.__waitlist!.push({ email: normalized, role, ts: Date.now() })
    return NextResponse.json({ ok: true, count: g.__waitlist!.length }, { status: 201 })
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
