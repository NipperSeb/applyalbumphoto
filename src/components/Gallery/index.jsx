import React from 'react'
import PhotoElement from '../Photo-element'

const Gallery = ({ images }) => {
  return (
    <div className="gallery__list">
      {images &&
        images.map((image) => <PhotoElement key={image.id} {...image} />)}
    </div>
  )
}

export default Gallery
