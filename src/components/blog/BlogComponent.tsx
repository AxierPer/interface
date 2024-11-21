import { useEffect, useState } from "react"
import { DataPost } from "../../types/data_post"
import BlogCard from "../../components/cards/blogCard"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

const data = [
  {
    id: 1,
    title: 'Post 1',
    preview: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
    post: 'Aqui debe ir todo el contenido del post 1',
    author: 'Autor 1',
    dateCreate: "2024-09-05",
    dateUpdate: "2024-10-08",
    img: "https://www.educaciontrespuntocero.com/wp-content/uploads/2020/04/mejores-bancos-de-imagenes-gratis.jpg.webp"
  },
  {
    id: 2,
    title: 'Post 2',
    preview: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
    post: 'Aqui debe ir todo el contenido del post 2',
    author: 'Autor 2',
    dateCreate: "2024-01-27",
    dateUpdate: "2024-06-30",
    img: "https://media.es.wired.com/photos/650b2a2e72d73ca3bd5ef0cc/16:9/w_2560%2Cc_limit/Business-OpenAI-Dall-E-3-heart.jpg"
  },
  {
    id: 3,
    title: 'Post 3',
    preview: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
    post: 'Aqui debe ir todo el contenido del post 3',
    author: 'Autor 3',
    dateCreate: "2024-02-29",
    dateUpdate: "2024-05-25",
    img: "https://img.freepik.com/foto-gratis/ilustracion-fondo-abstracto-formas-diseno-multicolor-generadas-ia_188544-15582.jpg"
  },
  {
    id: 4,
    title: 'Post 4',
    preview: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
    post: 'Aqui debe ir todo el contenido del post 4',
    author: 'Autor 4',
    dateCreate: "2024-07-24",
    dateUpdate: "2024-10-30",
    img: "https://media.es.wired.com/photos/6501e7429fa9000811a95fe8/16:9/w_2560%2Cc_limit/Adobe%2520Firefly.jpeg"
  },
  {
    id: 5,
    title: 'Post 5',
    preview: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
    post: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Esta debe ser el preview del post 5",
    author: 'Autor 5',
    dateCreate: "2024-10-01",
    dateUpdate: "2024-10-24",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiAaWu41PnuFia-KLhE7V9INkVgtLl43vJHw&s"
  }
]

export default function BlogComponent() {

  const [posts, setPost] = useState<Array<DataPost>>([])

  useEffect(() => {
    function loadData() {
      setPost(data)
    }

    loadData()
  })

  return (

    <div className="max-w-full h-full flex">
      <div className="grid w-4/5">
        {posts.map(post => (
          <BlogCard
            key={post.id}
            post={post} />
        ))
        }
      </div>

      <div>
        <span className="text-zinc-300 font-semibold p-2">Search <FontAwesomeIcon icon={faMagnifyingGlass} /> </span>
        <input className="w-2/3 bg-zinc-600 border-zinc-400 rounded p-1 focus:ring-zinc-500 focus:ring-2 focus:outline-none" placeholder="Search" />
      </div>
    </div>
  )
}

