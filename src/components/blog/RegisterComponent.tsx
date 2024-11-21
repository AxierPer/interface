import { Link } from "react-router-dom";
import { ButtonProps } from "../../types/button";
import ButtonRegister from "../buttons/Button";
import { RoutePaths } from "../../routes/routes";

export default function RegisterComponent() {

  const props: ButtonProps = { name: 'register' }

  return (
    <div className="max-w-xl m-auto bg-zinc-400 bg-opacity-15 p-4 rounded-xl">
      <form>
        <label className="text-white font-bold text-xl">Complete Name</label>
        <input
          type="text"
          placeholder="Example: Jhon Doe"
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-5 focus:ring-2 focus:outline-none focus:ring-zinc-600 text-base" />


        <label className="text-white font-bold text-xl">User Name</label>
        <input
          type="text"
          placeholder="Example: JDoe123"
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-5 focus:ring-2 focus:outline-none focus:ring-zinc-600 text-base" />

        <label className="text-white font-bold text-xl">Password</label>
        <input
          type="password"
          placeholder="Password"
          className="bg-zinc-700 p-3 rounded-lg w-full mb-5 focus:ring-2 focus:outline-none focus:ring-zinc-600 text-base" />

        <label className="text-white font-bold text-xl">Confirm Password</label>
        <input
          type="password"
          placeholder="Password"
          className="bg-zinc-700 p-3 rounded-lg w-full mb-5 focus:ring-2 focus:outline-none focus:ring-zinc-600 text-base" />

        <Link to={RoutePaths.login}><ButtonRegister props={props} /></Link>
      </form>
    </div>
  )
}

