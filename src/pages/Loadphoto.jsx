import React, { useState, useEffect, useCallback } from 'react'
import FormPhoto from '../components/Form-photo'
import Gallery from '../components/Gallery'
import '../style/LoadPhoto.scss'
import { useAuth0 } from '@auth0/auth0-react'

const Loadphoto = () => {
  const { user } = useAuth0()
  const { name, email } = user

  const [images, setImages] = useState([])
  const [isFetching, setIsFetching] = useState(false)
  //setting the initial page
  const [page, setPage] = useState(0)
  const [hasMore, setHasMore] = useState(true)

  //on initial mount
  // Ce hook indique a react que notre composant doit exécuter qqchose après chaque affichage et permet le telechargement des photos a l'ouverture
  useEffect(() => {
    fetchImage()
  }, []) //le tab dependance evite une boucle infinie telechargement images

  const fetchImage = async () => {
    setIsFetching(true)
    try {
      const response = await fetch(
        `http://localhost:8000/upload?page=${page}&size=12`,
        {
          credentials: 'include',
        }
      )
      const data = await response.json()
      setImages((images) => [...images, ...data.pictures])
      console.log(page)
      setPage((page) => page + 1)
      setHasMore(data.totalPages !== data.currentPage)
      setIsFetching(false)
    } catch (err) {
      console.log(err)
    } finally {
    }
  }

  useEffect(() => {
    persistForm()
  }, [images]) //le tableau permet l'affichage du load more

  const persistForm = () => {
    /*if (isFetching !== true) {
      setIsFetching('true')
      console.log(isFetching)
      setPage(0)*/
    console.log('camembert')
  }

  return (
    <div className="loadphoto__container">
      <section className="loadphoto__header">
        <div className="loadphoto__text">
          <h2>{name.toLowerCase()}</h2>
          <p className="loadphoto__mail">{email}</p>
        </div>
      </section>
      <section className="formphoto__container">
        <FormPhoto persistForm={persistForm} />
      </section>
      <section className="formPhoto__gallery">
        <Gallery images={images} />
      </section>
      <div className="load-more">
        {!isFetching && hasMore && (
          <button onClick={fetchImage} className="btn-click">
            Voir plus...
          </button>
        )}
      </div>
    </div>
  )
}

export default Loadphoto
