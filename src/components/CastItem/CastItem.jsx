import React from 'react'

import {Item, Img, Description, Name} from './CastItem.styled'

function CastItem({id, name, img, character}) {
    return (
        <Item
            key={id}
        >
            <Img  width={160} src={(img) ?
                `https://image.tmdb.org/t/p/w200${img}` :
                'https://raw.githubusercontent.com/theGreatGrandfather/goit-react-hw-05-movies/main/public/background.jpg'
                } alt={name}/>
            <Name>
                {name}
            </Name>
            <Description>
                {character}
            </Description>
        </Item>
    )
}

export default CastItem
