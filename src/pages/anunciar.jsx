import React from 'react'
import { Link } from "react-router-dom";

import Header from "../components/header/header.jsx";
import InputAnunciar from "../components/anunciarTextInput/textInput.jsx";

import anunciarStyle from "./css/anunciar.module.css";

function Anunciar() {
    return (
        <div>
            <Header/>

            <div className={anunciarStyle.anunciar}>
                <section className={anunciarStyle.containerAnunciar}>
                    <h1>Anunciar</h1>

                    <div className={anunciarStyle.inputContainer}>
                        <InputAnunciar value={1} inputName='Situação' list={['Perdido', 'Procurando Tutor']} />
                        <InputAnunciar value={2} inputName='Espécie' list={['Cachorro', 'Gato', 'Pássaro']} />
                        <InputAnunciar value={3} inputName='Gênero' list={['Macho', 'Femea']} />
                    </div>
                </section>
                
                <Link to="../2" relative="path" className={anunciarStyle.btnAnunciar}>Prosseguir</Link>
            </div>
        </div>
    )
}

export default Anunciar