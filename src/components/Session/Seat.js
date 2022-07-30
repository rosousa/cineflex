import { useState } from "react";

export default function Seat({ seat, lista, assentos }) {
  const [selected, setSelected] = useState(false);

  seat.selected = selected;

  function SelectSeat() {
    if (seat.isAvailable && selected === false) {
      if (lista.includes(seat.id)) {
        lista[lista.indexOf(seat.id)] = undefined;
        assentos[assentos.indexOf(assentos.name)] = undefined;
      }

      return (
        <div
          className="seat-available"
          onClick={() => {
            setSelected(!selected);
          }}
        >
          <p>{seat.name}</p>
        </div>
      );
    } else if (seat.isAvailable && selected) {
      if (!lista.includes(seat.id)) {
        lista.push(seat.id);
        assentos.push(seat.name);
      }

      return (
        <div
          className="seat-selected"
          onClick={() => {
            setSelected(!selected);
          }}
        >
          <p>{seat.name}</p>
        </div>
      );
    }
    return (
      <div className="seat-unavailable">
        <p>{seat.name}</p>
      </div>
    );
  }

  return (
    <>
      <SelectSeat />
    </>
  );
}
