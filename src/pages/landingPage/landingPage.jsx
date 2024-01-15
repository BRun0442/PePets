import React from 'react'
import { Link } from "react-router-dom";

import "../css/landingPage.css";

const linkBackground = {
  backgroundColor: '#219C90',
  height: '100%',
  display: 'flex',
  alignItems: 'center',

  paddingLeft: '0.6rem',
  paddingRight: '0.6rem'
}

const linkBorder = {
  height: '100%',
  display: 'flex',
  alignItems: 'center',

  borderLeft: '2px solid #219C90',
  borderRight: '2px solid #219C90',

  paddingLeft: '1.4rem',
  paddingRight: '1.4rem'
}

function landingPage() {
  return (
    <section className='background'>
      <div className='background-image' />

      <div className='content'>
        <header className='header'>
          <h1 className='headerTitle'>PePets</h1>

          <div className='linkHeader'>
            <Link className='lightFontHeader'>Início</Link>
            <Link to="./animais" relative="path" className='lightFontHeader'>Animais Perdidos</Link>
            <div style={linkBackground}><Link className='boldFontHeader'>Anunciar</Link></div>
            <div style={linkBorder}><Link className='lightFontHeader'>Login</Link></div>
          </div>
        </header>

        <main>
          <div className='mainText'>
            <h1 className='mainTitle'>PePets</h1>

            <p>
              No PePets, oferecemos um espaço virtual para unir esforços na 
              <spam style={{fontWeight: 600}}> busca por pets desaparecidos </spam>,
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