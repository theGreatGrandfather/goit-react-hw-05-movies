import React from 'react'
import PropTypes from 'prop-types'

import { List } from './CastList.styled'
import CastItem from 'components/CastItem/CastItem'

function CastList({ cast }) {
    return (
        <List>        
                {cast.map((el) => (
                    <CastItem
                        key={el.id}
                        img={el.profile_path}
                        character={el.character}
                        name={el.name}
                    />
                ))}
                
        </List>
    )
}

CastList.propTypes = {
    cast: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired, 
        profile_path: PropTypes.string, 
        character: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired, 
    })).isRequired, 
};

export default CastList
