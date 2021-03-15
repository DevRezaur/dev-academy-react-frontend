import React, { useState } from 'react'
import { Container } from '../../globalStyles'
import { ButtonModified, GridWrapper, 
        Heading, 
        Image, 
        InputBox, 
        LeftSection, 
        RightSection, 
        SubHeading, 
        TextLink} from './SignupSection.element'

const SignupSection = () => {

    const [fullname, setFullname] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <>
            <Container>
                <GridWrapper>
                    <LeftSection>
                        <Image src={require('../../images/login.svg').default} alt="coder" />
                    </LeftSection>
                    <RightSection>
                        <Heading>
                            Sign Up Form
                        </Heading>
                        <SubHeading>
                            Fullname
                        </SubHeading>
                        <InputBox type="text" value={fullname} onChange={(e) => setFullname(e.target.value)} />
                        <SubHeading>
                            Contact Number
                        </SubHeading>
                        <InputBox type="text" value={contact} onChange={(e) => setContact(e.target.value)} />
                        <SubHeading>
                            Email
                        </SubHeading>
                        <InputBox type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <SubHeading>
                            Set a password
                        </SubHeading>
                        <InputBox type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <SubHeading>
                            Confirm Password
                        </SubHeading>
                        <InputBox type="text" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        <ButtonModified primary={true} onClick={() => {alert("Button Clicked")}}>
                            Register
                        </ButtonModified>
                        <SubHeading center>
                            Already have an account? Then
                            <TextLink to="/sign-in">
                                Sign-in
                            </TextLink>
                        </SubHeading>
                    </RightSection>
                </GridWrapper>
            </Container>
        </>
    )
}

export default SignupSection