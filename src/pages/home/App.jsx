import './App.css';
import Header from "../../components/Header"
import Cards from '../../components/Cards';
import Controls from '../../components/Controls';
import { useState, useRef } from 'react';

function App() {
  const [musicInfo, setMusicInfo] = useState({
    title: "",
    artist: "",
    urlMusic: "",
    duration: "0:00"
  });
  const [playPause, setPlayPause] = useState(false);
  const [timer, setTimer] = useState("0:00")

  const audioRef = useRef(null);
  const progressRef = useRef(null);

  return (
    <div className="container-main">
      <Header />

      <Cards
        title={musicInfo.title}
        setMusicInfo={setMusicInfo}
        setPlayPause={setPlayPause}
        progressRef={progressRef}
        setTimer={setTimer}
      />

      <Controls
        title={musicInfo.title}
        artist={musicInfo.artist}
        urlMusic={musicInfo.urlMusic}
        musicInfoDuration={musicInfo.duration}
        setMusicInfo={setMusicInfo}
        playPause={playPause}
        setPlayPause={setPlayPause}
        audioRef={audioRef}
        progressRef={progressRef}
        timer={timer}
        setTimer={setTimer}
      />

      <audio ref={audioRef} src={musicInfo.urlMusic}></audio>
    </div>
  )
}

export default App
