import React from "react";
import "./style.css";

// name, image,   fn(cardRemove)
function FriendCard(props) {

  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li>
          <li>
            <strong>Employee Hire Year:</strong> {props.startYear}
          </li>

        </ul>
      </div>
    </div>
  );
}

export default FriendCard;
