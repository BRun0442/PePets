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
        <div>
            <header className='header'>
                <Link to="/" className='lightFontHeader'><h1 className='headerTitle'>PePets</h1></Link>

                <div className='linkHeader'>
                    <Link to="/" className='lightFontHeader'>Início</Link>
                    <Link to="/animais" relative="path" className='lightFontHeader'>Animais Perdidos</Link>
                    <div className='linkBackground'><Link to='/anunciar/1' className='boldFontHeader'>Anunciar</Link></div>
                    <div className='linkBorder'><Link className='lightFontHeader'>Login</Link></div>
                </div>
            </header>

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
        </div>
    )
}

export default AnunciarDescricao