import React, { useEffect } from 'react'

const transformUploads = (items) => {
  let pictures = []
  let pathApi = 'http://localhost:8000/static/'
  for (let i = 0; i < items.length; i++) {
    pictures.unshift(pathApi + items[i].data)
  }
  return pictures
}

const Gallery = ({ images, setImages }) => {
  useEffect(() => {
    async function fetchImage() {
      try {
        const response = await fetch(`http://localhost:8000/upload`, {
          credentials: 'include',
        })
        const data = await response.json()
        setImages(transformUploads(data))
      } catch (err) {
        console.log(err)
      } finally {
      }
    }
    fetchImage()
  }, [])

  return (
    <div>
      {images.map((img) => (
        <img
          key={img}
          src={img}
          alt="image mariage sebastien pincepoche et maryse guimard"
          className="photo"
        />
      ))}
    </div>
  )
}

export default Gallery
