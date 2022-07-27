import "./style.css";

export default function Footer({ info }) {
  // console.log(info);
  return (
    <div className="footer">
      <div>
        <img src={info.posterURL} alt="Movie" />
      </div>
      <p>{info.title}</p>
    </div>
  );
}
