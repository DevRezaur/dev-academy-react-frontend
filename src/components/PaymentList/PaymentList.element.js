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

export const PaymentTable = styled.table`
    background-color: #fff;
    width: 100%;
    display: block;
    overflow-x: auto;
    border-collapse: collapse;
    margin-bottom: 80px;
`;

export const Tbody = styled.tbody`
    display: table;
    width: 100%;
`;

export const Trow = styled.tr`
`;

export const Theader = styled.th`
    padding: 15px 25px;
    background-color: #101522;
    color: #fff;
`;

export const Tdata = styled.td`
    text-align: center;
    padding: 15px 25px;
    border-bottom: 5px solid #101522;
`;