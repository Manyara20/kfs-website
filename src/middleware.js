import { NextResponse } from "next/server";
import { auth } from "./app/lib/auth";

export default async function middleware(req) {
  try {
    // Ensure auth is a function
    if (typeof auth !== "function") {
      console.error("auth is not a function:", auth);
      throw new Error("Authentication middleware misconfigured");
    }

    // Run auth middleware to inject session
    const response = await auth((req) => {
      const { pathname } = req.nextUrl;
      const session = req.auth;

      console.log("Middleware session:", session); // Debug session

      if (!session && pathname.startsWith("/dashboard")) {
        const loginUrl = new URL("/login", req.url);
        loginUrl.searchParams.set("callbackUrl", pathname);
        return NextResponse.redirect(loginUrl);
      }

      return NextResponse.next();
    })(req);

    return response;
  } catch (error) {
    console.error("Middleware error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export const config = {
  matcher: ["/dashboard/:path*"],
};