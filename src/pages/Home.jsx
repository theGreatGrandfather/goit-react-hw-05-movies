import React, {useEffect, useState } from 'react'
// import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'

import { getTrendingMovies } from '../components/Api'
import Section from 'components/Section/Section';
import MowiesList from '../components/MowiesList/MowiesList'


function Home() {
    const [moviesList, setMoviesList] = useState([])
        const location = useLocation();

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
        <Section
            title={'Top 20 movies'}
        >
            <MowiesList
                moviesList={moviesList}
                state={{ from: location }}
            >
                
            </MowiesList>
        </Section>
    )
}

// <MowiesList>
//                 {moviesList.map((movie) => (
            
//                 <li  key={movie.id}>
//                     <Link
//                         to={`movies/${movie.id}`}
//                         state={{ from: location }}
//                     >
//                         {movie.title || movie.original_name}
//                     </Link>
//                 </li>
            
//                 ))}
//             </MowiesList>
// Home.propTypes = {}

export default Home
