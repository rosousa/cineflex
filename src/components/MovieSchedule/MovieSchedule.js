import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "../Footer/Footer";

import "./style.css";

export default function MovieSchedule({ movieInfo, setTicket }) {
  const [days, setDays] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieInfo.id}/showtimes`
      )
      .catch((error) => {
        console.log(error);
      })
      .then((res) => {
        setDays({ ...res.data });
      });
  }, []);

  function updateTicket({ value, hour }) {
    setTicket({
      ...movieInfo,
      hour: hour.name,
      weekday: value.weekday,
      session: value.id,
    });
  }

  return (
    <div className="days-available">
      {days.days !== undefined
        ? days.days.map((value, index) => {
            return (
              <div key={index} className="schedule">
                <p>{`${value.weekday} - ${value.date}`}</p>
                <div className="time">
                  {value.showtimes.map((hour, index) => {
                    return (
                      <Link key={index} to={`/sessao/${value.id}`}>
                        <div
                          className="hour"
                          onClick={() => {
                            updateTicket({ value, hour });
                          }}
                        >
                          <p>{hour.name}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })
        : "Loading"}
      <Footer info={days} />
    </div>
  );
}
