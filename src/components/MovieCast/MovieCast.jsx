import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMoviesCast } from 'Services/api';

import style from './MovieCast.module.css';

const MovieCast = () => {
  const [movieCast, setMovieCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMoviesCast(movieId).then(setMovieCast);
  }, [movieId]);

  if (!movieCast) {
    return;
  }

  return (
    <>
      <ul>
        {movieCast.map(actor => (
          <li key={actor.id}>
            <img
              className={style.img}
              src={
                actor.profile_path
                  ? `https://www.themoviedb.org/t/p/w500/${actor.profile_path}`
                  : `https://www.banffventureforum.com/wp-content/uploads/2019/08/no-photo-icon-22.png`
              }
              alt={actor.original_name}
            />
            <h4>{actor.name}</h4>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieCast;
