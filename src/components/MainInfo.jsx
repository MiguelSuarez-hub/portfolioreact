import React from 'react';

import '../css/mainInfo.css';
import { perfil } from '../assets';

const MainInfo = () => {
  return (
    <>
      <section className="main__infoContainer">
        <img src={perfil} alt="Perfil Image" />
        <div className="infoContainer__Text">
          <h2>Mechatronic engineer/FrontEnd Developer</h2>
          <p>I'm Miguel Suarez and Programming is my passion</p>
        </div>
      </section>  
      <section className="main__cardsContainer">
        <div className="cardContainer">
          <h2>Mechatronic engineer/FrontEnd Developer</h2>
          <p>I'm Miguel Suarez and Programming is my passion</p>
        </div>
        <div className="cardContainer">
          <h2>Mechatronic engineer/FrontEnd Developer</h2>
          <p>I'm Miguel Suarez and Programming is my passion</p>
        </div>
        <div className="cardContainer">
          <h2>Mechatronic engineer/FrontEnd Developer</h2>
          <p>I'm Miguel Suarez and Programming is my passion</p>
        </div>
        <div className="cardContainer">
          <h2>Mechatronic engineer/FrontEnd Developer</h2>
          <p>I'm Miguel Suarez and Programming is my passion</p>
        </div>
      </section>
    </>
     
  )
}

export default MainInfo