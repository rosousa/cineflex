import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "../Movie/Movie";

import "./style.css";

export default function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("https://mock-api.driven.com.br/api/v5/cineflex/movies")
      .catch((error) => {
        console.log(error);
      })
      .then((res) => {
        setMovies([...res.data]);
      });
  });

  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <Movie
          key={index}
          id={movie.id}
          title={movie.title}
          poster={movie.posterURL}
        />
      ))}
    </div>
  );
}
