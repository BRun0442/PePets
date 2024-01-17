import React from 'react'
import "./lostAnimal.css";

function estruturaAnimais(props) {
    return (
        <div className='cardContainer'>

            <section className='cardTitle'>
                <p>{props.state}</p>
            </section>

            <img className='imgCard' src={props.img} alt="Imagem do animal perdido" />

            <section className='cardDescription'>
                <p className='nameDescription'>{props.name}</p>

                <section className='descriptionContainer'>
                    <p className='location'>{props.location}</p>
                    <p className='timeAgo'>{props.timeAgo}</p>
                </section>
            </section>

        </div>
    )
}

export default estruturaAnimais