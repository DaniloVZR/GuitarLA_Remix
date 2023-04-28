import { Outlet } from "@remix-run/react";
import styles from '~/styles/blog.css';

export function links() {
  return [
    { rel: 'stylesheet', href: styles }
  ]
}

export function meta() {
  return [
    { title: 'GuitarLA - Nuestro Blog' },
    { descripcion: 'GuitarLA, Blog de música y venta de guitarras' }
  ]
}

export default function Blog() {

  return (
    <main className="contenedor">
      <Outlet />
    </main>
  )
}