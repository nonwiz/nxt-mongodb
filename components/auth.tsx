import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/router";
import { ReactNode } from "react";

// @ts-ignore
export default function Auth({ children, useAuth = true }: { children: ReactNode, useAuth: Boolean}) {
    const { data, status } = useSession();
    const router = useRouter();
    if (status === "loading") {
        return <>...</>
    }
    if (status === "unauthenticated" && useAuth) {
        router.push("/login");
    }
    return (
        <>
            {children}
        </>
    )
}