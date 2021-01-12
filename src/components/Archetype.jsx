import React, {useState} from 'react'

function Archetype() {
    const [input, setInput] = useState();
    const [dataBack, setDataBack] = useState();


    const getArchetype = () => {

        fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${input}`)
        .then(res => res.json())
        .then(data => {
            setDataBack(data)
        })
    }


    return (
        <div className="container">
            <input type="text" name="archetype" onChange={e => setInput(e.target.value)}/>
            <button onClick={() => getArchetype()}>Search</button>
            <p> here is the input: {input}</p>
            
        </div>
    )
}

export default Archetype
