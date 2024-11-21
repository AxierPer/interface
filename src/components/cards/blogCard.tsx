import { DataPost } from "../../types/data_post"

export default function BlogCard({ post }: { post: DataPost }) {
  return (
    <div className="p-2 mb-2 mt-2 bg-zinc-400 hover:bg-zinc-500 hover:cursor-pointer transition w-3/4 rounded-xl m-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-center font-bold text-2xl text-zinc-200">{post.title}</h1>
        <img src={post.img} className="w-2/4 " />
      </div>

      <p className="font-sans pb-2 pt-5 text-zinc-200">{post.preview}</p>

      <footer className="flex justify-start m-auto">
        <p className="text-xs text-zinc-700 font-semibold">
          By {post.author} on {post.dateCreate}
        </p>
      </footer>
    </div>
  )
}
