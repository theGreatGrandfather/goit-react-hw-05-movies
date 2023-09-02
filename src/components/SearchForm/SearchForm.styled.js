import styled from "@emotion/styled";

export const Form = styled.form`
display: flex;
gap: 4px;
margin-top: 20px;
margin-bottom: 20px;

`
export const Input = styled.input`
display: flex;
padding: 12px;
border: 2px solid lightblue;
border-radius: 8px;
width: 300px;

`

export const Button = styled.button`
display: flex;
align-items: center;
justify-content: center;
padding: 12px;
border: 2px solid lightblue;
border-radius: 8px;
background-color: transparent;
transition: all 0.3s ease;
cursor: pointer;
&:hover,
&:focus{
    background-color: #3f51b5;
    border-color: #3f51b5;
}
`