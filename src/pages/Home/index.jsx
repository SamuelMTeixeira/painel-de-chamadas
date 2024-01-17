import useAuth from '@/hooks/useAuth';
import useTicket from '@/hooks/useTicket';
import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import logo from '@/assets/img/logo.png'
import socket from '@/lib/socket';
import audioPath from 'public/sound/alert/ekiga-vm.wav'
import serverOptions from '@/config/server';

export default function Home() {
  const [tickets, setTickets] = useState([])

  const { login, isAuthenticated } = useAuth()
  const { tickets: passwords } = useTicket()
  const audioRef = useRef(null);

  useEffect(() => {
    const makeLogin = async () => {
      await login({
        client_id: serverOptions.client_id,
        client_secret: serverOptions.client_secret,
        username: serverOptions.username,
        password: serverOptions.password,
      });

      if (!isAuthenticated) {
        console.error('Login failed');
      }
    }

    makeLogin();
  }, [login]);

  useEffect(() => {
    if (!audioRef.current)
      return;

    const fetchRequest = async () => {
      setTickets(await passwords());

      audioRef.current.play(); 
    }

    socket.on('connect', () => {
      socket.emit('register panel', { unity: '1', services: ['1'] })
      console.log('[websocket] connected')
    })
    socket.on('register ok', () => {
      console.log('[websocket] register ok')
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
  }, [audioRef, passwords, serverOptions])


  return (
    <main className='grid grid-cols-10 gap-4 h-screen'>
      <section className='col-span-7 flex justify-between flex-col'>
        <header className='flex justify-start items-center gap-4 mx-5 mt-5'>
          <img src={logo} className='w-20 h-24' />
          <div>
            <h3 className='font-semibold text-2xl'>Secretaria Municipal de Saúde</h3>
            <h3 className='font-semibold text-2xl'>Prefeitura de Teófilo otoni</h3>
          </div>
        </header>

        <div>
          <h2 className='text-5xl text-center'>{tickets[0]?.description || ''}</h2>
          <h1 className='text-[11rem] font-bold text-center leading-tight'>{tickets[0]?.title || 'A000'}</h1>
          <p className='text-6xl font-medium text-center'>{tickets[0]?.paciente || ''}</p>
        </div>

        <div />
      </section>


      <aside className='col-span-3 bg-blue-400'>
        <h1 className='text-center font-semibold text-6xl my-6'>Histórico</h1>
        {
          tickets.length > 1 ? (
            [...new Set(tickets.map(ticket => ticket.title))]
              .filter((_, index) => index > 0)
              .map((uniqueTitle, index) => (
                <p key={index} className='py-2 px-2 text-center text-5xl'>{uniqueTitle}</p>
              ))
          ) : <p className='py-2 px-2 text-center text-xl'>Vazio</p>
        }
      </aside>

      <audio ref={audioRef} src={audioPath} />
    </main>
  )
}