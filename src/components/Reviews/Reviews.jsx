import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { getRev } from '../Api';

function Reviews(props) {
    
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
    
    return (
        <div>Reviews
            <ul>
                {rev.length ? rev.map((el) =>
                    <li key={el.id}>
                        <p>{el.author}</p>
                    </li>
                ) :
                <p>No data about reviews </p>
                }
            </ul>
        </div>
    )
}

Reviews.propTypes = {}

export default Reviews
