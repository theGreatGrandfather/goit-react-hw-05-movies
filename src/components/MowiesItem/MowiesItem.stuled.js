import styled from "@emotion/styled";
import { Link } from 'react-router-dom'

export const Item = styled.li`
    display: flex;
    gap:20px;
    align-items: center;
    justify-content: center;
    flex-basis: calc((100% - 100px) / 5);

    
`

export const ItemLink = styled(Link)`
    display: flex;
    flex-direction: column;
    gap:10px;
    max-width: 200px;
    text-decoration: none;
    font-weight: 500;
    color: #111;
    white-space: normal;
    border: 2px solid #e7e7e7;
    border-radius: 8px;
    padding: 8px;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;
    margin-top: 20px;
    margin-bottom: 20px;
    &:hover,
    &:focus{
        transform: scale(1.1);
    }    
`

export const Img = styled.img`
    display: block;
    max-width: 100%;
    height: 100%;
    box-sizing: border-box;
`
export const Title = styled.p`
    display: block;
    text-align: center;
`