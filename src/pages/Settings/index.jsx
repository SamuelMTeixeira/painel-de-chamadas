import { Button } from "@/components/ui/button";
import serverOptions from "@/config/server";
import useAuth from "@/hooks/useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import logo from '@/assets/img/logo.png'

const formSchema = z.object({
    username: z.string({
        required_error: "O nome de usuário é obrigatório"
    }).min(2, {
        message: "O nome de usuário deve ter no mínimo 2 caracteres",
    }),
    password: z.string({
        required_error: "A senha é obrigatória"
    }).min(5, {
        message: "A senha deve ter no mínimo 5 caracteres",
    })
})


const Settings = () => {

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: ""
        },
    })

    async function onSubmit({ username, password }) {

        const { client_id, client_secret } = serverOptions

        await login({ client_id, client_secret, username, password })
            .then((isAuth) => {
                if (isAuth) {
                    navigate("/");
                }
            })
            .catch(() => {
                form.setError("username", {
                    type: "manual",
                    message: "Usuário ou senha inválidos"
                })
                form.setError("password", {
                    type: "manual",
                    message: "Usuário ou senha inválidos"
                })
            })
    }

    const { login, isAuthenticated } = useAuth()
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated)
            navigate("/")
    }, [])

    return (
        <main className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
            <section className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md flex flex-col items-center gap-4">

                <img src={logo} className="h-auto w-[5.5rem]" />

                <Card>
                    <CardHeader>
                        <CardTitle>Painel web</CardTitle>
                        <CardDescription>Faça login para ter acesso ao painel de senhas</CardDescription>
                    </CardHeader>

                    <CardContent>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                <FormField
                                    control={form.control}
                                    name="username"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Nome de usuário</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Senha</FormLabel>
                                            <FormControl>
                                                <Input type="password" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit">
                                    Acessar
                                </Button>
                            </form>
                        </Form>
                    </CardContent>
                </Card>

                {
                    /*

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


                        <Button type="submit" >
                            Acessar o painel
                        </Button>
                    </form>
                </div>

                    */
                }
            </section>
        </main>
    );
};

export default Settings;
