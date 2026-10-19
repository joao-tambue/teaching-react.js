import Rocket from "../assets/rocket.svg"

export default function Home () {
  return (
    <main className="text-[#808080]">
      <header className="bg-[#0D0D0D] flex items-center justify-center pt-[72px] pb-[80px]">
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
    </main>
  )
}