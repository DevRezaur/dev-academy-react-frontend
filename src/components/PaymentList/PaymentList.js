import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Container } from '../../globalStyles'
import { Heading, PaymentTable, Tbody, Tdata, Theader, Trow } from './PaymentList.element'

const PaymentList = () => {
    const [payments, setPayments] = useState();

    useEffect(() => {
        getPayments();
    },[]);

    const getPayments = async () => {
        await axios({
            method: 'GET',
            url: 'http://localhost:8080/admin/payments',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            },
        })
        .then((response) => { 
            if (response.data) {
                setPayments(response.data);
            }
        })
        .catch((error) => {
            console.log(error);
        });
    }

    const updateStatus = async (payment, status) => {
        await axios({
            method: 'POST',
            url: 'http://localhost:8080/admin/update/payment',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            },
            data: {
                "id": payment.id,
                "userId": payment.userId,
                "courseId": payment.courseId,
                "trxCode": payment.trxCode,
                "amount": payment.amount,
                "status": status === "Clear" ? "Clear" : "Pending"
            }
        })
        .then((response) => { 
            if (response.data) {
                getPayments();
            }
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return (
        <>
            <Container>
                <Heading>
                    Payment Dashboard
                </Heading>
                {payments && <PaymentTable>
                    <Tbody>
                    <Trow>
                        <Theader>User ID</Theader>
                        <Theader>Course ID</Theader>
                        <Theader>TRX Code</Theader>
                        <Theader>Amount</Theader>
                        <Theader>Status</Theader>
                    </Trow>
                    {payments.map((payment) =>
                        <Trow key={payment.id}>
                            <Tdata>{payment.userId}</Tdata>
                            <Tdata>{payment.courseId}</Tdata>
                            <Tdata>{payment.trxCode}</Tdata>
                            <Tdata>{payment.amount}</Tdata>
                            <Tdata>
                                {payment.status === 'Pending' ? 
                                    <Button primary onClick={() => updateStatus(payment, "Clear")}>
                                        Approve
                                    </Button> :
                                    <Button danger onClick={() => updateStatus(payment, "Cancel")}>
                                        Cancel
                                    </Button>
                                }</Tdata>
                        </Trow>
                    )}
                    </Tbody>
                </PaymentTable>}
            </Container>  
        </>
    )
}

export default PaymentList
