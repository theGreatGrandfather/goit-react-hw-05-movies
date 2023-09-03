import React from 'react'
import { Suspense } from "react";
import { Outlet } from 'react-router-dom';

import { Header, Container, Nav, NavItem, NavList, Link } from './Layout.styled';
import Loader from 'components/Loader/Loader';


function Layout() {
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
                <Suspense fallback={<Loader/>}>
                    <Outlet />
                </Suspense>
            </main>
        </>
    )
}

export default Layout
