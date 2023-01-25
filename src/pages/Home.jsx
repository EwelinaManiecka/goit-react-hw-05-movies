import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { fetchTrendingsMovies } from 'Services/api';

function Home() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTrendingsMovies().then(setMovies);
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
