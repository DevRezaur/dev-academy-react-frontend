import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../../globalStyles';

export const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas: "left-section"
                        "right-section";
    row-gap: 60px;
    column-gap: 40px;
    @media screen and (min-width: 800px) {
        grid-template-columns: 1fr 1fr;
        grid-template-areas: "left-section right-section";
    }
`;

export const LeftSection = styled.div`
    grid-area: "left-section";
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 350px;
    margin-top: 60px;

    @media screen and (min-width: 800px) {
        min-height: 750px;
    }
`;

export const RightSection = styled.div`
    grid-area: "right-section";
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-height: 350px;
    margin-bottom: 90px;

    @media screen and (min-width: 800px) {
        min-height: 750px;
        justify-content: center;
    }
`;

export const Image = styled.img`
    width: 100%;
    max-width: 500px;
    height: auto;
`;

export const Heading = styled.h1`
    font-size: 2rem;
    color: #252a2e;
    margin-bottom: 0.3em;
`;

export const SubHeading = styled.p`
    font-size: 1rem;
    color: darkgray;
    margin:${({center}) => (center ? '1.5rem auto 0.5rem auto' : '1.5rem 0 0.5rem 0')};
`;

export const InputBox = styled.input`
    height: 30px;
    padding-left: 10px;
    padding-right: 10px;
`;

export const ButtonModified = styled(Button)`
    margin: 2rem 0px 0px 0px;
    width: 100%;
`;

export const TextLink = styled(Link)`
    color: #101522;
    text-decoration: none;
    margin: 0 5px;
    font-weight: 600;

    &:hover {
        color: darkgrey;
    }
`;