import "./style.css";
import stop from "../../assets/stop.svg";
import previous from "../../assets/previous.svg";
import pause from "../../assets/pause.svg";
import play from "../../assets/play.svg";
import next from "../../assets/next.svg";
import { musics } from "../../musics.js"

function Controls({ title, artist, urlMusic, duration, setMusicInfo, playPause, setPlayPause, audioRef, progressRef }) {
  let interval;

  async function handlePlayPauseMusic() {
    if (urlMusic) {

      interval = setInterval(() => {
        const duration = audioRef.current.duration / 60
        const currentTimePercent = ((audioRef.current.currentTime / 60) * 100) / duration

        if (audioRef.current.paused) {
          clearInterval(interval);
        }

        progressRef.current.style.width = `${currentTimePercent}%`;

        if (progressRef.current.style.width === "100%") {
          progressRef.current.style.width = "0%";
          clearInterval(interval);
        }
      }, 1000);

      if (playPause) {
        audioRef.current.play();
        setPlayPause(false);
      } else {
        audioRef.current.pause();
        setPlayPause(true);
      }
    }
  }

  function handleChangeMusic(btnControl) {
    const currentMusic = musics.find((music) => music.url === urlMusic);

    if (currentMusic) {
      if (btnControl === "previous") {
        let previuosMusic = musics.find((music) => music.id === currentMusic.id - 1);

        if (!previuosMusic) {
          previuosMusic = musics[musics.length - 1];
        }

        setMusicInfo({
          title: previuosMusic.title,
          artist: previuosMusic.artist,
          urlMusic: previuosMusic.url,
          duration: previuosMusic.duration
        })

        setPlayPause(true);
        progressRef.current.style.width = "0%";
      }

      if (btnControl === "next") {
        let nextMusic = musics.find((music) => music.id === currentMusic.id + 1);

        if (!nextMusic) {
          nextMusic = musics[0];
        }

        setMusicInfo({
          title: nextMusic.title,
          artist: nextMusic.artist,
          urlMusic: nextMusic.url,
          duration: nextMusic.duration
        })

        setPlayPause(true);
        progressRef.current.style.width = "0%";
      }
    }
  }

  function handleStopMusic() {
    if (urlMusic) {
      audioRef.current.currentTime = 0;

      audioRef.current.pause();

      setMusicInfo({
        title: "",
        artist: "",
        urlMusic: "",
        duration: "0:00"
      });

      progressRef.current.style.width = "0%"
      setPlayPause(false);
    }
  }

  return (
    <div className="container-controls">

      <div className="title-artist">
        <h3>{title}</h3>
        <p>{artist}</p>
      </div>

      <div className="bar-controls">
        <div className="controls">
          <img
            src={stop}
            alt="stop"
            className="buttom-control"
            onClick={handleStopMusic}
          />
          <img
            src={previous}
            alt="previous"
            className="buttom-control"
            onClick={() => handleChangeMusic("previous")}
          />
          <img
            src={playPause ? play : pause}
            alt="pause/play"
            className="buttom-control"
            onClick={handlePlayPauseMusic}
          />
          <img
            src={next}
            alt="next"
            className="buttom-control"
            onClick={() => handleChangeMusic("next")}
          />
        </div>
        <div className="container-bar">
          <span className="initial-number">0:00</span>

          <div className="progress-bar">
            <div ref={progressRef} className="progress">
              <div className="progress-ball"></div>
            </div>
          </div>

          <span className="final-number">{duration}</span>
        </div>
      </div>

      <div className="aux-div"></div>
    </div>
  )
}

export default Controls;