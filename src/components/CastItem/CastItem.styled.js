import styled from "@emotion/styled";

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    gap:8px;
    border: 2px solid lightblue;
    padding: 15px;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    flex-basis: calc((100% - 200px) / 6);

    
`
export const Img = styled.img`
    display: block;
    max-width: 100%;
    height: 100%;
    box-sizing: border-box;
`

export const Description = styled.p`
    display: block;
    margin: 0;
    text-align: center;

`
export const Name = styled.p`
    display: block;
    margin: 0;
    font-weight: 600;
    text-align:center;

`