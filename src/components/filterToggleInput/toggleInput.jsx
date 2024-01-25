import React from 'react'

import toggleInputStyle from './toggleInput.module.css'

function toggleInput(props) {
    return (
        <label className={toggleInputStyle.switch}>
            <input type="checkbox" />
            <span className={`${toggleInputStyle.slider} ${toggleInputStyle.round}`}></span>
            <label className={toggleInputStyle.switchLabel}>{props.name}</label>
        </label>
    )
}

export default toggleInput