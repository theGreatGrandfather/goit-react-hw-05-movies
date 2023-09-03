import React, {useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { getTrendingMovies } from '../components/Api'
import Section from 'components/Section/Section';
import MowiesList from '../components/MowiesList/MowiesList'
import { useTurnError } from 'hooks/useTurnError';
import ErrorPage from 'components/404/ErrorPage';


function Home() {
    const [moviesList, setMoviesList] = useState([])
    const location = useLocation();
    const { error, on, off } = useTurnError(false);

    useEffect(() => {
        const trendingMovies = async () => {
            try {
                off(true)
                const resp = await getTrendingMovies();
                setMoviesList(resp.results);
                return
            } catch (error) {
                on(true)
            }
        }   
        trendingMovies();
    }, [on, off])

    return (
        <Section
            title={'Top 20 movies'}
        >
            <MowiesList
                moviesList={moviesList}
                state={{ from: location }}
            >
                
            </MowiesList>
            {error&& <ErrorPage/>}
        </Section>
    )
}

export default Home
