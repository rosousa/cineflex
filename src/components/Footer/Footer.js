import "./style.css";

export default function Footer({ info }) {
  // console.log(info);
  return (
    <div className="footer">
      <div>
        <img src={info.posterURL} alt="Movie" />
      </div>
      <span>
        <p>{info.title}</p>
        {info.weekday !== undefined ? (
          <p>
            {info.weekday} - {info.hour}
          </p>
        ) : (
          ""
        )}
      </span>
    </div>
  );
}
