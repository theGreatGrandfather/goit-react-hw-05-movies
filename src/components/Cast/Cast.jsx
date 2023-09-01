import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from '../Api';

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
            <ul>
                {(cast&&cast.length) ? cast.map((el) =>
                    <li key={el.cast_id}>
                        <img width={200} src={(el.profile_path) ?
                            `https://image.tmdb.org/t/p/w200${el.profile_path}` :
                            'https://raw.githubusercontent.com/theGreatGrandfather/goit-react-hw-05-movies/main/public/background.jpg'
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



export default Cast;