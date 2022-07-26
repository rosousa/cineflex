import { Link } from "react-router-dom";

import "./style.css";

export default function NavBar() {
  return (
    <Link to="/">
      <div className="header">
        <h1>CINEFLEX</h1>
      </div>
    </Link>
  );
}
