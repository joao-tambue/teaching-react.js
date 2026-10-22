import Rocket from "../assets/rocket.svg"
import Plus from "../assets/plus.svg"
import empty from "../assets/empty-todo.svg"

export default function Home () {
  return (
    <main className="text-[#808080]">
      <header className="bg-[#0D0D0D] flex items-center justify-center pt-18 pb-20">
        <div className="flex items-center gap-3">
          <div>
            <img src={Rocket} alt="Rocket" />
          </div>
          <h1 className="text-[40px] font-black">
            <span className="text-[#4EA8DE]">to</span>
            <span className="text-[#5E60CE]">do</span>
          </h1>
        </div>
      </header>
      {/* input com o botão de criar tarefas */}
      <section className="max-w-184 mx-auto flex items-center gap-2">
        <input 
          className="flex-1 border border-[#0D0D0D] 
          outline-none rounded-lg text-[16px] bg-[#262626] p-4 placeholder:text-[#808080]"
          type="text" 
          placeholder="Adicione uma nova tarefa" 
        />
        <button
          className="bg-[#1E6F9F] flex items-center gap-2 rounded-[9px] p-4 text-[14px] font-bold text-white"
        >
          Criar
          <img src={Plus} alt="Plus" />
        </button>
      </section>
      {/* lista de tarefas */}
      <section className="max-w-184 mx-auto mt-16">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <p className="text-[#4EA8DE] font-bold text-[14px]">Tarefas criadas</p>
            <span className="bg-[#333333] text-[#D9D9D9] rounded-full px-2 py-1 text-[12px] font-bold">0</span>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-[#8284FA] font-bold text-[14px]">Concluídas</p>
            <span className="bg-[#333333] text-[#D9D9D9] rounded-full px-2 py-1 text-[12px] font-bold">0</span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 border-t border-[#333333] rounded-t-2xl pt-16">
          <img src={empty} alt="Empty todo" />
          <div className="flex flex-col items-center gap-2">
            <p className="text-[#808080] font-bold text-[14px]">Você ainda não tem tarefas cadastradas</p>
            <p className="text-[#808080] text-[14px]">Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>
      </section>
    </main>
  )
}