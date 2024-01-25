import React from 'react'
import { Link } from "react-router-dom";

import Header from '../components/header/header.jsx';
import TextAreaInput from '../components/anunciarTextareaInput/textareaInput.jsx';

import anunciarStyle from "./css/anunciar.module.css";

const InputAnunciar = (props) => {
    return (
        <div className='inputItem'>
            <div className='inputName'>
                <p>{props.inputName}</p>
                <span>{props.span}</span>
            </div>

            <textarea maxLength={600} className='anunciarInput' placeholder={props.placeholder ? props.placeholder : props.inputName} />
        </div>
    )
}

function anunciarFoto() {
    return (
        <div>
            <Header/>

            <div className={anunciarStyle.anunciar}>
                <section className={anunciarStyle.containerAnunciar}>
                    <h1>Descrição</h1>
                    <div className={anunciarStyle.avisoContainer}>
                        <p>
                            Atenção: a foto do seu pet é muito importante para que ele seja encontrado,
                            por favor, insira uma foto de boa qualidade e que mostre bem o seu pet.
                            A foto será exibida no anúncio.
                        </p>
                    </div>
                    <div className={anunciarStyle.inputContainer}>
                        <TextAreaInput span='opcional' inputName='Link' placeholder='Insira o link da imagem de seu pet' />
                        {/* <InputAnunciar span='opcional' inputName='Link' placeholder='Insira o link da imagem de seu pet' /> */}
                    </div>
                </section>
                <Link to="../../animais" relative="path" className={anunciarStyle.btnAnunciar}>Prosseguir</Link>
            </div>
        </div>
    )
}

export default anunciarFoto