import axios from 'axios';

const KEY = `3686f3666c5a0ed623dc3fa0f4b660b5`;
axios.defaults.baseURL = `https://api.themoviedb.org/3`

export const getTrendingMovies = async () => {
    const response = await axios.get(`trending/all/day?language=en-US&api_key=${KEY}`);
    return response.data; 
}

export const getMoviesBySearch = async (searchQuery, page) => {
    const response = await axios.get(`search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=${page}&api_key=${KEY}`);
    console.log('searchQuery :>> ', searchQuery);
    return response.data; 
}

export const getMoviesById = async (id) => {
    const response = await axios.get(`movie/${id}?language=en-US&api_key=${KEY}`);
    return response.data; 
}

export const getCast = async (id) => {
    const response = await axios.get(`movie/${id}/credits?language=en-US&api_key=${KEY}`);
    return response.data; 
}

export const getRev = async (id) => {
    const response = await axios.get(`movie/${id}/reviews?language=en-US&api_key=${KEY}`);
    return response.data; 
}