import { Link } from 'react-router-dom'
import AuthNav from '../Auth-nav'
import '../../style/Navbar.scss'

function Navbar() {
  return (
    <nav className="container">
      <ul className="menu">
        <li class="logo">Maryse & Sébastien</li>
        <li className="item">
          <Link className="link" to="/">
            Accueil
          </Link>
        </li>
        <li className="item">
          <Link className="link" to="/Loadphoto">
            Photos
          </Link>
        </li>
        <li className="item">
          <AuthNav />
        </li>
        <li class="toggle"></li>
      </ul>
    </nav>
  )
}

export default Navbar
