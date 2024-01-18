import serverOptions from "@/config/server";
import useAuth from "@/hooks/useAuth";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Settings = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { login, isAuthenticated } = useAuth()
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated)
            navigate("/")
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const { client_id, client_secret } = serverOptions

        await login({ client_id, client_secret, username: username, password }).then((isAuth) => {
            if (isAuth) {
                navigate("/");
            }
        })
    }

    return (
        <main className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
            <section className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
                <h1 className="font-bold text-center text-2xl mb-5">Painel web</h1>

                <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
                    <form onSubmit={handleSubmit} className="px-5 py-7">
                        <label className="font-semibold text-sm text-gray-600 pb-1 block">Usuario</label>
                        <input
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            type="text"
                            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
                        <label className="font-semibold text-sm text-gray-600 pb-1 block">Senha</label>
                        <input
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />


                        <button type="submit" className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                            <span className="inline-block mr-2">Acessar</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default Settings;
