// src/app/lib/auth.js
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export const { auth, signIn, signOut, handlers } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const res = await axios.post("http://localhost:5000/api/auth/login", {
            email: credentials.email,
            password: credentials.password,
          });
          const { token, user } = res.data;
          if (user) {
            if (typeof window !== "undefined") {
              localStorage.setItem("token", token);
            }
            return user; // { id, name, email, role, status, last_login }
          }
          return null;
        } catch (error) {
          console.error("Auth error:", error.response?.data || error.message);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.role = token.role;
      session.user.status = token.status;
      session.user.last_login = token.last_login;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.status = user.status;
        token.last_login = user.last_login;
      }
      return token;
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
});