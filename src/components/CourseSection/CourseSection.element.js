import styled from 'styled-components';

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 42px;
    line-height: 1.1;
    color: #1c2237;
    padding-top: 100px;
    padding-bottom: 50px;
    text-align: center;

    @media screen and (max-width: 900px) {
        font-size: 36px;
    }
`;

export const CardWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    column-gap: 25px;
    row-gap: 50px;
    padding-bottom: 160px;
    text-align: center;

    @media screen and (max-width: 1100px) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto;
    }

    @media screen and (max-width: 700px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
    }
`;

export const Card = styled.div`
    width: 100%;
    max-width: 350px;
    background: #101522;
    color: #fff;
    border: 2px solid #101522;
    border-radius: 6px;
    margin: 0px auto;
`;

export const CardImage = styled.img`
    width: 100%;
    height: 200px;
`;

export const TextWrapper = styled.div`
    padding: 30px 30px 50px 30px;
`;

export const CardTitle = styled.p`
    font-size: 28px;
`;

export const CardDesc = styled.p`
    color: #a9b3c1;
    font-size: 18px;
    line-height: 1.5;
    word-spacing: 3px;
    margin: 30px 0;
    text-align: left;
`;