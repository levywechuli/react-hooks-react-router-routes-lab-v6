import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Simulate fetching movie data based on ID
    const fetchMovie = async () => {
      const movieData = {
        1: { title: "Movie Title", time: "120 mins", genres: ["Action", "Drama"] },
      };
      setMovie(movieData[id]);
    };

    fetchMovie();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.time}</p>
      {movie.genres.map((genre, index) => (
        <span key={index}>{genre}</span>
      ))}
    </div>
  );
}

export default Movie;