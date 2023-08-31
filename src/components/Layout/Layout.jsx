import React from 'react'
import { Suspense } from "react";



// import PropTypes from 'prop-types'
import { NavLink, Outlet } from "react-router-dom";
import { Header, Container, Nav, NavItem, NavList, Link } from './Layout.styled';

function Layout(props) {
    return (
        <>
            <Header>
                <Container>
                    <Nav>
                        <NavList>
                            <NavItem>
                                <Link to='/'>Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link to='/movies'>Movies</Link>
                            </NavItem>
                        </NavList>
                    </Nav>
                </Container>
            </Header>
            <main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </main>
        </>
    )
}

export default Layout
