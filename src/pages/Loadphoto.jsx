import React, { useState, useEffect, useCallback } from 'react'
import FormPhoto from '../components/Form-photo'
import Gallery from '../components/Gallery'
import '../style/LoadPhoto.scss'
import { useAuth0 } from '@auth0/auth0-react'

// put the path with the good scheme
const transformUploads = (items) => {
  let pictures = []
  let pathApi = 'http://localhost:8000/static/'
  for (let i = 0; i < items.length; i++) {
    pictures.unshift(pathApi + items[i].data)
  }
  return pictures
}

const Loadphoto = () => {
  const { user } = useAuth0()
  const { name, email } = user
  const [images, setImages] = useState([])
  const [page, setPage] = useState(0)

  //useCallback prevent the button load more to perform this code
  const fetchImage = useCallback(async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/upload?page=${page}&size=12`,
        {
          credentials: 'include',
        }
      )
      const data = await response.json()
      setImages(transformUploads(data.pictures).concat(images))
    } catch (err) {
      console.log(err)
    } finally {
    }
  }, [page])

  //Call the API each time the number page change
  useEffect(() => {
    fetchImage()
  }, [page])

  const loadMore = () => {
    setPage((page) => page + 1)
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
        <FormPhoto fetchImage={fetchImage} />
      </section>
      <section className="formPhoto__gallery">
        <Gallery images={images} />
      </section>
      <div className="load-more">
        <button onClick={loadMore} className="btn-click">
          Voir plus...
        </button>
      </div>
    </div>
  )
}

export default Loadphoto
