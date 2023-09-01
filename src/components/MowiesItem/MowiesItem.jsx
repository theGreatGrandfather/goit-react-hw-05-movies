import React from 'react'
import PropTypes from 'prop-types'

import { Item, ItemLink, Img } from './MowiesItem.stuled'


function MowiesItem({ id, linkTo, state, title, originalName, img }) {

    return (
        <Item
            key={id}
        >
            <ItemLink
                to={linkTo}
                state={state}
            >
                <Img  src={
                    `https://image.tmdb.org/t/p/w200${img}`
                } alt="" />
                {title || originalName}
            </ItemLink>
        </Item>
    )
}

MowiesItem.propTypes = {
    id: PropTypes.number.isRequired,
    linkTo: PropTypes.string.isRequired,
    state: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    originalName: PropTypes.string,
    img: PropTypes.string.isRequired,
};

export default MowiesItem
