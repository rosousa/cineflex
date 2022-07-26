import "./style.css";

export default function Movie({ id, title, poster }) {
  return (
    <div>
      <img className="poster" src={poster} alt="img" />
    </div>
  );
}
