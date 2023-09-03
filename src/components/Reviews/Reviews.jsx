import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { getRev } from '../Api';
import { useTurnError } from 'hooks/useTurnError';
import ErrorPage from 'components/404/ErrorPage';
import { useTurnLoader } from 'hooks/useTurnLoader';
import Loader from 'components/Loader/Loader';

function Reviews() {
    
    const { movieId } = useParams();
    const [rev, setRev] = useState([])
    const { error, on, off } = useTurnError(false);
    const { loading, toggleLoading } = useTurnLoader(false);

    useEffect(() => {
        const getRevData = async () => {
            toggleLoading(true)
            try {
                off(true);
                const resp = await getRev(movieId);
                setRev(resp.results);
            } catch (error) {
                on(true);
            }finally {
                toggleLoading(false)
            }
        }
        
        getRevData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [movieId])
 
    return (
        <>
            {loading && <Loader/>}
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
        </>
    )
}

export default Reviews
