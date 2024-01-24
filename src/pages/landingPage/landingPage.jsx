import React from 'react'
import { Link } from "react-router-dom";

import "./landingPage.css";
import "../components/header.css";

function landingPage() {
  return (
    <section className='background'>
      <div className='background-image' />

      <div className='content'>
        <header className='header'>
          <Link to="/" className='lightFontHeader'><h1 className='headerTitle'>PePets</h1></Link>

          <div className='linkHeader'>
            <Link to="/" className='lightFontHeader'>Início</Link>
            <Link to="/animais" relative="path" className='lightFontHeader'>Animais Perdidos</Link>
            <div className='linkBackground'><Link to='/anunciar/1' className='boldFontHeader'>Anunciar</Link></div>
            <div className='linkBorder'><Link className='lightFontHeader'>Login</Link></div>
          </div>
        </header>

        <main>
          <div className='mainText'>
            <h1 className='mainTitle'>PePets</h1>

            <p>
              No PePets, oferecemos um espaço virtual para unir esforços na
              <spam style={{ fontWeight: 600 }}> busca por pets desaparecidos </spam>,
              promovendo a solidariedade entre amantes de animais e compartilhando informações cruciais
              para reunir famílias com seus queridos companheiros.
            </p>
          </div>

          <div className='mainPhrase'>
            <h2>Divulgue aqui seu pet perdido!</h2>
          </div>
        </main>
      </div>
    </section>
  )
}

export default landingPage