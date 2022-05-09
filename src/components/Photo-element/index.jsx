import React from 'react'

const PhotoElement = ({ id, data, createdAt, name }) => {
  return (
    <div className="photoElement__random">
      <div className="photoElement__images">
        <img
          src={`http://localhost:8000/static/${data}`}
          alt={name}
          className="photoElement__image"
        />
      </div>
      <div className="photoElement__details">
        <div>
          <strong>Créer le:</strong> {createdAt}
        </div>
        <div>
          <em>Numéro:</em> {id}
        </div>
      </div>
    </div>
  )
}

export default PhotoElement
