import { useLoaderData } from "@remix-run/react"
import { getPost } from "~/api/posts.server"
import { formatearFecha } from '~/utils/helpers'

export async function loader({ params }) {
  const { postUrl } = params
  const post = await getPost(postUrl)


  if (post.data.length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Post No Encontrado'
    })
  }

  return post
}

export function meta({ data }) {
  if (!data) {
    return [
      { title: 'GuitarLA - Blog No Encontrado' },
      { description: 'Guitarras, venta de guitarras, blog no encontrada' }
    ]
  }

  return [
    { title: `GuitarraLA - ${data.data[0].attributes.titulo}` },
    { description: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.titulo}` }
  ]
}


export default function Post() {
  const post = useLoaderData()
  const { titulo, imagen, contenido, publishedAt } = post.data[0].attributes

  return (
    <article className="post mt-3">
      <img className="imagen" src={imagen.data.attributes.url} alt={`Imagen Blog ${titulo}`} />
      <div className="contenido">
        <h3>{titulo}</h3>
        <p className="fecha">{formatearFecha(publishedAt)}</p>
        <p className="texto">{contenido}</p>
      </div>
    </article>
  )
}