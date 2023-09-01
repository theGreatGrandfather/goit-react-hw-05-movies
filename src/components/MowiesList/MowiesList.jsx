import React from 'react'
import PropTypes from 'prop-types'

import {List} from './MowiesList.styled'
import MowiesItem from '../MowiesItem/MowiesItem'

function MowiesList({ moviesList, state }) {
    console.log('moviesList :>> ', moviesList);
    return (
        <List
        
        >
            {moviesList.map((movie) => (
            
                <MowiesItem
                    key={movie.id}
                    id={movie.id}
                    linkTo={`movies/${movie.id}`}
                    state={state}
                    title={movie.title}
                    originalName={movie.original_name}
                    img={movie.poster_path}
                    img1={movie.backdrop_path}
                />
            
                ))}
        </List>
    )
}

MowiesList.propTypes = {
    moviesList: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        original_name: PropTypes.string.isRequired,
        poster_path: PropTypes.string.isRequired,
        backdrop_path: PropTypes.string.isRequired,
        })
    ).isRequired,
    state: PropTypes.object.isRequired,
};

export default MowiesList
