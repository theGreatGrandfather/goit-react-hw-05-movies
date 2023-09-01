import React from 'react'
import PropTypes from 'prop-types'

import { Item, ItemLink, Img } from './MowiesItem.stuled'


function MowiesItem({ id, linkTo, state, title, originalName, img , img1}) {
    console.log('img :>> ', img);
    console.log('img1 :>> ', img1);
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

MowiesItem.propTypes = {}

export default MowiesItem
