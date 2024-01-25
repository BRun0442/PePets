import React from 'react'

import textInputStyle from './textInput.module.css'

function textInput(props) {
    return (
        <div className={textInputStyle.container}>
            <div className={textInputStyle.name}>
                <p>{props.inputName}</p>
                <span>{props.span}</span>
            </div>
            
            <input className={textInputStyle.input} list={'anunciarList' + props.value} placeholder={props.inputName} />
            <datalist id={'anunciarList' + props.value}>
                {props.list.map(item => {
                    return <option value={item} />
                })}
            </datalist>
        </div>
    )
}

export default textInput