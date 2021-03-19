import axios from 'axios';
import React, { useState } from 'react'
import { Container } from '../../globalStyles'
import { ButtonModified, GridWrapper, 
        Heading, 
        Image, 
        InputBox, 
        LeftSection, 
        RightSection, 
        SubHeading, 
        TextLink} from './SigninSection.element'

const SigninSection = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = async () => {
        await axios({
            method: 'POST',
            url: 'http://localhost:8080/auth/authenticate',
            data: {
                email: email,
                password: password,
            }
        }).then((response) => {
            if (response.data.jwt) {
              //localStorage.setItem("user", JSON.stringify(response.data));
              console.log(response.data.jwt)
            }
            return response.data;
        });
    }

    return (
        <>
            <Container>
                <GridWrapper>
                    <LeftSection>
                        <Image src={require('../../images/login.svg').default} alt="coder" />
                    </LeftSection>
                    <RightSection>
                        <Heading>
                            Sign In
                        </Heading>
                        <SubHeading>
                            Email
                        </SubHeading>
                        <InputBox type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <SubHeading>
                            Password
                        </SubHeading>
                        <InputBox type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <ButtonModified primary={true} onClick={login}>
                            Login
                        </ButtonModified>
                        <SubHeading center>
                            Click here to
                            <TextLink to="/sign-up">
                                Sign-Up
                            </TextLink>
                        </SubHeading>
                    </RightSection>
                </GridWrapper>
            </Container>
        </>
    )
}

export default SigninSection
