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

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

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
                            Username
                        </SubHeading>
                        <InputBox type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <SubHeading>
                            Password
                        </SubHeading>
                        <InputBox type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <ButtonModified primary={true} onClick={() => {alert("Button Clicked")}}>
                            Continue
                        </ButtonModified>
                        <SubHeading center>
                            Click here to
                            <TextLink to="/sign-in" onClick={() => {alert("Link Clicked")}}>
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
