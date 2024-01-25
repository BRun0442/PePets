import React from 'react'
import { Link } from "react-router-dom";

import headerStyle from './header.module.css'

function header() {
    return (
        <header className={headerStyle.container}>
            <Link to="/" className={headerStyle.titleContainer}><h1 className={headerStyle.title}>PePets</h1></Link>

            <div className={headerStyle.linkContainer}>
                <Link to="/" className={headerStyle.lightFont}>Início</Link>
                <Link to="/animais" relative="path" className={headerStyle.lightFont}>Animais Perdidos</Link>

                <div className={headerStyle.linkBackground}>
                    <Link to='/anunciar/1' className={headerStyle.boldFont}>Anunciar</Link>
                </div>

                <div className={headerStyle.linkBorder}>
                    <Link className={headerStyle.lightFont}>Login</Link>
                </div>
            </div>
        </header>
    )
}

export default header