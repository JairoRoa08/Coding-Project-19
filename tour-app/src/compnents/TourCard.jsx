// Imports
import React, { useState } from "react";
// Tour Card info
const TourCard = ({ id, name, info, price, image, onRemove }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="tour-card">
      <img src={image} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{readMore ? info : `${info.substring(0, 100)}...`}</p>
        <button onClick={() => setReadMore(!readMore)}>
          {readMore ? "Show Less" : "Read More"}
        </button>
        <p className="price">${price}</p>
        <button onClick={() => onRemove(id)}>Not Interested</button>
      </div>
    </article>
  );
};
// Exports
export default TourCard;


