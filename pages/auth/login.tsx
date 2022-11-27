import { useFetcher } from '@/lib/fetcher';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';


const Login = () => {
    const router = useRouter();

    const validateEmail = (email: string) => {
        let validatedEmail = /\S+@\S+\.\S+/;
        return validatedEmail.test(email);
    }

    const onSubmit = async (e: any) => {
        e.preventDefault();
        const form = e.target;
        const { email, password } = form.elements;
        await useFetcher(form.action, { email, password }, "PATCH").then(d => {
            if (d.success) {
                signIn("credentials", { email, password, callbackUrl: '/' });
            } else {
                alert(d.message)
            }
        })
    }

    return (
        <>
        <h1> Login </h1>
        </>
    )

}

export default Login;