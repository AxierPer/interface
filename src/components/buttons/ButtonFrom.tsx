import { ButtonProps } from "../../types/button";

export default function ButtonRegister({ props }: { props: ButtonProps }) {
    return (
        <div>
            <button className="bg-blue-800 text-gray-300 mt-5 p-2 w-48 font-semibold transition rounded-lg hover:bg-blue-900 hover:shadow-lg">{props.name}</button>
        </div>
    )
}

