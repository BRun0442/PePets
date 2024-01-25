import React from 'react'

import textInputStyle from './textInput.module.css'

function textInput(props) {
    return (
        <div className={textInputStyle.container}>
            <p className={textInputStyle.title}>{props.name}</p>
            <input className={textInputStyle.input} type="text" />
        </div>
    )
}

export default textInput