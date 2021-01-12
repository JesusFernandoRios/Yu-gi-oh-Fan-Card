import React from 'react'
import './Style/Card.css'

export default function Card({random}) {

    return(
        <>
            {!random ? null :
                <div className="randomCard">

                    <h1>Random Card Display</h1>
                    <img className="randomImage" src={random.card_images[0].image_url} alt={random.name}/>
                    <h2>{random.name}</h2>
                    <p>{random.type}</p>
                    <p>{random.desc}</p>


                </div>
            }
        </>
    )
}
