import React, { Component } from 'react'
import "../css/lostAnimals.css";
import Animal from "../components/lostAnimal/lostAnimal.jsx";

function LostAnimals() {
    return (
        <div className="container">
            <section className='filter'>
                <h1>ANIMAIS PERDIDOS</h1>
            </section>

            <section className="cards">
                <Animal state='Procurando tutor' location='Rua Nova Cruz, 65, Ca...' timeAgo='Há 7d' name='Nome Desconhecido' img='https://viumeupet-dev.s3.sa-east-1.amazonaws.com/petThumbs/dd9abb2e-5363-4731-929e-8d6a7199cb89.jpeg'/>
                <Animal state='Perdido' location='Quitauna, Osasco, SP...' timeAgo='Há 3h' name='Tigrão' img='https://viumeupet-dev.s3.sa-east-1.amazonaws.com/petThumbs/ac4ddb37-f207-461f-b317-a6e144f0e231.jpeg'/>
                <Animal state='Perdido' location='Rua Baependy, Cam...' timeAgo='Há 9h' name='Shurato Xuxu' img='https://viumeupet-dev.s3.sa-east-1.amazonaws.com/petThumbs/e3eb2c6c-63a7-4c4b-a476-0f6c616b08c6.jpeg'/>

                <Animal state='Procurando tutor' location='Rua Nova Cruz, 65, Ca...' timeAgo='Há 7d' name='Nome Desconhecido' img='https://viumeupet-dev.s3.sa-east-1.amazonaws.com/petThumbs/dd9abb2e-5363-4731-929e-8d6a7199cb89.jpeg'/>
                <Animal state='Perdido' location='Quitauna, Osasco, SP...' timeAgo='Há 3h' name='Tigrão' img='https://viumeupet-dev.s3.sa-east-1.amazonaws.com/petThumbs/ac4ddb37-f207-461f-b317-a6e144f0e231.jpeg'/>
                <Animal state='Perdido' location='Rua Baependy, Cam...' timeAgo='Há 9h' name='Shurato Xuxu' img='https://viumeupet-dev.s3.sa-east-1.amazonaws.com/petThumbs/e3eb2c6c-63a7-4c4b-a476-0f6c616b08c6.jpeg'/>

                <Animal state='Procurando tutor' location='Rua Nova Cruz, 65, Ca...' timeAgo='Há 7d' name='Nome Desconhecido' img='https://viumeupet-dev.s3.sa-east-1.amazonaws.com/petThumbs/dd9abb2e-5363-4731-929e-8d6a7199cb89.jpeg'/>
                <Animal state='Perdido' location='Quitauna, Osasco, SP...' timeAgo='Há 3h' name='Tigrão' img='https://viumeupet-dev.s3.sa-east-1.amazonaws.com/petThumbs/ac4ddb37-f207-461f-b317-a6e144f0e231.jpeg'/>
                <Animal state='Perdido' location='Rua Baependy, Cam...' timeAgo='Há 9h' name='Shurato Xuxu' img='https://viumeupet-dev.s3.sa-east-1.amazonaws.com/petThumbs/e3eb2c6c-63a7-4c4b-a476-0f6c616b08c6.jpeg'/>

                <Animal state='Procurando tutor' location='Rua Nova Cruz, 65, Ca...' timeAgo='Há 7d' name='Nome Desconhecido' img='https://viumeupet-dev.s3.sa-east-1.amazonaws.com/petThumbs/dd9abb2e-5363-4731-929e-8d6a7199cb89.jpeg'/>
                <Animal state='Perdido' location='Quitauna, Osasco, SP...' timeAgo='Há 3h' name='Tigrão' img='https://viumeupet-dev.s3.sa-east-1.amazonaws.com/petThumbs/ac4ddb37-f207-461f-b317-a6e144f0e231.jpeg'/>
                <Animal state='Perdido' location='Rua Baependy, Cam...' timeAgo='Há 9h' name='Shurato Xuxu' img='https://viumeupet-dev.s3.sa-east-1.amazonaws.com/petThumbs/e3eb2c6c-63a7-4c4b-a476-0f6c616b08c6.jpeg'/>
            </section>

        </div>
    );
}

export default LostAnimals;