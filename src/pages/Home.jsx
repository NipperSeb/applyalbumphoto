import React from 'react'

import Ring from '../assets/groom-putting-ring-on-bride-s-finger-ConvertImage.jpg'
import Heart from '../assets/heart-string.jpg'
import '../style/Home.scss'
import '../style/GlobalStyles.scss'
function Home() {
  return (
    <div className="Home">
      <section className="Home-photo">
        <img src={Ring} className="Home-ring" alt="a ring and a hand" />
      </section>
      <section className="Home-container">
        <img src={Heart} className="Home-heart" alt="backround heart red" />
        <div className="Home-text">
          <h1>Maryse & Sébastien </h1>
          <p>ont le plaisir d'annoncer leur mariage</p>
          <address>
            Le 17 septembre 2022
            <br />
            à la salle des fêtes de Javené
            <br />
          </address>
        </div>
      </section>
    </div>
  )
}

export default Home
