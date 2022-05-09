import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  useReducer,
} from 'react'
import FormPhoto from '../components/Form-photo'
import Gallery from '../components/Gallery'
import '../style/LoadPhoto.scss'
import { useAuth0 } from '@auth0/auth0-react'
import { getPictures } from '../services/endpoint'

const Loadphoto = () => {
  const { user } = useAuth0()
  const { name, email } = user

  const [images, setImages] = useState([])
  const [page, setPage] = useState(0)

  // fetch the first page after a new picture
  function fetchUploads() {
    setImages([])
    setPage(0)
    getPictures(page)
      .then((data) => {
        setImages(data.pictures)
      })
      .catch(console.error)
  }

  //add loadMore pictures
  useEffect(() => {
    const loadMorePictures = () => {
      getPictures(page)
        .then((data) => {
          setImages((images) => [...images, ...data.pictures])
        })
        .catch(console.error)
    }
    loadMorePictures()
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
        <FormPhoto fetchUploads={fetchUploads} />
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
