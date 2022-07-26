import Movies from "../Movies/Movies";
import "./style.css";

export default function Home({ setMovieInfo }) {
  return (
    <div className="home">
      <div className="choose-movie">
        <h2>Selecione o filme</h2>
      </div>
      <div className="movie-list">
        <Movies setMovieInfo={setMovieInfo} />
      </div>
    </div>
  );
}
