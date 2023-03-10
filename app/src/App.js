import "./App.css";
import Btn from "./components/Btn";
import VideoBackground from "./components/VideoBackground";

function App() {
  return (
    <>
      <VideoBackground />
      <div className="hello-button-container ">
        <Btn />
      </div>
    </>
  );
}

export default App;
