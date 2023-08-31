import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { useState } from 'react';

import { getMoviesById } from 'components/Api';

function MovieDetails() {
    const { movieId } = useParams();

    const [movieData, setMovieData] = useState('');
    
    console.log('movieId :>> ', movieId);

    useEffect(() => {
        const movieDetails = async () => {
            try {
                const resp = await getMoviesById(movieId);
                console.log('resp :>> ', resp);
                setMovieData(resp)
            } catch (error) {
                console.log('error :>> ', error);
            }
        }
    
    //   return () => {
    //     second
    //   }
        movieDetails();
    }, [movieId])
    

    return (
        <div>MovieDetails:
            <div>
                {movieData.original_title}
            </div>
        </div>
    )
}

MovieDetails.propTypes = {}

export default MovieDetails
