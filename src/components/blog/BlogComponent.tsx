import { useEffect, useState } from "react"
import { DataPost } from "../../types/data_post"
import BlogCard from "../../components/cards/blogCard"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import data_post from "../../data_post.json"

const data = data_post
export default function BlogComponent() {

  const [posts, setPost] = useState<Array<DataPost>>([])
  const [query, setQuery] = useState("")

  const filterPost = posts.filter((post) =>
    post.title.toLowerCase().includes(query.toLowerCase()) ||
    post.preview.toLowerCase().includes(query.toLowerCase()))

  useEffect(() => {
    function loadData() {
      setPost(data)
    }

    loadData()
  })

  return (
    <div className="max-w-full h-full flex">
      <div className="grid w-4/5">
        {filterPost.map(post => (
          <BlogCard
            key={post.id}
            post={post} />
        ))
        }
      </div>

      <div>
        <span className="text-zinc-300 font-semibold p-2">Search <FontAwesomeIcon icon={faMagnifyingGlass} /> </span>
        <input
          className="w-2/3 bg-zinc-600 border-zinc-400 rounded p-1 focus:ring-zinc-500 focus:ring-2 focus:outline-none"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </div>
  )
}

