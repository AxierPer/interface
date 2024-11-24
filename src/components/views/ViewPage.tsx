import data_post from "../../data_post.json"

export default function ViewPage({ id }: { id: string }) {

  if (!id || isNaN(Number(id))) {
    return <p>Not valid</p>
  }

  const datosJson = data_post.find((item) => item.id === Number(id))

  return (
    <div className="w-5/6 m-auto">
      {datosJson ? (
        <div className="p-2 bg-gray-800 bg-opacity-50">
          <h1 className="text-2xl font-semibold mb-4">
            {datosJson.title}
          </h1>

          <div className="w-5/6 m-auto p-3">
            <img src={datosJson.img} title={datosJson.post} className="w-full " />
            <p className="text-lg mt-4">{datosJson.post}</p>
            <p className="text-sm font-semibold text-zinc-500 mt-2">By {datosJson.author} at {datosJson.dateCreate}</p>
          </div>

        </div>
      ) : (
        <p>No data</p>
      )}
    </div>
  )
}

