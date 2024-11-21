import ButtonLogin from "../components/buttons/ButtonLogin"

export default function Login() {
  return (
    <div className="max-w-xl mx-auto text-center bg-zinc-700 bg-opacity-30 rounded-lg p-5 h-auto mt-36">
      <form>
        <label className="text-white font-bold text-xl">User</label>
        <input
          type="text"
          placeholder="User"
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-5" />
        <label className="text-white font-bold text-xl">Password</label>
        <input
          type="password"
          placeholder="Password"
          className="bg-zinc-700 p-3 rounded-lg w-full" />

        <ButtonLogin />
      </form>
    </div>
  )
}

