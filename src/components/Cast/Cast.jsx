import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getCast } from '../Api';
import CastList from 'components/CastList/CastList';
import { useTurnError } from 'hooks/useTurnError';
import ErrorPage from 'components/404/ErrorPage';

function Cast() {
    const { movieId } = useParams();
    const [cast, setCast] = useState(null);
    const { error, on, off } = useTurnError(false);
    
    useEffect(() => {
        const getCastData = async () => {
            try {
                off(true)
                const resp = await getCast(movieId);
                setCast(resp.cast);
            } catch (error) {
                on(true)
            }
        };

        getCastData();

    }, [ movieId, on, off]);
    return (
        <div>
            {(cast&&cast.length) ?<CastList
                cast={cast}
            /> :
            <p>No data about cast </p>
            }
            {error&& <ErrorPage/>}
        </div>
    );
}



export default Cast;