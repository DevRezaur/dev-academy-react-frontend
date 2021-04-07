import styled from 'styled-components';
import { Button } from '../../globalStyles';

export const Card = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 100px auto;
    padding: 50px 50px;
    background-color: #101522;
    border-radius: 4px;

    @media screen and (max-width: 700px) {
        padding: 50px 25px;
    }
`;

export const CardTitle = styled.h1`
    margin-bottom: 50px;
    font-size: 32px;
    line-height: 1.1;
    color: #fff;
    text-align: center;

    @media screen and (max-width: 900px) {
        margin-bottom: 30px;
        font-size: 26px;
    }
`;

export const CardDesc = styled.p`
    color: #a9b3c1;
    font-size: 16px;
    line-height: 1.5;
    word-spacing: 3px;
    margin-bottom: 50px;
    text-align: center;
`;

export const PaymentForm = styled.form``;

export const Label = styled.label`
    color: #fff;
    font-size: 20px;
    line-height: 1.5;
    word-spacing: 3px;
    text-align: center;
`;

export const Input = styled.input`
    display: block;
    width: 100%;
    height: 30px;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 0.7rem;
    margin-bottom: 1.5rem;
`;

export const ButtonModified = styled(Button)`
    margin-top: 1rem;
`;