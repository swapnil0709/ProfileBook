import "./Card.scss";
import { Link } from "react-router-dom";

function Cards({ Image, name, id }) {
  return (
    <div className="card">
      <img src={Image} alt="" />
      <h1>{name}</h1>
      <p>{id}</p>
      <Link to="/edit">
        <i
          className="material-icons editButton"
          onClick={() => {
            console.log(id);
          }}
        >
          edit
        </i>
      </Link>
    </div>
  );
}

export default Cards;
