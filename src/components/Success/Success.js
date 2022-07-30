import "./style.css";

export default function Success({ ticket }) {
  return (
    <div className="successPage">
      <div className="order-complete">
        <h2>Pedido feito com sucesso!</h2>
      </div>
      <div className="details">
        <div className="movieSession">
          <p>Filme e sessão</p>
          <div>
            <p>{ticket.title}</p>
            <p>
              {ticket.date} {ticket.hour}
            </p>
          </div>
        </div>
        <div className="ticket">
          <p>Ingressos</p>
          <div>
            {ticket.assentosNum.map((value, index) => {
              return <p key={index}>Assento {value}</p>;
            })}
          </div>
        </div>
        <div className="buyer">
          <p>Comprador</p>
          <div>
            <p>Nome: {ticket.nome}</p>
            <p>CPF: {ticket.cpf}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
