import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getRev } from '../Api';

function Reviews() {
    
     const { movieId } = useParams();
    const [rev, setRev] = useState([])

    useEffect(() => {
        const getRevData = async () => {
            try {
                const resp = await getRev(movieId);
                setRev(resp.results);
                console.log('rev :>> ', resp.results);
            } catch (error) {
                console.log('error :>> ', error);
            }
        }
        
        getRevData();
    }, [movieId])
    console.log('rev :>> ', rev);
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
        </div>
    )
}

export default Reviews
