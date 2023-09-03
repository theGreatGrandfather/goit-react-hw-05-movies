import React, { useEffect, useState } from 'react'
import { useLocation, useSearchParams } from "react-router-dom";

import { getMoviesBySearch } from 'components/Api';
import SearchForm from 'components/SearchForm/SearchForm';
import SearchList from 'components/SearchList/SeachList';
import Section from 'components/Section/Section';
import { Button } from 'components/SearchForm/SearchForm.styled';
import { useTurnError } from 'hooks/useTurnError';
import ErrorPage from 'components/404/ErrorPage';

function Movies() {

    const [searchParams, setSearchParams] = useSearchParams();
    const pageQuery = searchParams.get("page") ?? '';
    const query = searchParams.get("query") ?? '';

    const [searchQuery, setSearchQuery] = useState('');
    const [page, setPage] = useState(null);
    const [searchResult, setSearchResult] = useState([]);
    const [totalPages, setTotalPages] = useState(null);

    const location = useLocation();
    const { error, on, off } = useTurnError(false);
    
    useEffect(() => {
        const searchMovies = async () => {
            off(true)
            if (!query) {
                return
            }
            try {
                const resp = await getMoviesBySearch(query, pageQuery)
                setSearchResult(resp.results);
                setTotalPages(resp.total_pages)
                return
            } catch (error) {
                on(true)
            }
            
        } 
        searchMovies();

        return () => {
            setSearchResult([]);
            setSearchQuery('');
            setTotalPages(null)
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageQuery, query  ])

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
        off(true)
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

    return (
        <Section> 
            {error&& <ErrorPage/>}
            <SearchForm
                setQuery={setQuery}
                onInputChange={onInputChange}
            />
            <SearchList
                searchResult={searchResult}
                // to={`${searchResult.id}`}
                state={{ from: location }}
                query={`'${query}'`}
            />
            {totalPages && 
                <ul style={
                    {
                        display: 'flex',
                        gap: '8px'
                    }
                }>
                    {pageQuery !== '1' &&
                        <li>
                            <Button type='button' onClick={()=>onPrevNextBtnClick('prev')}>prev</Button>
                        </li>}
                    {totalPages > pageQuery && totalPages !== pageQuery &&
                        <li>
                            <Button type='button' onClick={() => onPrevNextBtnClick('next')}>next</Button>
                    </li>}
                </ul>
            }
            
        </Section>
    )
}

export default Movies
