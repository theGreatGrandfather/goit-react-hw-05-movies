import axios from 'axios';

const KEY = `3686f3666c5a0ed623dc3fa0f4b660b5`;
axios.defaults.baseURL = `https://api.themoviedb.org/3`
// const searchQuery = '';


export const getTrendingMovies = async () => {
    const response = await axios.get(`trending/all/day?language=en-US&api_key=${KEY}`);
    return response.data; 
}


export const getMoviesBySearch = async (searchQuery) => {
    const response = await axios.get(`search/movie?language=en-US&api_key=${KEY}&query=${searchQuery}`);
    return response.data; 
}

export const getMoviesById = async (id) => {
    const response = await axios.get(`movie/${id}?language=en-US&api_key=${KEY}`);
    return response.data; 
}