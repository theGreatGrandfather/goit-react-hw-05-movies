import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { getCast } from './Api';

function Cast(props) {
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
        <div>Cast
            <ul>
                {(cast&&cast.length) ? cast.map((el) =>
                    <li key={el.cast_id}>
                        <p>{el.name}</p>
                    </li>
                ) :
                <p>No data about cast </p>
                }
            </ul>
        </div>
    );
}

Cast.propTypes = {};

export default Cast;