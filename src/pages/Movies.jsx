import React, { useEffect, useState } from 'react'
import { Link, useLocation, useSearchParams } from "react-router-dom";

import { getMoviesBySearch } from 'components/Api';
import SearchForm from 'components/SearchForm/SearchForm';




function Movies(props) {

    const [searchParams, setSearchParams] = useSearchParams();
    const pageQuery = searchParams.get("page") ?? '';
    const query = searchParams.get("query") ?? '';

    const [searchQuery, setSearchQuery] = useState('');
    const [page, setPage] = useState(null);
    const [searchResult, setSearchResult] = useState([]);
    const [totalPages, setTotalPages] = useState(null);

    const location = useLocation();
    
    useEffect(() => {
        const searchMovies = async () => {
            if (!query) {
                return
            }
            try {
                const resp = await getMoviesBySearch(query, pageQuery)
                console.log('searchResult :>> ', resp);
                setSearchResult(resp.results);
                setTotalPages(resp.total_pages)
                return
            } catch (error) {
                console.log('error :>> ', error);
            }
            
        } 
        searchMovies();

        return () => {
            setSearchResult([]);
            setSearchQuery(null);
            setTotalPages(null)
        }

    }, [pageQuery, query])

    const onInputChange = e => {
        e.preventDefault();
        setSearchQuery(e.currentTarget.value.toLowerCase());
    }

    const setQuery = e => {
        e.preventDefault();
        if (searchQuery.trim() === '') {
            return;
        }
        setSearchParams({ query: searchQuery, page:1 });
        setPage(1);
        e.target[0].value = '';
    }

    const onPrevNextBtnClick = (key) => {
        switch (key) {
            case 'prev':
                setPage(prevPage => Math.max(prevPage - 1, 1));
                setSearchParams({ query: query, page: page - 1 });
                break;
            case 'next':
                setPage(prevPage => prevPage + 1);
                setSearchParams({  query: query, page: page + 1 });
                break;
            default:
                break;
        }
    }

    console.log('location :>> ', location);

    return (
        <div>            
            <SearchForm
                setQuery={setQuery}
                onInputChange={onInputChange}
            />
            
            <ul>
                {searchResult.length ?
                    searchResult.map((el) =>
                        <li key={el.id}>
                            <Link
                                to={`${el.id}`}
                                state={{ from: location }}
                            >
                                {el.title || el.original_name}</Link>
                        </li>) :
                    <p>No movies by request {`'${query}'`} </p>
                }
            </ul>
            {totalPages && 
                <ul>
                    {pageQuery !== '1' &&
                        <li>
                            <button type='button' onClick={()=>onPrevNextBtnClick('prev')}>prev</button>
                        </li>}
                    {totalPages > pageQuery && totalPages !== pageQuery &&
                        <li>
                            <button type='button' onClick={() => onPrevNextBtnClick('next')}>next</button>
                    </li>}
                </ul>
            }
        </div>
    )
}

export default Movies
