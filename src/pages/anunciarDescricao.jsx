import React from 'react'
import { Link } from "react-router-dom";

import Header from '../components/header/header.jsx';
import TextareaInput from '../components/anunciarTextareaInput/textareaInput.jsx';

import anunciarStyle from "./css/anunciar.module.css";

const InputAnunciar = (props) => {
    return (
        <div className='inputItem'>
            <div className='inputName'>
                <p>{props.inputName}</p>
                <span>{props.span}</span>
            </div>

            <textarea maxLength={100} className='anunciarInput' placeholder={props.placeholder? props.placeholder : props.inputName}/>
        </div>
    )
}

function AnunciarDescricao() {
    return (
        <div>
            <Header/>

            <div className={anunciarStyle.anunciar}>
                <section className={anunciarStyle.containerAnunciar}>
                    <h1>Descrição</h1>
                    <div className={anunciarStyle.inputContainer}>
                        <TextareaInput span='opcional' inputName='Nome do pet' placeholder='Deixe em branco se não souber' />
                        <TextareaInput span='opcional' inputName='Descrição' placeholder='Insira características do pet' />
                        <TextareaInput span='opcional' inputName='Recompensa' placeholder='R$' />
                    </div>
                </section>
                <Link to="../3" relative="path" className={anunciarStyle.btnAnunciar}>Prosseguir</Link>
            </div>
        </div>
    )
}

export default AnunciarDescricao