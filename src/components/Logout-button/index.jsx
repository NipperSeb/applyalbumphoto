import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const LogoutButton = () => {
  const { logout } = useAuth0()
  return (
    <button
      className="item btn"
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      Déconnexion
    </button>
  )
}

export default LogoutButton
