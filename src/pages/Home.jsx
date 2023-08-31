import React, {useEffect, useState} from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { getTrendingMovies } from '../components/Api'


function Home() {
    const [moviesList, setMoviesList] = useState([])
    
    useEffect(() => {
        const trendingMovies = async () => {
            try {
                const resp = await getTrendingMovies();
                setMoviesList(resp.results);
                return
            } catch (error) {
                console.log('error :>> ', error);
            }
        }   
        // return () => {
        // second
        // }
        trendingMovies();
    }, [])
    console.log('moviesList :>> ', moviesList);

    return (
        <div>
            <ul>
                {moviesList.map((movie) => (
            
                <li  key={movie.id}>
                    <Link
                        to={`movies/${movie.id}`}
                    >
                        {movie.title || movie.original_name}
                    </Link>
                </li>
            
            ))}</ul>
        </div>
    )
}

// Home.propTypes = {}

export default Home
