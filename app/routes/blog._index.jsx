import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/api/posts.server"
import ListadoPosts from "~/components/listado-posts";

export async function loader() {
  const posts = await getPosts();
  return posts.data
}

export function meta() {
  return [
    { title: 'GuitarLA - Nuestro Blog' },
    { descripcion: 'GuitarLA, Blog de música y venta de guitarras' }
  ]
}

export default function Blog() {
  const posts = useLoaderData()

  return (
    <ListadoPosts
      posts={posts}
    />
  )
}