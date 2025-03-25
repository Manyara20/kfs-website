import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const res = await axios.post("http://localhost:5000/api/auth/login", {
            email: credentials.email,
            password: credentials.password,
          });
          const { token, user } = res.data;

          if (!user || !token) {
            return null;
          }

          if (typeof window !== "undefined") {
            localStorage.setItem("backendToken", token);
          }

          return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            backendToken: token,
          };
        } catch (error) {
          console.error("Auth error:", error.response?.data || error.message);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 60 * 60, // 1 hour
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.backendToken = user.backendToken;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.role = token.role;
      session.user.backendToken = token.backendToken;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

// Initialize NextAuth
const nextAuthInstance = NextAuth(authOptions);

// Export handlers and middleware
export const handlers = {
  GET: nextAuthInstance.handlers.GET,
  POST: nextAuthInstance.handlers.POST,
  PUT: nextAuthInstance.handlers.PUT || ((req, res) => res.status(405).json({ error: "Method Not Allowed" })),
  DELETE: nextAuthInstance.handlers.DELETE || ((req, res) => res.status(405).json({ error: "Method Not Allowed" })),
  PATCH: nextAuthInstance.handlers.PATCH || ((req, res) => res.status(405).json({ error: "Method Not Allowed" })),
};

export const auth = nextAuthInstance.auth;
export const signIn = nextAuthInstance.signIn;
export const signOut = nextAuthInstance.signOut;

// Debug export types
console.log("auth type:", typeof auth, "auth:", auth);
console.log("handlers type:", typeof handlers, "handlers:", handlers);