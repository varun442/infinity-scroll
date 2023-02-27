import React from "react";

const UserCard = ({ id, ...card }) => {
  return (
    <div className="card grid-item">
      <img src={card.image} alt="John" style={{ width: "100%" }} />

      <h1 className="title">
        {card.firstName} {card.lastName}
      </h1>
    </div>
  );
};

export default UserCard;
