import styled from 'styled-components';
import { Button } from '../../globalStyles';

export const Wrapper = styled.div`
    padding: 100px 0px;
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
