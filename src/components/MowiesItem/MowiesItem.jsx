import React from 'react'

import { Item, ItemLink, Img, Title } from './MowiesItem.stuled'


function MowiesItem({ id, linkTo, state, title, originalName, img }) {

    return (
        <Item
            key={id}
        >
            <ItemLink
                to={linkTo}
                state={state}
            >
                <Img src={img !== null ?
                    `https://image.tmdb.org/t/p/w200${img}` :
                    'https://raw.githubusercontent.com/theGreatGrandfather/goit-react-hw-05-movies/main/public/background.jpg'
                } alt={title || originalName} />
                <Title>{title || originalName}</Title>
            </ItemLink>
        </Item>
    )
}

export default MowiesItem
