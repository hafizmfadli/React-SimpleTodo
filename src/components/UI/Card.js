import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-content">
      <h2>{props.title}</h2>
        {props.children}
      </div>
    </div>
  );
};

export default Card;
