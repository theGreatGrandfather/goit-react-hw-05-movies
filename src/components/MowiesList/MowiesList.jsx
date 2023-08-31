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

MowiesList.propTypes = {}

export default MowiesList
