import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Seat from "./Seat";
import Footer from "../Footer/Footer";
import "./style.css";

export default function Session({ ticket, setTicket }) {
  const [seatStatus, setSeatStatus] = useState({});
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");

  const navigate = useNavigate();

  let lista = [];
  let assentos = [];

  useEffect(() => {
    axios
      .get(
        `https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${ticket.session}/seats`
      )
      .catch((error) => {
        console.log(error);
      })
      .then((res) => {
        setSeatStatus(res.data);
      });
  }, []);

  function compraBilhetes(e) {
    e.preventDefault();
    let ids = lista.filter((value) => value !== undefined);
    let assentosNum = assentos.filter((value) => value !== undefined);
    if (nome.length > 0 && ids.length > 0) {
      if (cpf.length === 11 && !isNaN(cpf)) {
        axios
          .post(
            "https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many",
            {
              ids: ids,
              name: nome,
              cpf: String(cpf),
            }
          )
          .catch((error) => {
            console.log(error);
          })
          .then((res) => {
            setTicket({ ...ticket, ids, cpf, nome, assentosNum });
            navigate("/sucesso");
          });
      }
    }
  }

  return (
    <div className="session">
      <div className="choose-seat">
        <h2>{`Selecione o(s) assento(s)`}</h2>
      </div>
      <div className="seats">
        <div>
          {seatStatus.seats === undefined
            ? ""
            : seatStatus.seats.map((value, index) => {
                return (
                  <Seat
                    seat={value}
                    key={index}
                    lista={lista}
                    assentos={assentos}
                  />
                );
              })}
        </div>
      </div>
      <div className="status">
        <div className="selected">
          <div></div>
          <p>Selecionado</p>
        </div>
        <div className="available">
          <div></div>
          <p>Disponível</p>
        </div>
        <div className="unavailable">
          <div></div>
          <p>Indisponível</p>
        </div>
      </div>
      <div className="forms">
        <form onSubmit={compraBilhetes}>
          <p>Nome do comprador:</p>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite seu nome..."
            required
          />
          <p>CPF do comprador:</p>
          <input
            type="number"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            placeholder="Digite seu CPF..."
            required
          />
          <Link to="/sucesso" onClick={compraBilhetes}>
            <button type="submit">Reservar Assento(s)</button>
          </Link>
        </form>
      </div>
      <Footer info={ticket} />
    </div>
  );
}
