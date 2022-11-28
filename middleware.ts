import { withAuth } from "next-auth/middleware"

// More on how NextAuth.js middleware works: https://next-auth.js.org/configuration/nextjs#middleware
export default withAuth({
  pages: {
    signIn: '/auth/login',
  },
  callbacks: {
    authorized({ req, token }) {
      // `/admin` requires admin role
      if (req.nextUrl.pathname.includes("/admin")) {
        return token?.role === "admin"
      }
      // `/me` only requires the user to be logged in
      return !!token
    },
  },
})

export const config = { matcher: ["/admin", "/me"] }
