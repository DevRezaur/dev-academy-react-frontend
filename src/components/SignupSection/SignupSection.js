import React, { useState } from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Container } from '../../globalStyles';
import { ButtonModified, GridWrapper, 
        Heading, 
        Image, 
        InputBox, 
        LeftSection, 
        RightSection,
        TopWarning,
        Warning, 
        SubHeading, 
        TextLink} from './SignupSection.element';
import axios from 'axios';

const SignupSection = () => {
    const [warning, setWarning] = useState('');
    const [failed, setFailed] = useState(true);

    const schema = yup.object().shape({
        fullname: yup.string().required(),
        contact: yup.string().required(),
        email: yup.string().required().email(),
        password: yup.string().required().min(5),
        confPassword: yup.string().required().min(5),
    });

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        signUp(data);
    }

    const signUp = async (data) => {
        if(data.password !== data.confPassword)
            setWarning('Password did not matched !');
        else {
            setWarning('');
            await axios({
                method: 'POST',
                url: 'http://localhost:8080/auth/register',
                data: {
                    'fullname': data.fullname,
                    'contact': data.contact,
                    'email': data.email,
                    'password': data.password,
                }
            })
            .then((response) => {
                if (response.data) {
                    setFailed(false);
                    setWarning('Resgistration Successful. Please Login !')
                }
            })
            .catch((error) => {
                setFailed(true);
                setWarning('Login Failed !');
                console.log(error);
            });
        }
    }

    return (
        <>
            <Container>
                <GridWrapper>
                    <LeftSection>
                        <Image src={require('../../images/login.svg').default} alt="coder" />
                    </LeftSection>
                    <RightSection onSubmit={handleSubmit(onSubmit)}>
                        <TopWarning failed = {failed}>
                            {warning}
                        </TopWarning>
                        <Heading>
                            Sign Up Form
                        </Heading>
                        <SubHeading>
                            Fullname
                        </SubHeading>
                        <InputBox type="text" name='fullname' ref={register} />
                        <Warning>
                            {errors['fullname']?.message}
                        </Warning>
                        <SubHeading>
                            Contact Number
                        </SubHeading>
                        <InputBox type="text" name='contact' ref={register} />
                        <Warning>
                            {errors['contact']?.message}
                        </Warning>
                        <SubHeading>
                            Email
                        </SubHeading>
                        <InputBox type="email" name='email' ref={register} />
                        <Warning>
                            {errors['email']?.message}
                        </Warning>
                        <SubHeading>
                            Set a password
                        </SubHeading>
                        <InputBox type="password" name='password' ref={register} />
                        <Warning>
                            {errors['password']?.message}
                        </Warning>
                        <SubHeading>
                            Confirm Password
                        </SubHeading>
                        <InputBox type="password" name='confPassword' ref={register} />
                        <Warning>
                            {errors['confPassword']?.message}
                        </Warning>
                        <ButtonModified primary={true}>
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