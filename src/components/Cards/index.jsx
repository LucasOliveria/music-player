import "./style.css";
import { musics } from "../../musics.js"

function Cards({ title, setMusicInfo, setPlayPause, progressRef }) {

  function handleMusicInfo(id) {
    const correspondingCard = musics.find((card) => card.id === id);

    if (title !== correspondingCard.title) {
      setMusicInfo({
        title: correspondingCard.title,
        artist: correspondingCard.artist,
        urlMusic: correspondingCard.url,
        duration: correspondingCard.duration
      });

      progressRef.current.style.width = "0%";
      setPlayPause(true);
    }

  }

  return (
    <main>
      <div className="container-play-list">
        <h2>The best play list</h2>

        <div className="line"></div>

        <div className="cards">
          {musics.map((music) => (
            <div
              className="card"
              key={music.id}
              onClick={() => handleMusicInfo(music.id)}
            >
              <img src={music.cover} alt="card music" />
              <h3>{music.title}</h3>
              <p className="description">
                {music.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Cards;