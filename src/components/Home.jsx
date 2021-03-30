import React from 'react'
import './Style/Home.css'

function Home() {
    return (
        <div className="home">
            <h1 className="h__one"> Welcome To a Yu-gi-oh Print Appreciation Page</h1>
            <div className="information">
                <h3>This page was created as a hobby of mine. Yu-Gi-Oh was a big deal for me in Middle School. I'd stare at my cards looking at the images, paying close attention to all the small details. now my cards sit inside a box in my closet gathering dust. 
                </h3>

                <img className="volume__one" src={require("../Images/Yugi.jpg")} alt="yugioh volume one"/>
                <p className="about__yugi">Yu-Gi-Oh! is a Japanese manga series about gaming written and illustrated by Kazuki Takahashi. It was serialized in Shueisha's Weekly Shōnen Jump magazine between September 1996 and March 2004.
                The plot follows the story of a boy named Yugi Mutou, who solves the ancient Millennium Puzzle. Yugi awakens a gambling alter-ego within his body that solves his conflicts using various games.
                Two anime adaptations were produced; one by Toei Animation, which aired from April to October 1998, 
                and another produced by NAS and animated by Studio Gallop titled Yu-Gi-Oh! Duel Monsters, which aired between 
                April 2000 and September 2004. The manga series has spawned a media franchise that includes multiple spin-off manga and anime series, 
                a trading card game, and numerous video games. Most of the incarnations of the franchise involve the fictional trading card game known as 
                Duel Monsters, where each player uses cards to "duel" each other in a mock battle of fantasy "monsters". This forms the basis for the real 
                life Yu-Gi-Oh! Trading Card Game. Yu-Gi-Oh has become one of the highest-grossing media franchises of all time.
                </p>
            </div>
        </div>

 
    )
}

export default Home
