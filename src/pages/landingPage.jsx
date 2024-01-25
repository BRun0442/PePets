import React from 'react'
import { Link } from "react-router-dom";

import Header from '../components/header/header.jsx';

import landingPageStyle from "./css/landingPage.module.css";

function landingPage() {
  return (
    <section className={landingPageStyle.background}>
      <div className={landingPageStyle.backgroundImage} />

      <div className={landingPageStyle.content}>
        <Header />

        <main>
          <div className={landingPageStyle.mainText}>
            <h1 className={landingPageStyle.mainTitle}>PePets</h1>

            <p>
              No PePets, oferecemos um espaço virtual para unir esforços na
              <span style={{ fontWeight: 600 }}> busca por pets desaparecidos </span>,
              promovendo a solidariedade entre amantes de animais e compartilhando informações cruciais
              para reunir famílias com seus queridos companheiros.
            </p>
          </div>

          <div className={landingPageStyle.mainPhrase}>
            <h2>Anuncie aqui seu pet perdido!</h2>
            <Link to="/anunciar/1" className={landingPageStyle.button}>Anunciar!</Link>
          </div>
        </main>
      </div>
    </section>
  )
}

export default landingPage