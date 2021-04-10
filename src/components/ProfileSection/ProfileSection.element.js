import styled from 'styled-components';
import { Button } from '../../globalStyles';

export const Wrapper = styled.section`
    padding: 80px 0;
`;

export const Heading = styled.h1`
    text-align: center;
    margin-bottom: 24px;
    font-size: 42px;
    line-height: 1.1;
    color: ${({lightText}) => (lightText ? '#f7f8fa' : '#1c2237')};

    @media screen and (max-width: 900px) {
        font-size: 36px;
    }
`;

export const Image = styled.img `
    width: 100%;
    max-width: 300px;
    height: auto;
    display: block;
    margin: 0px auto 25px auto;
`;

export const StyledButton = styled(Button)`
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 25px;
`;

export const UserForm = styled.form`
    width: 100%;
    max-width: 700px;
    margin: 0px auto 30px auto;
`;

export const TopWarning = styled.p`
    font-size: 1.1rem;
    color: ${({failed}) => (failed ? 'red' : 'green')};
    text-align: center;
    margin: 25px 0;
`;

export const Warning = styled.p`
    font-size: 1rem;
    color: ${({failed}) => (failed ? 'red' : '#4b59f7')};
    margin: ${({failed}) => (failed ? '0 auto 1rem auto' : '0')};
`;

export const SubHeading = styled.p`
    font-size: 1rem;
    color: darkgray;
    margin: 1.5rem 0 0.5rem 0;
    text-align: left;
`;

export const InputBox = styled.input`
    width: 100%;
    height: 30px;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 0.7rem;
`;