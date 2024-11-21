import { Link } from "react-router-dom"
import { RoutePaths } from "../routes/routes"

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className="w-full bg-zinc-700">
        <nav className="flex justify-between items-center">
          <ul className="flex ">
            <li 
              className="uppercase font-sans font-bold text-stone-400 p-3 text-center hover:bg-zinc-600 hover:cursor-pointer transition-all">
              <Link to={RoutePaths.home}>Home</Link>
            </li>

            <li 
              className="uppercase font-sans font-bold text-stone-400 p-3 text-center hover:bg-zinc-600 hover:cursor-pointer transition-all">
              Contact
            </li>

            <li 
              className="uppercase font-sans font-bold text-stone-400 p-3 text-center hover:bg-zinc-600 hover:cursor-pointer transition-all">
              More info
            </li>

            <li 
              className="uppercase font-sans font-bold text-stone-400 p-3 text-center hover:bg-zinc-600 hover:cursor-pointer transition-all">
              <Link to={RoutePaths.login}>Log In</Link>
            </li>

            <li 
              className="uppercase font-sans font-bold text-stone-400 p-3 text-center hover:bg-zinc-600 hover:cursor-pointer transition-all">
            Register
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="text-white absolute left-1/2 bottom-5">© 2024 Mi Aplicación</footer>
    </div>
  )
}

