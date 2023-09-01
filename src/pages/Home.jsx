import React, {useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

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
        trendingMovies();
    }, [])

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

export default Home
