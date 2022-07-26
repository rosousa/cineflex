import { useEffect, useState } from "react";
import axios from "axios";

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

  console.log(days);

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
                      <div key={index} className="hour">
                        <p>{hour.name}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })
        : "Loading"}
    </div>
  );
}
