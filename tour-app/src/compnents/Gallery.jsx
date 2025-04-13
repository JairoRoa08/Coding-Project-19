import React, { useState, useEffect } from 'react';
import TourCard from './TourCard'; // Adjust path if needed

function Gallery  ({ tours, onRemove })  {
  const [loading, setLoading] = useState(true);
  const [fetchedTours, setFetchedTours] = useState([]);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const res = await fetch('https://course-api.com/react-tours-project');
        const data = await res.json();
        setFetchedTours(data);
        setLoading(false);
      } catch (error) {
        console.error("Couldn't find selected tours:", error);
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  if (loading) {
    return <p>Loading tours...</p>;
  }

  return (
    <div className="gallery">
      {fetchedTours.map((tour) => (
        <TourCard
          key={tour.id}
          tour={tour}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default Gallery;
