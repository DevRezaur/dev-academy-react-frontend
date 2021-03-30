import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Container } from '../../globalStyles';
import { useHistory } from 'react-router';
import * as yup from 'yup';
import { ButtonModified, GridWrapper, 
        Heading, 
        Image, 
        InputBox, 
        LeftSection, 
        RightSection, 
        SubHeading, 
        TextLink,
        Warning} from './SigninSection.element';

const SigninSection = () => {
    const [warning, setWarning] = useState('');
    const [user, setUser] = useState({});
    const history = useHistory();

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    const schema = yup.object().shape({
        email: yup.string().required().email(),
        password: yup.string().required().min(5),
    });

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        signIn(data);
    }

    const signIn = async (data) => {
        await axios({
            method: 'POST',
            url: 'http://localhost:8080/auth/authenticate',
            data: {
                email: data.email,
                password: data.password,
            }
        })
        .then((response) => {
            if (response.data.jwt) {
                localStorage.setItem('jwt', response.data.jwt);
                getUserData(response.data.jwt);
            }
        })
        .catch((error) => {
            setWarning('Login Failed !');
        });
    }

    const getUserData = async (jwt) => {
        await axios({
            method: 'POST',
            url: 'http://localhost:8080/auth/userinfo',
            headers: {
                'Authorization': `Bearer ${jwt}`
            }
        })
        .then((response) => { 
            if (response.data) {
                setUser({
                    id: response.data.id,
                    fullname: response.data.fullname,
                    imageUrl: response.data.imageUrl,
                    role: response.data.roles[0].role
                });
                if(response.data.roles[0].role === "ADMIN")
                    history.push('/admin/dashboard');
                else if(response.data.roles[0].role === "USER")
                    history.push('/user/dashboard');
            }
        })
        .catch((error) => {
            console.log(error);
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
                        <Warning failed>
                            {warning}
                        </Warning>
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