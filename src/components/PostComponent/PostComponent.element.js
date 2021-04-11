import { ExternalLink } from 'react-external-link';
import styled from 'styled-components';

export const PostSection = styled.section`
    padding-bottom: 80px;
`;

export const Heading = styled.h1`
    margin-bottom: 50px;
    font-size: 42px;
    line-height: 1.1;
    color: #1c2237;
    text-align: center;

    @media screen and (max-width: 900px) {
        font-size: 36px;
    }
`;

export const PostBody = styled.div`
    background-color: #101522;
    color: #fff;
    border-radius: 4px;
    padding: 30px;
    margin-bottom: 1px;
`;

export const Title = styled.h3`
    margin-bottom: 24px;
    font-size: 32px;
    line-height: 1.1;
    color: #fff;

    @media screen and (max-width: 900px) {
        font-size: 26px;
    }
`;

export const Description = styled.p`
    color: #a9b3c1;
    font-size: 16px;
    line-height: 1.5;
    word-spacing: 3px;
    margin-bottom: 24px;
`;

export const ButtonGroup = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: 'LeftSection RightSection';
    row-gap: 25px;
    column-gap: 25px;
    margin: 30px 0 15px 0;

    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
        grid-template-areas: 'LeftSection' 
                            'RightSection';
    }
`;

export const ResourceSection = styled.div`
    grid-area: LeftSection;
    display: flex;
    flex-direction: column;
`;

export const ButtonSection = styled.div`
    grid-area: RightSection;
    display: flex;
    align-items: flex-end;

    @media screen and (min-width: 800px) {
        width: 100%;
        max-width: 400px;
        margin-left: auto;
    }
`;

export const Label = styled.p`
    margin-bottom: 5px;
`;

export const CustomLink = styled.a`
    text-decoration: none;
    color: #a9b3c1;
    font-weight: 900;
    width: fit-content;
`;

export const StyledExternalLink = styled(ExternalLink)`
    text-decoration: none;
    color: #fff;
    font-weight: 900;
`;