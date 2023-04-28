import { getGuitarras } from '~/api/guitarras.server'
import { useLoaderData } from '@remix-run/react'
import ListadoGuitarras from '~/components/listado-guitarras';

export function meta() {
  return [
    { title: 'GuitarraLA - Tienda de Guitarras' },
    { description: 'GuitarraLA - Nuestra colección de Guitarras' }
  ]
}

export async function loader() {
  const guitarras = await getGuitarras()
  return guitarras.data
}

export default function Tienda() {
  const guitarras = useLoaderData()

  return (
    <ListadoGuitarras
      guitarras={guitarras}
    />
  )
}