import React from 'react';

import '../css/mainInfo.css';
import Perfil from '../assets/perfil.jpg'

const MainInfo = () => {
  return (
    <section className="main__infoContainer">
      <img src={Perfil} alt="Perfil Image" />
      <div className="infoContainer__Text">
        <h2>Mechatronic engineer/FrontEnd Developer</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid molestias dolor fugit earum eum facere in impedit tempore fuga. Placeat perspiciatis minima ea nostrum ab itaque sapiente explicabo, quasi ratione?</p>
      </div>
    </section>   
  )
}

export default MainInfo