// src/middleware.js
import { auth } from "./app/lib/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { pathname } = req.nextUrl;
  const session = req.auth;

  if (pathname.startsWith("/dashboard") && !session) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Role-based access
  if (session) {
    const role = session.user.role;
    if (pathname.includes("/posts") && role !== "admin" && role !== "communication_officer") {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
    if (pathname.includes("/tenders") && role !== "admin" && role !== "supply_chain") {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
    if (pathname.includes("/documents") && role === "user") {
      // Allow view-only access (implement in page logic)
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/dashboard/:path*"],
};