import React from 'react'

import cardAnimalStyle from "./animalCard.module.css";

function estruturaAnimais(props) {
    return (
        <div className={cardAnimalStyle.container}>
            <section className={cardAnimalStyle.title}>
                <p>{props.state}</p>
            </section>

            <section className={cardAnimalStyle.imgContainer}>
                <img className={cardAnimalStyle.image} src={props.img} alt="Imagem do animal perdido" />
            </section>

            <section className={cardAnimalStyle.descriptionContainer}>
                <p className={cardAnimalStyle.name}>{props.name}</p>

                <section className={cardAnimalStyle.description}>
                    <p className={cardAnimalStyle.location}>{props.location}</p>
                    <p className={cardAnimalStyle.timeAgo}>{props.timeAgo}</p>
                </section>
            </section>
        </div>
    )
}

export default estruturaAnimais