import { useEffect, useState } from "react"
import { DataPost } from "../types/data_post"
import BlogCard from "../components/cards/blogCard"

const data = [
  {
    id: 1,
    title: 'Post 1',
    preview: 'Esta debe ser el preview del post 1',
    post: 'Aqui debe ir todo el contenido del post 1'
  },
  {
    id: 2,
    title: 'Post 2',
    preview: 'Esta debe ser el preview del post 2',
    post: 'Aqui debe ir todo el contenido del post 2'
  },
  {
    id: 3,
    title: 'Post 3',
    preview: 'Esta debe ser el preview del post 3',
    post: 'Aqui debe ir todo el contenido del post 3'
  },
  {
    id: 4,
    title: 'Post 4',
    preview: 'Esta debe ser el preview del post 4',
    post: 'Aqui debe ir todo el contenido del post 4'
  }
]

export default function Home() {

  const [posts, setPost] = useState<Array<DataPost>>([])

  useEffect(() => {
    function loadData(){
      setPost(data)
    }

    loadData()
  })

  return (

    <div className="max-w-xl bg-zinc-300 h-full ">
        <h1 className="text-4xl">Blog</h1>
        {posts.map(post =>(
            <BlogCard 
            post={post}/>
          ) )
        }
    </div>
  )
}

