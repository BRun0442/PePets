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

            <textarea maxLength={100} className='anunciarInput' placeholder={props.placeholder? props.placeholder : props.inputName}/>
        </div>
    )
}

function AnunciarDescricao() {
    return (
        <div className='anunciar'>
            <section className='containerAnunciar'>
                <h1>Descrição</h1>

                <div className='inputContainer'>
                    <InputAnunciar span='opcional' inputName='Nome do pet' placeholder='Deixe em branco se não souber' />
                    <InputAnunciar span='opcional' inputName='Descrição' placeholder='Insira características do pet' />
                    <InputAnunciar span='opcional' inputName='Recompensa' placeholder='R$' />
                </div>
            </section>

            <Link to="../3" relative="path" className='btnAnunciar'>Prosseguir</Link>
        </div>
    )
}

export default AnunciarDescricao