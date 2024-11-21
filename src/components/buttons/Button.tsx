import { ButtonProps } from "../../types/button";

export default function ButtonRegister({ props }: { props: ButtonProps }) {
  return (
    <div>
      <button className="bg-violet-800 mt-5 p-2 transition rounded-lg w-full hover:bg-violet-900 hover:shadow-lg">{props.name}</button>
    </div>
  )
}

