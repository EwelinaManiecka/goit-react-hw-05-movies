import axios from 'axios';

const KEY = '95f52d61b01969a69153f9d8a2d4bb9b';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrendingsMovies = async () => {
  const url = `trending/movie/day?api_key=${KEY}`;

  const response = await axios.get(url);
  return response.data.results;
};

export const fetchMoviesByQuery = async query => {
  const url = `search/movie?api_key=${KEY}&query=${query}`;

  const response = await axios.get(url);
  return response.data.results;
};

export const fetchMoviesDetails = async id => {
  const url = `movie/${id}?api_key=${KEY}`;

  const response = await axios.get(url);
  return response.data;
};

export const fetchMoviesCast = async id => {
  const url = `movie/${id}/credits?api_key=${KEY}`;

  const response = await axios.get(url);
  return response.data.cast;
};

export const fetchMoviesReviews = async id => {
  const url = `movie/${id}/reviews?api_key=${KEY}`;

  const response = await axios.get(url);
  return response.data.results;
};
