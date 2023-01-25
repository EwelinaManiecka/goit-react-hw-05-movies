import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { NavLink, useLocation } from 'react-router-dom';

import { fetchMoviesByQuery } from 'Services/api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams(query !== '' ? { query: form.elements.query.value } : {});
    form.reset();
  };

  useEffect(() => {
    if (query === '' || query === null) return;
    fetchMoviesByQuery(query).then(setMovies);
  }, [query]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query"></input>
        <button type="submit">Search</button>
      </form>
      {movies.length > 0 && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Movies;
