import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { getRev } from '../Api';
import { useTurnError } from 'hooks/useTurnError';
import ErrorPage from 'components/404/ErrorPage';

function Reviews() {
    
    const { movieId } = useParams();
    const [rev, setRev] = useState([])
    const { error, on, off } = useTurnError(false);

    useEffect(() => {
        const getRevData = async () => {
            try {
                off(true);
                const resp = await getRev(movieId);
                setRev(resp.results);
            } catch (error) {
                on(true);
            }
        }
        
        getRevData();
    }, [movieId, on, off])
 
    return (
        <div>
            <ul>
                {rev.length ? rev.map((el) =>
                    <li key={el.id}>
                        <p><b>Aithor: {el.author}</b></p>
                        <p>{ el.content}</p>
                    </li>
                ) :
                <p>No data about reviews </p>
                }
            </ul>
            {error&& <ErrorPage/>}
        </div>
    )
}

export default Reviews
