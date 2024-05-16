import CommandActions from '@/components/home/command-actions'
import logo from '@/assets/img/logo.png'

export default function HomeTemplate({ children, tickets = [] }) {
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

        {children}

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
                  className="py-5 px-2 text-center text-5xl font-nunito font-medium"
                >
                  {uniqueTitle}
                </p>
              ))
          ) : (
            <p className="py-2 px-2 text-center text-5xl font-nunito">Vazio</p>
          )}
        </div>
      </aside>

      <CommandActions />
    </main>
  )
}
