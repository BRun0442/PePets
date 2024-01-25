import React from 'react'

import textareaInputStyle from './textareaInput.module.css'

function textareaInput(props) {
    return (
        <div className={textareaInputStyle.item}>
            <div className={textareaInputStyle.name}>
                <p>{props.inputName}</p>
                <span>{props.span}</span>
            </div>

            <textarea maxLength={100} className={textareaInputStyle.anunciarInput} placeholder={props.placeholder ? props.placeholder : props.inputName} />
        </div>
    )
}

export default textareaInput