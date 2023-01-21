import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { fetchTreadingsMovies } from 'Services/api';

import style from './MovieList.module.css';

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTreadingsMovies().then(setMovies);
  }, []);

  return (
    <>
      <h2>Treading today</h2>
      <ul>
        {movies.map(movie => (
          <li className={style.li} key={movie.id}>
            <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};
