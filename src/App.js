import "./App.css";
import imageInSrc from "./imageInSrc.png";
import "./style.css";

function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">Kais fullstack student - gomycode</h1>
        <br />
        <img src={imageInSrc} />
        <br />
        <img src="/imageInPublic.png" />
      </div>
      <video width={320} height={240} controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
