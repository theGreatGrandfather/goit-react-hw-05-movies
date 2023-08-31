import React, { useEffect, useRef } from 'react'
import { Suspense } from "react";
// import PropTypes from 'prop-types'
import { Link, Outlet, useParams, useLocation } from 'react-router-dom'
import { useState } from 'react';

import { getMoviesById } from 'components/Api';

function MovieDetails() {
    const { movieId } = useParams();
    const [movieData, setMovieData] = useState('');

    const location = useLocation();
    const backLinkHref = useRef(location.state?.from ?? '/movies');

    console.log('location :>> ', location);

    useEffect(() => {
        const movieDetails = async () => {
            try {
                const resp = await getMoviesById(movieId);
                console.log('resp :>> ', resp);
                setMovieData(resp);

            } catch (error) {
                console.log('error :>> ', error);
            }
        }
        movieDetails();
    }, [movieId])
    

    return (
        <div>MovieDetails:
            <Link to={backLinkHref.current}>go back</Link>
            <div>
                {movieData.original_title}
            </div>
            <h2>info</h2>
            <ul>
                <li >
                    <Link
                        to='cast'
                    >
                        Cast
                    </Link>
                </li>
                <li >
                    <Link
                        to='reviews'
                    >
                        Reviews
                    </Link>
                </li>
            </ul>
            <main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </main>
        </div>
    )
}

// MovieDetails.propTypes = {}

export default MovieDetails
