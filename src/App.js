import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import MovieHour from "./components/MovieHour/MovieHour";

import "./assets/css/reset.css";
import "./assets/css/style.css";

function App() {
  const [movieInfo, setMovieInfo] = useState({});
  const [ticket, setTicket] = useState({});

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home setMovieInfo={setMovieInfo} />} />
        <Route
          path={`/filme/${movieInfo.id}`}
          element={<MovieHour movieInfo={movieInfo} setTicket={setTicket} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
