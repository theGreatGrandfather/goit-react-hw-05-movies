import React from 'react'
import PropTypes from 'prop-types'
import { ContentContainer,ContentWrapper, MovieImg, MovieTite, GenresContainer, MovieDescription, MovieSupTitle } from './MowieFomCollection.styled'

function MowieFomCollection({ title, img, average, overview, genres, movieData }) {
    return (
        <ContentWrapper>
            
            {movieData &&
                <MovieImg
                    src={ img }
                    alt={title}
            />}
            {movieData ?
                <ContentContainer>
                    <MovieTite>
                        {title}
                    </MovieTite>
                    <MovieDescription>
                        { `User Score: ${average}%`}
                    </MovieDescription> 
                    <MovieSupTitle>
                        Overview
                    </MovieSupTitle>
                    <MovieDescription>
                        {overview }
                    </MovieDescription> 
                    <MovieSupTitle>
                        Genres
                    </MovieSupTitle>
                    <GenresContainer>
                    {genres.map((el) =>
                        <MovieDescription
                            key={el}
                        >
                            {el}
                        </MovieDescription> 
                    )}
                    </GenresContainer>
                </ContentContainer> :
                <MovieSupTitle>Sorry no data</MovieSupTitle>}
        </ContentWrapper>
    )
}

MowieFomCollection.propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    average: PropTypes.number,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    movieData: PropTypes.object,
};
export default MowieFomCollection
