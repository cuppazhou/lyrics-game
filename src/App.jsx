import React, { useState } from 'react';
import './App.css';

const DATA = [
  {
    image: "start.jpeg",
    title: "",
    album: "Good Luck!",
    lyrics: "Instructions: guess the song (and specific lyrics) that the picture depicts"
  },
  {
    image: "exile_0.jpeg",
    title: "Exile",
    album: "Folklore",
    lyrics: "I think I've seen this film before\nAnd I didn't like the ending"
  },
  {
    image: "cruel_summer_0.jpeg",
    title: "Cruel Summer",
    album: "Lover",
    lyrics: "Devils roll the dice, angels roll their eyes\nWhat doesn't kill me makes me want you more"
  },
  {
    image: "look_what_you_made_me_do_0.jpeg",
    title: "Look What You Made Me Do",
    album: "Reputation",
    lyrics: "You asked me for a place to sleep\nLocked me out and threw a feast (what?)"
  },
]

function PolaroidFront({ src }) {
  return (
    <div className="polaroidOuter">
      <div className="polaroidInner">
        <img className="polaroidImg" src={src} />
      </div>
    </div>
  )
}

function PolaroidBack({ title, album, lyrics}) {
  return (
    <div className="polaroidOuter">
      <p className="lyrics">{lyrics}</p>
      <p>{title}</p>
      <p>{album}</p>
    </div>
  )
}

function App() {
  const [position, setPosition] = useState(0)
  const [showFront, setShowFront] = useState(true)

  const pickNext = () => {
    let nextPosition = position
    while (nextPosition === position || nextPosition === 0) {
      nextPosition = Math.floor(Math.random() * DATA.length)
    }
    setPosition(nextPosition)

    setShowFront(true)
  }

  const flip = () => {
    setShowFront(!showFront)
  }

  const {image, title, album, lyrics} = DATA[position]

  return (
    <div className="App">
      <div onClick={flip}>
        {showFront ? (
          <PolaroidFront src={image}></PolaroidFront>
        ) : (
          <PolaroidBack title={title} album={album} lyrics={lyrics}></PolaroidBack>
        )}
      </div>
      <button onClick={pickNext}>Random</button>
    </div>
  );
}

export default App;
