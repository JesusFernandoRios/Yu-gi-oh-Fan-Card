import React, {useState} from 'react'
import Card from './Card'

function Archetype() {
    const [input, setInput] = useState();
    const [dataBack, setDataBack] = useState();


    const getArchetype = () => {

        fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${input}`)
        .then(res => res.json())
        .then(data => {
            setDataBack(data.data)
        })
    }
    console.log(dataBack)

    return (
        <div className="container">
            <div className="search">
                <input type="text" name="archetype" onChange={e => setInput(e.target.value)}/>
                <button onClick={() => getArchetype()}>Search</button>
                <p> here is the input: {input}</p> 
            </div>
            
            {dataBack ? dataBack.map( (e, index) => {
                return(
                <div className="archetype" key={index}>
                    <img src={e.card_images[0].image_url}/>
                </div>
                )   
            }) : null}
        </div>
    )
}

export default Archetype
