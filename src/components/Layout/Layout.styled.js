import styled from '@emotion/styled'
import { NavLink } from "react-router-dom";

export const Header = styled.header`
    top: 0;
    left: 0;
    position: sticky;
    z-index: 1100;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 74px;
    padding-right: 24px;
    padding-left: 24px;
    padding-top: 12px;
    padding-bottom: 12px;
    color: #fff;
    background-color: #3f51b5;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`

export const Container = styled.div`
    width: 97%;
	flex-basis: calc((100vw - 100px) / 1);
	margin: 0px auto;
	padding: 0px 10px;
`

export const Nav = styled.nav`

`
export const NavList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;
    gap: 10vw;
    padding: 8px 16px;
    color: #fff;
    font-family: inherit;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.29;
    letter-spacing: -0.56px;
    text-transform: uppercase;
`
export const NavItem = styled.li`
    list-style: none;
	display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    // height: 100%;
    padding: 12px 15px 12px;
    border: 0;
    line-height: 1.15;
    font-weight: 400;
    text-align: center;
    font-size: 14px;
	transition: all 0.3s ease;
    flex-direction: column;
`
export const Link = styled(NavLink)`
    color: white;
    font-weight: 700;
    font-size: 20px;
	text-decoration: none;
	transition: all 0.3s ease;
	&:hover,
	&:focus {
		color:yellow;
		outline: none;
	}
`