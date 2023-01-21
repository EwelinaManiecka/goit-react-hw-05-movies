import axios from "axios";

const KEY = "95f52d61b01969a69153f9d8a2d4bb9b";
const BASE_URL = "https://api.themoviedb.org/3/";

export const fetchTreadingsMovies = async() => {
    const url = `${BASE_URL}treading/movie/day?api_key=${KEY}`;

    const {data} = await axios.get(url);
    return data;
};

export const fetchMoviesByQuery = async(query) => {
    const url = `${BASE_URL}search/movie?api_key=${KEY}&query=${query}`;

    const {data} = await axios.get(url);
    return data;
};

export const fetchMoviesDetails = async(id) => {
    const url = `${BASE_URL}movie/${id}?api_key=${KEY}`;

    const {data} = await axios.get(url);
    return data;
};

export const fetchMoviesCast = async(id) => {
    const url = `${BASE_URL}movie/${id}/credits?api_key=${KEY}`;

    const {data} = await axios.get(url);
    return data;
};

export const fetchMoviesReviews = async(id) => {
    const url = `${BASE_URL}movie/${id}/reviews?api_key=${KEY}`;

    const {data} = await axios.get(url);
    return data;
};

const api = {
    fetchTreadingsMovies,
    fetchMoviesByQuery,
    fetchMoviesDetails,
    fetchMoviesCast,
    fetchMoviesReviews,
}

export default api;