import React, {useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { getTrendingMovies } from '../components/Api'
import Section from 'components/Section/Section';
import MowiesList from '../components/MowiesList/MowiesList'
import { useTurnError } from 'hooks/useTurnError';
import ErrorPage from 'components/404/ErrorPage';
import Loader from 'components/Loader/Loader';
import { useTurnLoader } from 'hooks/useTurnLoader';

function Home() {
    const [moviesList, setMoviesList] = useState([])
    const location = useLocation();
    const { error, on, off } = useTurnError(false);
    const { loading, toggleLoading } = useTurnLoader(false);

    useEffect(() => {
        
        const trendingMovies = async () => {
            
            try {
                toggleLoading(true);
                off(true);
                const resp = await getTrendingMovies();
                setMoviesList(resp.results);
                return
            } catch (error) {
                on(true)
            } finally {
                toggleLoading(false)
            }
        }   
        trendingMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            {loading && <Loader/>}
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
        </>
    )
}

export default Home
