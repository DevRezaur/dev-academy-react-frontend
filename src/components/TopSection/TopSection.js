import React, { useEffect, useState } from 'react';
import { Container } from '../../globalStyles';
import {
        TopSec,
        GridWrapper,
        LeftSection,
        TopLine,
        Heading,
        SubTitle,
        RightSection,
        Img } from './TopSection.element'

const TopSection = ({topLine, subtitle, img, alt}) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')));
        return () => setUser({});
    }, []);

    return (
        <>
            <TopSec>
                <Container>
                    <GridWrapper>
                        <LeftSection>
                            <TopLine>
                                {topLine}
                            </TopLine>
                            <Heading>
                                Hi, {user.fullname}
                            </Heading>
                            <SubTitle>
                                {subtitle}
                            </SubTitle>
                        </LeftSection>
                        <RightSection>
                            <Img src={img} alt={alt} />
                        </RightSection>
                    </GridWrapper>
                </Container>
            </TopSec>
        </>
    )
}

export default TopSection
