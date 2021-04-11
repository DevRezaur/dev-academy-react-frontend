import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Container } from '../../globalStyles';
import { Warning, Card, CardTitle, CardDesc, Label, Input, PaymentForm, ButtonModified } from './EnrollComponent.element';

const EnrollComponent = () => {
    let user = JSON.parse(localStorage.getItem('user'));
    const { courseId } = useParams();
    const [warning, setWarning] = useState('');
    const [failed, setFailed] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios({
            method: 'POST',
            url: 'http://localhost:8080/user/pay',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            },
            data: {
                'userId': user.id,
                'courseId': courseId,
                'trxCode': e.target[2].value,
                'amount': e.target[1].value,
            }
        })
        .then((response) => {
            if (response.data) {
                console.log(response.data);
                setFailed(false);
                setWarning('Payment seccesful !');
                e.target[0].value = null;
                e.target[1].value = null;
                e.target[2].value = null;
            }
        })
        .catch((error) => {
            console.log(error);
            setFailed(true);
            setWarning('Payment Failed !');
        });
    }

    return (
        <>
            <Container>
                <Card>
                    <CardTitle>
                        Smart Payment
                    </CardTitle>
                    <Warning failed={failed}>
                        {warning}
                    </Warning>
                    <CardDesc>
                        Welcome to smart payment system of Dev Academy. Using smart payment system you can pay 
                        the enrollment fee of our courses via online. What's smart about our smart payment system? 
                        Well it is actually smart. You can pay via any platform you want. BKash, Rocket, DBBL, bank.....
                        We accept anything. Just mention the platform name and submit the TRX (Transaction ID). Rest 
                        will be handled by us.
                    </CardDesc>
                    <PaymentForm method="POST" onSubmit={handleSubmit}>
                        <Label>
                            Payment Platform
                        </Label>
                        <Input type="text" name='platform' required />
                        <Label>
                            Amount Sent
                        </Label>
                        <Input type="number" name='amount' required />
                        <Label>
                            Transaction Code (TRX Code)
                        </Label>
                        <Input type="text" name='trx-code' required />
                        <ButtonModified type="submit" fullWidth primary={true}>
                            Pay
                        </ButtonModified>
                    </PaymentForm>
                </Card>
            </Container>
        </>
    )
}

export default EnrollComponent
