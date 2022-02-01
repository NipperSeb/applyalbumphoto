import React from 'react'
import FormPhoto from '../components/Form-photo'
import Gallery from '../components/Gallery'
import '../style/LoadPhoto.scss'
import { useAuth0 } from '@auth0/auth0-react'

const Loadphoto = () => {
  const { user } = useAuth0()
  const { name, email } = user

  return (
    <div className="loadphoto__container">
      <section className="loadphoto__header">
        <div className="loadphoto__text">
          <h2>{name.toLowerCase()}</h2>
          <p className="loadphoto__mail">{email}</p>
        </div>
      </section>
      <section className="formphoto__container">
        <FormPhoto />
      </section>
      <section className="formPhoto__gallery">
        <Gallery />
      </section>
    </div>
  )
}

export default Loadphoto
