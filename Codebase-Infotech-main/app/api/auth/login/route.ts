import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const ADMIN_EMAIL = "ankit@gmail.com";
const ADMIN_PASSWORD = "987654";
const TOKEN_SECRET = "codebase-infotech-admin-secret-2026";

export function generateToken(): string {
  const payload = `${ADMIN_EMAIL}:${Date.now()}`;
  return crypto.createHmac("sha256", TOKEN_SECRET).update(payload).digest("hex");
}

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      const token = generateToken();
      const response = NextResponse.json({ success: true });
      response.cookies.set("admin_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24, // 24 hours
      });
      return response;
    }

    return NextResponse.json({ success: false, error: "Invalid credentials" }, { status: 401 });
  } catch {
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
