import React from 'react'

export default function Card({random}) {

    console.log("cards", random)
    return(
        <>
            {!random ? null :
                <div>
                    <img src={random.card_images[0].image_url} alt={random.name}/>
                </div>
            }
        </>
    )
}
