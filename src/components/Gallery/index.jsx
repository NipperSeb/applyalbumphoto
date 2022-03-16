import React from 'react'

const Gallery = ({ images }) => {
  return (
    <div>
      {images
        .map((img, index) => (
          <img
            key={index}
            src={img}
            alt="image mariage sebastien pincepoche et maryse guimard"
            className="photo"
          />
        ))
        .reverse()}
    </div>
  )
}

export default Gallery
