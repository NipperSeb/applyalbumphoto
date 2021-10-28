import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/Loadphoto">Photos</Link>
    </nav>
  )
}

export default Header
