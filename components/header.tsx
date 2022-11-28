import Link from "next/link"
import {signOut, useSession} from "next-auth/react"
import styles from "./header.module.css"
import {useRouter} from "next/router";

// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Header() {
    const router = useRouter();
    const { data } = useSession();
    // @ts-ignore
    const { session } = data || {};
    return (
        <header>

            <nav>
                <ul className={styles.navItems}>
                    <li className={styles.navItem}>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/client">Client</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/protected">Protected</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/api-example">API</Link>
                    </li>
                     <li className={styles.navItem}>
                        <Link href="/admin/dashboard">Admin-Dashboard</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/admin">Admin</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/me">Me</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/auth/register">Register</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/auth/login">Login</Link>
                    </li>
                    <li>
                        {session?.user.email &&
                            <a
                                className={styles.navItem}
                                onClick={(e) => {
                                    e.preventDefault()
                                    signOut().then(_d => {
                                        router.push("/");
                                    })
                                }}
                            >
                                Sign out
                            </a>
                        }
                    </li>
                </ul>
            </nav>
        </header>
    )
}
