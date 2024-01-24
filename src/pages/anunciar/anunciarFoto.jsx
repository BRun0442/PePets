import React from 'react'
import { Link } from "react-router-dom";

import "./anunciar.css";

const InputAnunciar = (props) => {
    return (
        <div className='inputItem'>
            <div className='inputName'>
                <p>{props.inputName}</p>
                <span>{props.span}</span>
            </div>

            <textarea maxLength={600} className='anunciarInput' placeholder={props.placeholder? props.placeholder : props.inputName}/>
        </div>
    )
}

function anunciarFoto() {
    return (
        <div className='anunciar'>
            
            <section className='containerAnunciar'>
                <h1>Descrição</h1>

                <div className='avisoContainer'>
                    <p>
                        Atenção: a foto do seu pet é muito importante para que ele seja encontrado,
                        por favor, insira uma foto de boa qualidade e que mostre bem o seu pet.
                        A foto será exibida no anúncio. 
                    </p>
                </div>

                <div className='inputContainer'>
                    <InputAnunciar span='opcional' inputName='Link' placeholder='Insira o link da imagem de seu pet' />
                </div>
            </section>

            <Link to="../../animais" relative="path" className='btnAnunciar'>Prosseguir</Link>
        </div>
    )
}

export default anunciarFoto