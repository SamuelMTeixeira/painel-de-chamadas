import useTicket from '@/hooks/useTicket'
import { useEffect, useRef, useState } from 'react'
import logo from '@/assets/img/logo.png'
import socket from '@/lib/socket'
import audioPath from '@/assets/sound/alert/ekiga-vm.wav'
import useAuth from '@/hooks/useAuth'
import CommandActions from '@/components/home/command-actions'
import serverOptions from '@/config/server'

export default function Home() {
  const [tickets, setTickets] = useState([])

  const { tickets: passwords } = useTicket()
  const audioRef = useRef(null)

  const { isAuthenticated, refreshToken, isTokenExpired } = useAuth()

  const fetchRequest = async () => {
    setTickets(await passwords())

    audioRef.current.play()
  }

  useEffect(() => refreshToken, [isTokenExpired])

  useEffect(() => fetchRequest, [isAuthenticated])

  useEffect(() => {
    if (!audioRef.current) return

    socket.on('connect', () => {
      const services = serverOptions.services
        .split(',')
        .map((service) => service.trim())
      socket.emit('register panel', { unity: '1', services: services })
      console.log('[websocket] connected')
    })
    socket.on('register ok', () => {
      console.log('[websocket] client verified and registered by the api')
      fetchRequest()
    })
    socket.on('call ticket', () => {
      console.log('[websocket] call ticket')
      fetchRequest()
    })
    socket.on('error', (e) => {
      console.log('[websocket] error', e)
    })
    socket.on('disconnect', () => {
      console.log('[websocket] disconnected')
    })
  }, [audioRef, passwords])

  return (
    <main className="grid grid-cols-10 gap-4 h-screen">
      <section className="col-span-7 flex justify-between flex-col">
        <header className="flex justify-start items-center gap-4 mx-6 mt-6">
          <img src={logo} className="w-20 h-24" alt="Logo da Prefeitura" />
          <div>
            <h4 className="font-semibold text-2xl">
              Secretaria Municipal de Saúde
            </h4>
            <h4 className="font-semibold text-2xl">
              Prefeitura de Teófilo otoni
            </h4>
          </div>
        </header>

        <div>
          <div>
            <p
              data-testid="guiche"
              className="text-5xl text-center font-raleway leading-tight"
            >
              {`Guichê ${tickets[0]?.guiche || '0'} - Setor ${
                tickets[0]?.setor || '...'
              }`}
            </p>

            <p
              data-testid="prioridade"
              className="text-5xl text-center font-raleway leading-tight"
            >
              {`Atendimento ${tickets[0]?.description || ''}`}
            </p>
          </div>

          <h1
            data-testid="senha"
            className="text-[12rem] font-bold text-center leading-tight font-nunito"
          >
            {tickets[0]?.title || 'A000'}
          </h1>
          <p
            data-testid="paciente"
            className="text-6xl font-medium text-center font-raleway"
          >
            {tickets[0]?.paciente || ''}
          </p>
        </div>

        <div />
      </section>

      <aside className="col-span-3 bg-primary/[.7] rounded-l-2xl flex flex-col py-2">
        <h3 className="text-center font-bold text-6xl my-6 font-nunito">
          Histórico
        </h3>

        <div className="flex-1 flex flex-col justify-evenly items-center">
          {tickets.length > 1 ? (
            [...new Set(tickets.map((ticket) => ticket.title))]
              .filter((_, index) => index > 0 && index < 6)
              .map((uniqueTitle, index) => (
                <p
                  key={index}
                  className="py-5 px-2 text-center text-5xl font-raleway"
                >
                  {uniqueTitle}
                </p>
              ))
          ) : (
            <p className="py-2 px-2 text-center text-xl">Vazio</p>
          )}
        </div>
      </aside>

      <CommandActions />

      <audio ref={audioRef} src={audioPath} />
    </main>
  )
}
