import React from 'react'
import PropTypes from 'prop-types'
import { Suspense } from "react";
import { Outlet } from 'react-router-dom';

import {DetaisWrapper, DetaisList, DetailsItem} from './DetailsInfo.styled'
import {ItemLink} from '../MowiesItem/MowiesItem.stuled'
import {MovieDescription} from '../MowieFomCollection/MowieFomCollection.styled'
import Loader from 'components/Loader/Loader';

function DetailsInfo({cast, reviews}) {
  return (
    <DetaisWrapper>
      <MovieDescription>
        Additionals information
      </MovieDescription>
      <DetaisList>
        <DetailsItem>
          <ItemLink to={cast}>
            Cast
          </ItemLink>
        </DetailsItem>
          <DetailsItem>
          <ItemLink to={reviews}>
            Reviews
          </ItemLink>
        </DetailsItem>
      </DetaisList>
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
    </DetaisWrapper>
  )
}

DetailsInfo.propTypes = {
  cast: PropTypes.string.isRequired,
  reviews: PropTypes.string.isRequired,
}

export default DetailsInfo
