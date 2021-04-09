import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Source Sans Pro', sans-serif;
    }

    html {
        width: 100%;
    }

    body {
        width: 100%;
        overflow-x: hidden;
        scroll-behavior: smooth;
    }
`;

export const Container = styled.div`
    width: 100%;
    max-width: 1300px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 60px;
    padding-right: 60px;

    @media screen and (max-width: 900px) {
        padding-left: 30px;
        padding-right: 30px;
    }
`;

export const Button = styled.button`
    color: #fff;
    background: ${({primary}) => (primary ? '#4b59f7' : '#0467fb')};
    background: ${({danger}) => (danger ? 'red' : '')};
    font-size: ${({fontBig}) => (fontBig ? '22px' : '16px')};
    padding: ${({big}) => (big ? '12px 64px' : '10px 20px')};
    width: ${({fullWidth}) => (fullWidth ? '100%' : '')};
    border-radius: 4px;
    white-space: nowrap;
    outline: none;
    border: none;
    cursor: pointer;

    &:hover {
        transition: all 0.3s ease-out;
        background: ${({primary}) => (primary ? '#0467fb' : '#4b59f7')};
        background: ${({danger}) => (danger ? 'red' : '')};
    }

    @media screen and (max-width: 900px) {
        width: 100%;
        font-size: ${({fontBig}) => (fontBig ? '18px' : '16px')};
        padding: ${({big}) => (big ? '12px 14px' : '10px 12px')};
    }
`;

export default GlobalStyle