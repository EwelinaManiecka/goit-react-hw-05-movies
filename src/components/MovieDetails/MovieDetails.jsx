import { Suspense, useRef } from 'react';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { fetchMoviesDetails } from 'Services/api';

import style from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    fetchMoviesDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return;
  }

  const {
    title,
    poster_path,
    oryginal_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = movie;
  return (
    <>
      <Link className={style.goBack} to={backLinkRef.current}>
        Go back
      </Link>
      <div className={style.container}>
        <div>
          <img
            className={style.img}
            src={
              movie.poster_path
                ? `https:www.themoviedb.org/t/p/w500/${poster_path}`
                : `https://www.banffventureforum.com/wp-content/uploads/2019/08/no-photo-icon-22.png`
            }
            alt={oryginal_title}
          />
        </div>
        <div>
          <h2 className={style.h2}>
            {title} ({release_date.slice(0, 5)})
          </h2>
          <p className={style.p}>Rating: {vote_average.toFixed(2)}</p>
          <h3 className={style.h3}>Overview</h3>
          <p className={style.p}>{overview}</p>
          <h3 className={style.h3}>Genres</h3>
          <p className={style.p}>{genres.map(genre => genre.name).join(' ')}</p>
        </div>
      </div>
      <div>
        <h2 className={style.h2}>Additional information</h2>
        <ul>
          <li>
            <Link className={style.link} to={'cast'}>
              Cast
            </Link>
          </li>
          <li>
            <Link className={style.link} to={'reviews'}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
