import CommandActions from '@/components/home/command-actions'
import logo from '@/assets/img/logo.png'
import useTicket from '@/hooks/useTicket'
import systemOptions from '@/config/system'
import useUnity from '@/hooks/useUnity'

export default function HomeTemplate({
  children,
  tickets = [],
  className = '',
}) {
  const { isTicketEmpty } = useTicket()
  const { unity, description } = useUnity()

  return (
    <main className="grid grid-cols-10 gap-4 h-screen overflow-hidden">
      <section className="col-span-7 flex flex-col justify-between">
        <header className="flex items-center gap-4 mx-6 mt-6">
          <img
            src={logo}
            className="h-[6rem] w-[5.5rem]"
            alt="Logo da Prefeitura"
          />
          <div>
            <h4 className="font-semibold text-2xl">
              {unity || 'Sistema de Atendimento ao Público'}
            </h4>
            <h4 className="font-semibold text-2xl">
              {description || 'NovoSGA'}
            </h4>
          </div>
        </header>

        <div className={className}>{children}</div>

        <footer className="text-black/[.4] px-2">
          Versão {systemOptions.version}
        </footer>
      </section>

      <aside className="col-span-3 bg-primary/[.6] rounded-l-2xl flex flex-col py-2 text-center">
        <h3 className="font-bold text-6xl my-6 font-nunito">Histórico</h3>

        {!isTicketEmpty && (
          <ul className="flex flex-1 flex-col justify-center items-center gap-12">
            {tickets.slice(1, 5).map((ticket, index) => (
              <li
                key={index}
                className="py-5 px-2 text-5xl font-nunito font-medium"
              >
                <p>{ticket?.title}</p>
                <p>Guichê {ticket?.guiche}</p>
              </li>
            ))}
          </ul>
        )}
      </aside>

      <CommandActions />
    </main>
  )
}
