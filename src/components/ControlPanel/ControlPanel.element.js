import styled from 'styled-components';
import { Button } from '../../globalStyles';

export const Wrapper = styled.div`
    padding: 100px 0px;
`;

export const Heading = styled.h1`
    font-size: 32px;
    color: #101522;
    padding-bottom: 10px;
    margin-bottom: 35px;
    border-bottom: 2px solid #101522;

    @media screen and (max-width: 900px) {
        font-size: 26px;
    }
`;

export const SubTitle = styled.p`
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color:'#1c2237';
`;

export const StyledButton = styled(Button)`
    height: 50px;
`;

export const ButtonWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    column-gap: 25px;
    row-gap: 25px;
    text-align: center;

    @media screen and (max-width: 1100px) {
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: auto;
    }

    @media screen and (max-width: 700px) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto;
    }

    @media screen and (max-width: 300px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
    }
`;
