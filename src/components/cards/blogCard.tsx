import { DataPost } from "../../types/data_post"

export default function BlogCard({post}: {post: DataPost}){
    return (
        <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.preview}</p>
        </div>
    )
}