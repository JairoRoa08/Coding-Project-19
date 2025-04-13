import React, { useState } from 'react';

function TourCard  ({ tour, onRemove })  {
  const { id, name, info, price, image } = tour;
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="tour-card">
      <img src={image} alt={name} style={{ width: "100%", borderRadius: "8px" }} />
      <div className="tour-info">
        <h2>{name}</h2>
        <h4>{price}</h4>
        <p>
          {readMore ? info : `${info.substring(0, 100)}... `}
          <button onClick={() => setReadMore(!readMore)} style={{ color: "blue", border: "none", background: "none" }}>
            {readMore ? "Show Less" : "Read More"}
          </button>
        </p>
        <button onClick={() => onRemove(id)} style={{ backgroundColor: "red", color: "white", padding: "0.5rem 1rem", border: "none", borderRadius: "4px" }}>
          Not Interested
        </button>
      </div>
    </div>
  );
};

export default TourCard;
