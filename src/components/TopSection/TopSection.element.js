import styled from 'styled-components';

export const TopSec = styled.div`
    padding: 160px 0px;
    background: #101522;
`;

export const GridWrapper = styled.div`
    display: grid;
    row-gap: 100px;
    column-gap: 100px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: 'LeftSection RightSection';
    
    @media screen and (max-width: 900px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
        grid-template-areas: 'RightSection' 
                            'LeftSection';
    }
`;

export const LeftSection = styled.div`
    grid-area: LeftSection;
`;

export const TopLine = styled.div`
    color: #89b3c1;
    font-size: 18px;
    line-height: 16px;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 42px;
    line-height: 1.1;
    color: #f7f8fa;

    @media screen and (max-width: 900px) {
        font-size: 36px;
    }
`;

export const SubTitle = styled.p`
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: #a9b3c1;
`;

export const RightSection = styled.div`
    grid-area: RightSection;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Img = styled.img`
    width: 95%;
    max-width: 500px;
    height: auto;
`;