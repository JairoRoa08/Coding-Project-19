// Imports
import React, { useEffect, useState } from "react";
import TourCard from "./TourCard";
// Gallaery Const
const Gallery = () => {
  const [tourData, setTourData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
// Fetch requirement
  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/react-tours-project");
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      setTourData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };
// Use effect requirement
  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    setTourData(tourData.filter((tour) => tour.id !== id));
  };
// Error Handling
  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <section className="gallery">
      {tourData.map((tour) => (
        <TourCard key={tour.id} {...tour} onRemove={removeTour} />
      ))}
    </section>
  );
};
// Exports
export default Gallery;
