import React, { useEffect, useState } from 'react';
import { Container } from '../../globalStyles';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Heading, 
        Image, 
        Wrapper, 
        StyledButton, 
        UserForm, 
        TopWarning, 
        SubHeading, 
        InputBox, 
        Warning } from './ProfileSection.element';
import axios from 'axios';

const ProfileSection = () => {
    const [id, setId] = useState();
    const [fullname, setFullname] = useState();
    const [imageUrl, setImageUrl] = useState();
    const [contact, setContact] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [warning, setWarning] = useState('');
    const [failed, setFailed] = useState(true);

    const schema = yup.object().shape({
        fullname: yup.string().required(),
        contact: yup.string().required(),
        email: yup.string().required().email(),
        password: yup.string().required().min(5)
    });

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    useEffect(() => {
        getUserData();
    }, []);

    const getUserData = async () => {
        await axios({
            method: 'POST',
            url: 'http://localhost:8080/auth/userinfo',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            }
        })
        .then((response) => { 
            if (response.data) {
                setId(response.data.id);
                setFullname(response.data.fullname);
                setImageUrl(response.data.imageUrl);
                setContact(response.data.contact);
                setEmail(response.data.email);
                setPassword(response.data.password);
            }
        })
        .catch((error) => {
            console.log(error);
        });
    }

    const onSubmit = async (data) => {
        await axios({
            method: 'POST',
            url: 'http://localhost:8080/auth/updateInfo',
            data: {
                'id': data.id,
                'fullname': data.fullname,
                'contact': data.contact,
                'email': data.email,
                'password': data.password,
            }
        })
        .then((response) => {
            if (response.data) {
                setFailed(false);
                setWarning('Update Sucessful !')
            }
        })
        .catch((error) => {
            setFailed(true);
            setWarning('Update failed !');
            console.log(error);
        });
    }

    return (
        <div>
            <Wrapper>
                <Container>
                    <Image src="https://devrezaur.com/image/profile.png" alt="Profile Image" />
                    <Heading>
                        Rezaur Rahman
                    </Heading>
                    <StyledButton danger>
                        Update Profile Picture
                    </StyledButton>
                    <UserForm onSubmit={handleSubmit(onSubmit)}>
                        <TopWarning failed = {failed}>
                            {warning}
                        </TopWarning>
                        <SubHeading>
                            User Id
                        </SubHeading>
                        {id && <InputBox 
                            type="number" 
                            name='id'
                            value={id} 
                            disabled />}
                        <SubHeading>
                            Fullname
                        </SubHeading>
                        {fullname && <InputBox 
                            type="text" 
                            name='fullname' 
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                            ref={register} />}
                        <Warning>
                            {errors['fullname']?.message}
                        </Warning>
                        <SubHeading>
                            Contact Number
                        </SubHeading>
                        {contact && <InputBox 
                            type="text" 
                            name='contact' 
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                            ref={register} />}
                        <Warning>
                            {errors['contact']?.message}
                        </Warning>
                        <SubHeading>
                            Email
                        </SubHeading>
                        {email && <InputBox 
                            type="email" 
                            name='email' 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            ref={register} />}
                        <Warning>
                            {errors['email']?.message}
                        </Warning>
                        <SubHeading>
                            Set a password
                        </SubHeading>
                        {password && <InputBox 
                            type="text" 
                            name='password' 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            ref={register} />}
                        <Warning>
                            {errors['password']?.message}
                        </Warning>
                        <StyledButton fullWidth primary={true}>
                            Update Info
                        </StyledButton>
                    </UserForm>
                </Container>
            </Wrapper> 
        </div>
    )
}

export default ProfileSection
