import { Button } from '@/components/ui/button'
import useAuth from '@/hooks/useAuth'
import { useEffect, useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import logo from '@/assets/img/logo.png'
import { SignIn, Eye, EyeSlash, CircleNotch } from '@phosphor-icons/react'

const formSchema = z.object({
  username: z
    .string({
      required_error: 'O nome de usuário é obrigatório',
    })
    .min(2, {
      message: 'O nome de usuário deve ter no mínimo 2 caracteres',
    }),
  password: z
    .string({
      required_error: 'A senha é obrigatória',
    })
    .min(5, {
      message: 'A senha deve ter no mínimo 5 caracteres',
    }),
})

export default function Login() {
  const { login, isError, isPending } = useAuth()

  useEffect(() => {
    if (isError) {
      console.warn('erro')

      form.setError('username', {
        type: 'manual',
        message: 'Usuário ou senha inválidos',
      })
      form.setError('password', {
        type: 'manual',
        message: 'Usuário ou senha inválidos',
      })
    }
  }, [isError])

  const [seePassword, setSeePassword] = useState(false)

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  })

  async function onSubmit({ username, password }) {
    login({ username, password })
  }

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
      <section className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md flex flex-col items-center gap-4">
        <img
          src={logo}
          className="h-[6rem] w-[5.5rem]"
          alt="Logo da Prefeitura"
        />

        <Card className="min-w-full lg:min-w-[450px]">
          <CardHeader>
            <CardTitle>Painel web</CardTitle>
            <CardDescription>
              Faça login para ter acesso ao painel de senhas
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
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
                        <div className="flex justify-end">
                          <Input
                            type={seePassword ? 'text' : 'password'}
                            className="pr-8"
                            {...field}
                          />

                          <Button
                            type="button"
                            onClick={() => setSeePassword(!seePassword)}
                            className="absolute"
                            variant="ghost"
                            size="icon"
                          >
                            {seePassword ? (
                              <EyeSlash className="h-5 w-5" />
                            ) : (
                              <Eye className="h-5 w-5" />
                            )}
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button disabled={isPending} type="submit" className="w-full">
                  {isPending ? (
                    <CircleNotch className="mr-2 h-5 w-5 animate-spin" />
                  ) : (
                    <SignIn className="mr-2 h-5 w-5" />
                  )}
                  Acessar
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}
