import React from 'react'

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

export default MowiesItem
