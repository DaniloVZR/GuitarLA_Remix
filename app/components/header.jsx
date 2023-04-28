import { Link } from '@remix-run/react'
import Navegacion from './navegacion'
import logo from '../../public/img/logo.svg'

export default function Header() {
  return (
    <header className="header">
      <div className="contenedor barra">
        <Link to="/" className="logo">
          <img className='logo' src={logo} alt="Logo" />
        </Link>
        <Navegacion />
      </div>
    </header>
  )
}