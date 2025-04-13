import React, { useState } from 'react';
import Gallery from './Gallery'; 

function App  () {
  const [tours, setTours] = useState([
    {
      id: 1,
      title: "Cruise",
      description: "Go on a 3-day cruise across Europe",
      price: "$200"
    },
    {
      id: 2,
      title: "Hike",
      description: "Hiking through the birght and sunny mountainside near the vineyards",
      price: "$100"
    },
  ]);

  const removeTour = (id) => {
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
  };

  return (
    <div className="App">
      <h1>Tour Gallery</h1>
      <Gallery tours={tours} onRemove={removeTour} />
    </div>
  );
};

export default App;
