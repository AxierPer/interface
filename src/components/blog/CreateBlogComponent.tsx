import { useState } from "react";
import { useForm } from "react-hook-form"
import { uploadImageToCloudinary } from "../../hooks/convert";
import ButtonRegister from "../buttons/ButtonFrom";
import data_post from "../../data_post.json"
import toast from "react-hot-toast";
import { RoutePaths } from "../../routes/routes";
import { useNavigate } from "react-router-dom";


export default function CreateBlogComponent() {
  const navigate = useNavigate();

  const [webpImage, setWebpImage] = useState<string | null>(null);
  const {register, handleSubmit,setValue} = useForm()
  const onSubmit = handleSubmit(data => 
    {
    console.log(data.img)
    data_post.push({
      "id": 6, 
      "author":"autor xd",
      "title": data.title,
      "preview": data.preview,
      "post": data.post,
      "img": data.img,
      "dateCreate":"11-24-2024",
      "dateUpdate": "11-24-2024"
    })
    toast.success("Post Created", {
      position:"bottom-right",
      style: {
        background: "#27272a",
        color: "white"
      }
    })
    navigate(RoutePaths.home)
  })

  const usernameCloudinary = import.meta.env.VITE_CLOUDINARY_USERNAME

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const webpUrl = await uploadImageToCloudinary(file,usernameCloudinary);
    setWebpImage(webpUrl);
  };
  setValue('img', webpImage)
  return (
    <div className="max-w-7xl m-auto bg-zinc-400 bg-opacity-15 p-4 rounded-xl">
      <h1 className="text-3xl font-semibold mb-4">Create Post</h1>
      <form onSubmit={onSubmit}>
        <label className="text-lg font-semibold text-zinc-300">Title</label>
        <input
          type="text"
          placeholder="title"
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-5 focus:ring-2 focus:outline-none focus:ring-zinc-600 text-base"
          {...register("title", {required:true})}
        />

        <label className="text-lg font-semibold text-zinc-300">Preview</label>
        <textarea
          placeholder="Preview"
          maxLength={500}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-5 focus:ring-2 focus:outline-none focus:ring-zinc-600 text-base max-h-32 min-h-32 "
          {...register("preview", {required:true})}
        />

        <label className="text-lg font-semibold text-zinc-300">Post</label>
        <textarea
          placeholder="Post"
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-5 focus:ring-2 focus:outline-none focus:ring-zinc-600 text-base max-h-80 min-h-80"
          {...register("post", {required:true})}
        />

        <label className="text-lg font-semibold text-zinc-300">Image</label>
        <input
          type="file"
          placeholder="Select image"
          accept="image/* "
          onChange={handleImageUpload}
          className="bg-zinc-700 p-3 rounded-lg block w-96 mb-5 focus:ring-2 focus:outline-none focus:ring-zinc-600 text-base hover:cursor-pointer"
        />

        <input type="hidden" 
        {...register('img', {required:true})}
        />
        
        <ButtonRegister props={ {name:"register"}}/>
      </form>
    </div>
  );
}
