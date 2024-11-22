import { useParams } from "react-router-dom"
import ViewPage from "../views/ViewPage"

export default function ViewComponent() {
  const { id } = useParams<{ id: string }>()

  if (!id || isNaN(Number(id))) {
    return <p>Not valid</p>
  }

  return <ViewPage id={id} />
}

