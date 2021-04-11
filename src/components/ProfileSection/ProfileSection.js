import React, { useEffect, useRef, useState } from 'react';
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
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    const [id, setId] = useState();
    const [fullname, setFullname] = useState();
    const [imageUrl, setImageUrl] = useState();
    const [contact, setContact] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [warning, setWarning] = useState('');
    const [failed, setFailed] = useState(true);
    const hiddenFileInput = useRef(null);

    const schema = yup.object().shape({
        fullname: yup.string().required(),
        contact: yup.string().required(),
        password: yup.string().required().min(5)
    });

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    useEffect(() => {
        getUserData();
    }, []);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

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
                'email': email,
                'password': data.password,
            }
        })
        .then((response) => {
            if (response.data) {
                setFailed(false);
                setWarning('Update Sucessful !');
                setUser({
                    id: response.data.id,
                    fullname: response.data.fullname,
                    imageUrl: response.data.imageUrl,
                    role: response.data.roles[0].role
                });
            }
        })
        .catch((error) => {
            setFailed(true);
            setWarning('Info Update failed !');
            console.log(error);
        });
    }
  
    const handleClick = event => {
        hiddenFileInput.current.click();
    };
    
    const uploadImage = async (event) => {
        const image = event.target.files[0];
        const formData = new FormData();
		formData.append('sendimage', image);

        await axios.post('https://devrezaur.com/File-Bucket/image-upload.php', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        })
        .then((response) => { 
            if (response.data) {
                setFailed(false);
                updateImageInfo(`https://devrezaur.com/File-Bucket/image/${event.target.files[0].name}`);
            }
        })
        .catch((error) => {
            setFailed(true);
            setWarning('Failed to add image !');
            console.log(error);
        });   
    }

    const updateImageInfo = async (imageUrl) => {
        await axios({
            method: 'POST',
            url: 'http://localhost:8080/auth/updateImage',
            data: {
                'id': JSON.parse(localStorage.getItem('user')).id,
                'imageUrl': imageUrl,
            }
        })
        .then((response) => {
            if (response.data) {
                setImageUrl(imageUrl);
                console.log(response.data);
            }
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return (
        <div>
            <Wrapper>
                <Container>
                    {imageUrl && <Image src={imageUrl} alt="Profile Image" />}
                    {fullname && <Heading>
                        {fullname}
                    </Heading>}
                    <StyledButton danger onClick={handleClick}>
                        Update Profile Picture
                    </StyledButton>
                    <InputBox type="file"
                        ref={hiddenFileInput}
                        onChange={(e) => uploadImage(e)}
                        style={{display:'none'}}
                    /> 
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
                            disabled
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
