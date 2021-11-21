import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()
  return (
    <button className="item btn " onClick={() => loginWithRedirect()}>
      Connexion
    </button>
  )
}

export default LoginButton
