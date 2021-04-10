import styled from 'styled-components';

export const Wrapper = styled.section`
    padding: 80px 0 150px 0;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 42px;
    line-height: 1.1;
    color: #1c2237;
    padding-bottom: 50px;
    text-align: center;

    @media screen and (max-width: 900px) {
        font-size: 36px;
    }
`;

export const SubHeading = styled.h3`
    margin: 10px 0;
    font-size: 18px;
    line-height: 24px;
    color: #1c2237;
`;

export const Paragraph = styled.p`
    font-size: 18px;
    line-height: 24px;
    color: #1c2237;
`;

export const Card = styled.div`
    background-color: #f5f5f5;
    border-bottom: 1px solid #101522;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr;
    column-gap: 50px;
    grid-template-areas: 'ImageBox Info';

    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        grid-template-areas: 'ImageBox'
                            'Info';
    }
`;

export const ImageBox = styled.div`
    grid-area: ImageBox;
    padding: 15px 25px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.img`
    width: 100%;
    max-width: 175px;
    height: auto;
`;


export const Info = styled.div`
    grid-area: Info;
    padding: 15px 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;