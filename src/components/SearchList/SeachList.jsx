import React from 'react'
import PropTypes from 'prop-types'

import { List } from './SearchList.styled';
import SeachItem from 'components/SearchItem/SeachItem';

function SearchList({ searchResult, state }) {

    return (
        <>
            <List>
                {searchResult &&
                    searchResult.map((el) =>
                        <SeachItem
                            key={el.id}
                            to={`${el.id}`}
                            state={state}
                            img={el.poster_path !== null ?
                                `https://image.tmdb.org/t/p/w200${el.poster_path}` :
                                'https://raw.githubusercontent.com/theGreatGrandfather/goit-react-hw-05-movies/main/public/background.jpg'}
                            title={el.title || el.original_title}
                        >
                            
                        </SeachItem>) 
                    
                }
    
            </List>
        </>
    )
}

SearchList.propTypes = {
    searchResult: PropTypes.array,
    state: PropTypes.object,
};

export default SearchList
