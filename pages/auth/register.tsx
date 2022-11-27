import { useFetcher } from "@/lib/fetcher"
import Layout from "@/components/layout"

export default function IndexPage() {

    const onSubmit = async (e: any) => {
        e.preventDefault();
        const form = e.target;
        const formInputs = [...form.elements].filter(i => i.name);
        const data: any = {};
        formInputs.forEach(i => {
            data[i.name] = i.value;
        })
        await useFetcher(form.action, data, "POST").then(d => {
            console.log({ d, data })
        })

    }

    // @ts-ignore
    return (
        <Layout useAuth={false}>
            <h1>Register</h1>
            <form method="PATCH" action="/api/users" onSubmit={onSubmit}>
                <input type="email" name="email" placeholder="email" />
                <input type="text" name="firstName" placeholder="firstname" />
                <input type="text" name="lastName" placeholder="lastName" />
                <input type="password" name="password" placeholder="password" />
                <button>Submit</button>
            </form>
        </Layout>
    )
}