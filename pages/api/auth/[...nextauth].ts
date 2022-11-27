import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { randomBytes, randomUUID } from "crypto";

const providers = [
  CredentialsProvider({
    name: 'Credentials',
    credentials: {
      data: { label: "data", type: "hidden" }
    },
    async authorize(credentials, req) {
      return JSON.parse(credentials?.data || '{}');
    }
  })
]

const callbacks = {
  async jwt(token: any) {
    if (token.user) {
      return token.user;
    }
    if (token.token) {
      return token.token;
    }
    return {...token}
  },

  async session(session: any) {
    return session;
  }

}

const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers,
  callbacks,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
    generateSessionToken: () => {
      return randomUUID?.() ?? randomBytes(32).toString("hex")
    },
    pages: {
      signIn: '/auth/login',
      signOut: '/auth/login',
      error: '/auth/login',
    }

  }
}

export default NextAuth(authOptions)
