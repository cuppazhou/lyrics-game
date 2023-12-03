import React, { useState } from 'react';
import './App.css';

const DATA = [
  {
    title: "Exile",
    album: "Folklore",
    lyrics: "I think I've seen this film before\nAnd I didn't like the ending"
  },
]

function Polaroid() {
  const [showFront, setShowFront] = useState(true)
  const flip = () => {
    setShowFront(!showFront)
  }

  return (
    <div onClick={flip}>
      {showFront ? (
        <PolaroidFront src="Octocat.png"></PolaroidFront>
      ) : (
        <PolaroidBack title={DATA[0].title} album="Folklore" lyrics={DATA[0].lyrics}></PolaroidBack>
      )}
    </div>
  )
}

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
      <p>{title}</p>
      <p>{album}</p>
      <p className="lyrics">{lyrics}</p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Polaroid></Polaroid>
    </div>
  );
}

export default App;
