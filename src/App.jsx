import React, { useState } from 'react';
import './App.css';

const DATA = [
  {
    image: "start_2.jpeg",
    title: "Good Luck!",
    album: "",
    lyrics: "Instructions:\nEach picture depicts lyrics from a T.S. song.\nTry to guess the lyrics, the song that it came from, and the album.\nClick to see the answer.",
  },
  {
    image: "exile.jpeg",
    title: "Exile",
    album: "Folklore",
    lyrics: "I think I've seen this film before\nAnd I didn't like the ending",
  },
  {
    image: "cruel_summer.jpeg",
    title: "Cruel Summer",
    album: "Lover",
    lyrics: "Devils roll the dice, angels roll their eyes\nWhat doesn't kill me makes me want you more",
  },
  {
    image: "look_what_you_made_me_do.jpeg",
    title: "Look What You Made Me Do",
    album: "Reputation",
    lyrics: "You asked me for a place to sleep\nLocked me out and threw a feast (what?)",
  },
  {
    image: "karma_1.jpeg",
    title: "Karma",
    album: "Midnights",
    lyrics: "Sweet like honey, karma is a cat\nPurring in my lap 'cause it loves me\nFlexing like a goddamn acrobat\nMe and karma vibe like that",
  },
  {
    image: "hits_different.jpeg",
    title: "Hits Different",
    album: "Midnights",
    lyrics: "I pictured you with other girls in love\nThen threw up on the street",
  },
  {
    image: "right_where_you_left_me.jpeg",
    title: "Right Where You Left Me",
    album: "Evermore",
    lyrics: "Help, I'm still at the restaurant\nStill sitting in a corner I haunt\nCross-legged in the dim light\nThey say, What a sad sight",
  },
  {
    image: "last_great_american_dynasty.jpeg",
    title: "The Last Great American Dynasty",
    album: "Folklore",
    lyrics: "And in a feud with her neighbor\nShe stole his dog and dyed it key lime green",
  },
  {
    image: "new_years_day.jpeg",
    title: "New Year's Day",
    album: "Reputation",
    lyrics: "There's glitter on the floor after the party\nGirls carrying their shoes down in the lobby\nCandle wax and Polaroids on the hardwood floor",
  },
  {
    image: "foolish_one.jpeg",
    title: "Foolish One",
    album: "Speak Now",
    lyrics: "Foolish one\nStop checkin' your mailbox for confessions of love\nThat ain't never gonna come",
  },
  {
    image: "now_that_we_dont_talk.jpeg",
    title: "Now That We Don't Talk",
    album: "1989",
    lyrics: "I don't have to pretend I like acid rock\nOr that I'd like to be on a mega yacht\nWith important men who think important thoughts",
  },
  {
    image: "cornelia_street.jpeg",
    title: "Cornelia Street",
    album: "Lover",
    lyrics: "I'd never walk Cornelia Street again\nWindows swung right open, autumn air\nJacket 'round my shoulders is yours\nWe bless the rains on Cornelia Street",
  },
  {
    image: "new_romantics.jpeg",
    title: "New Romantics",
    album: "1989",
    lyrics: "Cause baby, I could build a castle\nOut of all the bricks they threw at me\nAnd every day is like a battle\nBut every night with us is like a dream",
  },
  {
    image: "call_it_what_you_want.jpeg",
    title: "Call It What You Want",
    album: "Reputation",
    lyrics: "I want to wear his initial\nOn a chain 'round my neck, chain 'round my neck",
  },
  {
    image: "karma_0.jpeg",
    title: "Karma",
    album: "Midnights",
    lyrics: "Karma is the guy on the screen\nComing straight home to me",
  },
  {
    image: "blank_space.jpeg",
    title: "Blank Space",
    album: "1989",
    lyrics: "But I've got a blank space, baby\nAnd I'll write your name",
  },
  {
    image: "anti_hero.jpeg",
    title: "Anti-Hero",
    album: "Midnights",
    lyrics: "I'll stare directly at the sun but never in the mirror",
  },
  {
    image: "style.jpeg",
    title: "Style",
    album: "1989",
    lyrics: "You got that James Dean daydream look in your eye\nAnd I got that red lip classic thing that you like",
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

function PolaroidBack({ title, album, lyrics, visible}) {
  return (
    <div className="polaroidOuter">
      <div className="polaroidBack">
      {visible ? (
        <>
          <p className="lyrics">{lyrics}</p>
          <p className="title">{title}</p>
          <p className="album">{album}</p>
        </>
      ):<></>}
      </div>
    </div>
  )
}

function App() {
  const [position, setPosition] = useState(0)
  const [showFront, setShowFront] = useState(true)

  const pickNext = () => {
    setPosition((position + 1) % DATA.length)
    setShowFront(true)
  }

  const flip = () => {
    setShowFront(!showFront)
  }

  const flipped = {
    transform: 'rotateY(180deg)',
  }

  const {image, title, album, lyrics} = DATA[position]

  return (
    <div className="App">
      <div className="flip-card" onClick={flip}>
        <div className="flip-card-inner" style={showFront ? {} : flipped}>
          <div className="flip-card-front">
            <PolaroidFront src={"artwork/" + image}></PolaroidFront>
          </div>
          <div className="flip-card-back">
            <PolaroidBack title={title} album={album} lyrics={lyrics} visible={!showFront}></PolaroidBack>
          </div>
        </div>
      </div>
      <button onClick={pickNext} className="shuffle">Next</button>
    </div>
  );
}

export default App;
