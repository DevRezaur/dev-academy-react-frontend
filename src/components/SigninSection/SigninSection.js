import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Container } from '../../globalStyles'
import { ButtonModified, GridWrapper, 
        Heading, 
        Image, 
        InputBox, 
        LeftSection, 
        RightSection, 
        SubHeading, 
        TextLink,
        Warning} from './SigninSection.element'


const schema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(5),
});

const SigninSection = () => {

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        await axios({
            method: 'POST',
            url: 'http://localhost:8080/auth/authenticate',
            data: {
                email: data.email,
                password: data.password,
            }
        }).then((response) => {
            if (response.data.jwt) {
              //localStorage.setItem("user", JSON.stringify(response.data));
              alert(response.data.jwt)
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
                    <RightSection onSubmit={handleSubmit(onSubmit)}>
                        <Heading>
                            Sign In
                        </Heading>
                        <SubHeading>
                            Email
                        </SubHeading>
                        <InputBox type="email" name='email' ref={register} />
                        <Warning>
                            {errors['email']?.message}
                        </Warning>
                        <SubHeading>
                            Password
                        </SubHeading>
                        <InputBox type="password" name='password' ref={register} />
                        <Warning>
                            {errors['password']?.message}
                        </Warning>
                        <ButtonModified type="submit" primary={true}>
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
