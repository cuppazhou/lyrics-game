import './App.css';

function Polaroid({ src }) {
  return (
    <div className="polaroidOuter">
      <div className="polaroidInner">
        <img className="polaroidImg" src={src} />
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Polaroid src="Octocat.png"></Polaroid>
    </div>
  );
}

export default App;
