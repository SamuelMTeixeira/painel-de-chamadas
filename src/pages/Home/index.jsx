import { useEffect } from 'react'
import defaultSound from '@/assets/sound/alert/ekiga-vm.wav'
import HomeTemplate from '@/components/templates/home-template'
import useTicket from '@/hooks/useTicket'
import useMercure from '@/hooks/useMercure'
import useAudio from '@/hooks/useAudio'

export default function Home() {
  const { tickets, isPending, refetch, isTicketEmpty } = useTicket()

  const audio = useAudio(defaultSound, { volume: 1, playbackRate: 1 })

  const fetchRequest = () => {
    audio.play()
    refetch()
  }

  useEffect(() => fetchRequest, [])

  useMercure('/unidades/1/painel', fetchRequest, [])

  return (
    <HomeTemplate tickets={tickets}>
      {isPending || isTicketEmpty ? (
        <h1
          data-testid="senha"
          className="text-[12rem] font-bold text-center leading-tight font-nunito"
        >
          A000
        </h1>
      ) : (
        <article>
          <div>
            <div className="flex gap-2 justify-center">
              <p
                data-testid="guiche"
                className="text-5xl text-center font-raleway leading-tight"
              >
                {`Guichê ${tickets[0]?.guiche}`}
              </p>

              <span className="text-5xl font-raleway leading-tight ">-</span>

              <p className="text-5xl text-center font-raleway leading-tight">
                {`Setor ${tickets[0]?.setor}`}
              </p>
            </div>

            <p
              data-testid="prioridade"
              className="text-5xl text-center font-raleway leading-tight"
            >
              {`Atendimento ${tickets[0]?.description}`}
            </p>
          </div>

          <h1
            data-testid="senha"
            className="text-[12rem] font-bold text-center leading-tight font-nunito"
          >
            {tickets[0]?.title}
          </h1>
          <p
            data-testid="paciente"
            className="text-6xl font-medium text-center font-raleway"
          >
            {tickets[0]?.paciente}
          </p>
        </article>
      )}
    </HomeTemplate>
  )
}
