import React, { useState, useEffect } from 'react';
import TourCard from './TourCard';

function Gallery  ({ tours, onRemove })  {
  const [loading, setLoading] = useState(true);
  const [fetchedTours, setFetchedTours] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const res = await fetch('https://course-api.com/react-tours-project');
        if (!res.ok) throw new Error("Something went wrong while fetching tours.");
        const data = await res.json();
        setFetchedTours(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  if (loading) {
    return <p>Loading tours...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>Error: {error}</p>;
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
