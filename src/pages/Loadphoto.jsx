import React from 'react'

import { useAuth0 } from '@auth0/auth0-react'

const Loadphoto = () => {
  const { user } = useAuth0()
  const { name, picture, email } = user

  return (
    <div>
      <div className="Loadphoto--header">
        <div className="col-md-2 mb-3">
          <img src={picture} alt="Profile" className="Loadphoto--img" />
        </div>
        <div className="Loadphoto--text">
          <h2>{name}</h2>
          <p className="lead text-muted">{email}</p>
        </div>
      </div>
    </div>
  )
}

export default Loadphoto
