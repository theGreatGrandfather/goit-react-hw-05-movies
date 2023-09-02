import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from '../Api';
import CastList from 'components/CastList/CastList';

function Cast() {
    const { movieId } = useParams();
    const [cast, setCast] = useState(null);
    
    useEffect(() => {
        const getCastData = async () => {
            try {
                const resp = await getCast(movieId);
                console.log('getCast :>> ', resp);
                setCast(resp.cast);
            } catch (error) {
                console.log('getCast :>> ', error);
            }
        };

        getCastData();

    }, [ movieId]);

    console.log('cast :>> ', cast);
    return (
        <div>
            {(cast&&cast.length) ?<CastList
                cast={cast}
            /> :
            <p>No data about cast </p>
            }
        </div>
    );
}



export default Cast;