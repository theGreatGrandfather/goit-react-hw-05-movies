import React from 'react';
import PropTypes from 'prop-types';

import { SectionElemet, Container, Title } from './Section.styled';

const Section = ({title, children}) => {

    return (
        <SectionElemet>
            <Container>
                {title && <Title>
                    {title}
                </Title>}
                    {children}
            </Container>
        </SectionElemet>
    )
}

Section.propTypes = {
    title: PropTypes.string,
    // children: PropTypes.element
}

export default Section