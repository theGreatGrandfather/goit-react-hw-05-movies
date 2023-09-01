import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { getCast } from '../Api';

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
                        <img width={200} src={(el.profile_path) ?
                            `https://image.tmdb.org/t/p/w200${el.profile_path}` :
                            'https://basket-01.wb.ru/vol100/part10070/10070204/images/big/1.jpg'
                            } alt={el.name} />
                        <p>{el.name}</p>
                        <p>Character: {el.character}</p>
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