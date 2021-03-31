import React, {useState} from 'react'
import "./Style/Archetype.css"


function Archetype() {
    const [input, setInput] = useState();
    const [dataBack, setDataBack] = useState();
    const [error, setError] = useState()


    const getArchetype = () => {

        setDataBack("")
        fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${input}`)
        .then(res => res.json())
        .then(data => {
            setDataBack(data.data)
        }).catch(err => setError(err))
    }

    return (
        <div className="archetype__container">

            <div className="infomation">
                <h2>Use the Search bar below to find your desired archetype</h2>
            </div>
            <div className="search">
                <input type="text" name="archetype" onChange={e => setInput(e.target.value)}/>
                <button onClick={() => getArchetype()}>Search</button>
                <p> here is the input: {input}</p> 
            </div>
            
            <div className="card__container">
                {dataBack ? dataBack.map( (e, index) => {
                    return(

                    <div className="archetype" key={index}>
                        <img className="archetypeCards" src={e.card_images[0].image_url}/>
                    </div>

                )   
                }) : null}
            </div>
            
        </div>
    )
}

export default Archetype
