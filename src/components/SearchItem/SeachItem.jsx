import React from 'react'
import PropTypes from 'prop-types'

import { Item, ItemLink, Img, Title } from '../MowiesItem/MowiesItem.stuled'

function SeachItem({id, img, title, to, state}) {
    return (
        <Item
            key={id}
        >
            <ItemLink
                to={to}
                state={state}
            >
                <Img  src={img} alt={title} />
                <Title>{title}</Title>
            </ItemLink>
        </Item>
    )
}

SeachItem.propTypes = {
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    to: PropTypes.string,
    state: PropTypes.object,
};

export default SeachItem
