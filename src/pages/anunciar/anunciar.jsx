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

            <input  className='anunciarInput' list={'anunciarList' + props.value} placeholder={props.inputName} />
            <datalist id={'anunciarList' + props.value}>
                {props.list.map(item => {
                    return <option value={item} />
                })}
            </datalist>
        </div>
    )
}

function Anunciar() {
    return (
        <div className='anunciar'>
            <section className='containerAnunciar'>
                <h1>Anunciar</h1>

                <div className='inputContainer'>
                    <InputAnunciar span='opcional' value={1} inputName='Situação' list={['Perdido', 'Procurando Tutor']} />
                    <InputAnunciar value={2} inputName='Espécie' list={['Cachorro', 'Gato', 'Pássaro']} />
                    <InputAnunciar value={3} inputName='Gênero' list={['Macho', 'Femea']} />
                </div>
            </section>

            <Link to="../2" relative="path" className='btnAnunciar'>Prosseguir</Link>
        </div>
    )
}

export default Anunciar