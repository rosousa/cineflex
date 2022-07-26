import MovieSchedule from "../MovieSchedule/MovieSchedule";

import "./style.css";

export default function MovieHour({ movieInfo, setTicket }) {
  return (
    <div className="content">
      <div>
        <div className="choose-time">
          <h2>Selecione o horário</h2>
        </div>
      </div>
      <MovieSchedule movieInfo={movieInfo} setTicket={setTicket} />
    </div>
  );
}
