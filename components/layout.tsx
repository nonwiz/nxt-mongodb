import Header from "./header"
import Footer from "./footer"
import type { ReactNode } from "react"
import Auth from "./auth"

export default function Layout({ children, useAuth=true }: { children: ReactNode, useAuth: Boolean }) {
  return (
    <>
      <Auth useAuth={false}>
        <Header />
        <main>{children}</main>
        <Footer />
      </Auth>
    </>
  )
}
