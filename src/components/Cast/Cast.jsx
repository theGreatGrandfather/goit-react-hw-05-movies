import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getCast } from '../Api';
import CastList from 'components/CastList/CastList';
import { useTurnError } from 'hooks/useTurnError';
import ErrorPage from 'components/404/ErrorPage';
import Loader from 'components/Loader/Loader';
import { useTurnLoader } from 'hooks/useTurnLoader';

function Cast() {
    const { movieId } = useParams();
    const [cast, setCast] = useState(null);
    const { error, on, off } = useTurnError(false);
    const { loading, toggleLoading } = useTurnLoader(false);

    useEffect(() => {
        const getCastData = async () => {
            toggleLoading(true);
            try {
                
                off(true)
                const resp = await getCast(movieId);
                setCast(resp.cast);
            } catch (error) {
                on(true)
            }finally {
                toggleLoading(false)
            }
        };

        getCastData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ movieId]);
    return (
        <div>
            {loading && <Loader/>}
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