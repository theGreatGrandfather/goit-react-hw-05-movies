import React, { useEffect, useRef } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { useState } from 'react';

import { getMoviesById } from 'components/Api';
import Section from '../components/Section/Section'
import MowieFomCollection from 'components/MowieFomCollection/MowieFomCollection';
import {ItemLink} from '../components/MowiesItem/MowiesItem.stuled'
import DetailsInfo from 'components/DetailsInfo/DetailsInfo';

function MovieDetails() {
    const { movieId } = useParams();
    const [movieData, setMovieData] = useState('');

    const location = useLocation();
    const backLinkHref = useRef(location.state?.from ?? '/movies');

    const [title, setTitle] = useState('');
    const [img, setImg] = useState('');
    const [average, setAverage] = useState('');
    const [overview, setOverview] = useState('');
    const [genres, setGenres] = useState([]);
    console.log('movieData :>> ', movieData);
    
    useEffect(() => {
        const movieDetails = async () => {
            try {
                const resp = await getMoviesById(movieId);
                console.log('resp :>> ', resp);


                setMovieData(resp);
                setTitle(resp.title);
                setImg((resp.poster_path) ?
                    `https://image.tmdb.org/t/p/w300${resp.poster_path}` :
                    'https://raw.githubusercontent.com/theGreatGrandfather/goit-react-hw-05-movies/main/public/background.jpg');
                setAverage(Number.parseInt(`${resp.vote_average * 10}`));
                setOverview(resp.overview);
                setGenres(resp.genres.map((el) =>
                    el.name));
                
            } catch (error) {
                console.log('error :>> ', error);
            }
        }
        movieDetails();
    }, [movieId])
    
    return (
        <>
            <Section>
                <ItemLink to={backLinkHref.current}>go back</ItemLink>
                <MowieFomCollection
                    title={title}
                    img={img}
                    average={average}
                    overview={overview}
                    genres={genres}
                    movieData={movieData}
                >
                
                </MowieFomCollection>
            </Section >
            <Section>
                <DetailsInfo
                    cast={'cast'}
                    reviews={'reviews'}
                >

                </DetailsInfo>
            </Section>    
        </>
    )
}

export default MovieDetails
