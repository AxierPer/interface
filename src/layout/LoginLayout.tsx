export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className="w-full bg-zinc-700 mb-36">
        <nav className="flex justify-between items-center">
          <ul className="flex ">
            <li className="uppercase font-sans font-bold text-stone-400 p-3 text-center hover:bg-zinc-600 hover:cursor-pointer transition-all">Home</li>
            <li className="uppercase font-sans font-bold text-stone-400 p-3 text-center hover:bg-zinc-600 hover:cursor-pointer transition-all">Contact</li>
            <li className="uppercase font-sans font-bold text-stone-400 p-3 text-center hover:bg-zinc-600 hover:cursor-pointer transition-all">More info</li>
            <li className="uppercase font-sans font-bold text-stone-400 p-3 text-center hover:bg-zinc-600 hover:cursor-pointer transition-all">Log In</li>
            <li className="uppercase font-sans font-bold text-stone-400 p-3 text-center hover:bg-zinc-600 hover:cursor-pointer transition-all">Register</li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="text-white absolute left-1/2 bottom-5">© 2024 Mi Aplicación</footer>
    </div>
  )
}

