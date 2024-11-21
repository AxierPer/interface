import { Link } from "react-router-dom"
import Button from "../buttons/Button"
import { RoutePaths } from "../../routes/routes"
import { ButtonProps } from "../../types/button"

export default function LoginComponent() {

  const props: ButtonProps = { name: 'Login' }

  return (
    <div className="max-w-xl  bg-zinc-400 m-auto p-4 rounded-xl bg-opacity-15 mt-16 mb-10">
      <form>
        <label className="text-white font-bold text-xl">User</label>
        <input
          type="text"
          placeholder="User"
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-5 focus:ring-2 focus:outline-none focus:ring-zinc-600 text-base" />
        <label className="text-white font-bold text-xl">Password</label>
        <input
          type="password"
          placeholder="Password"
          className="bg-zinc-700 p-3 rounded-lg w-full mb-5 focus:ring-2 focus:outline-none focus:ring-zinc-600 text-base" />
        <Link to={RoutePaths.home}> <Button props={props} /></Link>
        <p className="mt-3 text-sm underline text-gray-400 hover:text-gray-300 hover:cursor-pointer"><Link to={RoutePaths.register}>Register</Link></p>
      </form>
    </div>
  )
}

