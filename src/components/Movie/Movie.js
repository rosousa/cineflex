import { Link } from "react-router-dom";

import "./style.css";

export default function Movie({ movie, setMovieInfo }) {
  return (
    <Link to={`/filme/${movie.id}`}>
      <div onClick={() => setMovieInfo({ ...movie })}>
        <img className="poster" src={movie.posterURL} alt="img" />
      </div>
    </Link>
  );
}
