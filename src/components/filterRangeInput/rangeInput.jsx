import React from 'react'

import rangeInputStyle from "./rangeInput.module.css";

function rangeInput(props) {
    return (
        <section className={rangeInputStyle.container}>
            <p className={rangeInputStyle.title}>{props.name}</p>
            <input className={rangeInputStyle.range} type='range' />
        </section>
    )
}

export default rangeInput