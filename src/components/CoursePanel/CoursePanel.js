import axios from 'axios';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Button, Container } from '../../globalStyles';
import { CourseSection,
        BannerSection,
        ImageSection,
        InfoSection, 
        HeroImage,
        CourseTitle,
        CourseDesc,
        AddPostSection,
        Label,
        Input,
        FileInput,
        TextBox,
        Warning,
        ButtonWrapper,
        FileUploadSec,
        ButtonSec} from './CoursePanel.element';

const CoursePanel = () => {
    let user = JSON.parse(localStorage.getItem('user'));
    let resourcesLink = null;
    const { courseId } = useParams();
    const [course, setCourse] = useState();

    useEffect(() => {
        getCourse(courseId);
    }, [courseId]);

    const schema = yup.object().shape({
        Title: yup.string().required(),
        Description: yup.string().required(),
        Link: yup.string().required()
    });

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        if(data.resourcesLink[0]) {
            resourcesLink = data.resourcesLink[0].name;
            uploadFile(data.resourcesLink[0]);
        }
        createPost(data);
    }

    const uploadFile = async (file) => {
        const formData = new FormData();
		formData.append('file', file);

        await axios.post('http://localhost:8080/general/uploadFile', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        })
        .then((response) => { 
            if (response.data) {
                console.log(response.data);
            }
        })
        .catch((error) => {
            console.log(error);
        });   
    }

    const createPost = async (data) => {
        await axios({
            method: 'POST',
            url: 'http://localhost:8080/admin/createPost',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            },
            data: {
                'courseId': courseId,
                'title': data.Title,
                'desc': data.Description,
                'classLink': data.Link,
                'resourcesLink': resourcesLink,
            }
        })
        .then((response) => {
            if (response.data) {
                console.log(response.data);
            }
        })
        .catch((error) => {
            console.log(error);
        });
    };

    const getCourse = async (courseId) => {
        await axios({
            method: 'GET',
            url: `http://localhost:8080/general/course/${courseId}`,
        })
        .then((response) => { 
            if (response.data) {
                setCourse(response.data);
                console.log(response.data);
            }
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return (
        <>
            {course && <CourseSection>
                <Container>
                    <BannerSection>
                        <ImageSection>
                            <HeroImage src={course.imageUrl} alt='Course Image' />
                        </ImageSection>
                        <InfoSection>
                            <CourseTitle>
                                {course.title}
                            </CourseTitle>
                            <CourseDesc>
                                {course.desc}
                            </CourseDesc>
                            {(user && user.role==='ADMIN') &&
                                (<Link to={`/edit/course/${courseId}`}>
                                    <Button fullWidth primary="primary">
                                        Update Course
                                    </Button>
                                </Link>)
                                }
                        </InfoSection>
                    </BannerSection>
                    {(user && user.role==='ADMIN') &&
                        (<AddPostSection onSubmit={handleSubmit(onSubmit)}>
                            <Label>
                                Post Title
                            </Label>
                            <Input type="text" name='Title' ref={register} maxLength="100" />
                            <Warning>
                                {errors['Title']?.message}
                            </Warning>
                            <Label>
                                Post Description
                            </Label>
                            <TextBox type="text" name='Description' ref={register} maxLength="1000" />
                            <Warning>
                                {errors['Description']?.message}
                            </Warning>
                            <Label>
                                Class Link
                            </Label>
                            <Input type="text" name='Link' ref={register} maxLength="100" />
                            <Warning>
                                {errors['Link']?.message}
                            </Warning>
                            <ButtonWrapper>
                                <FileUploadSec>
                                    <Label>
                                        Upload Resource File
                                    </Label>
                                    <FileInput type="file" name='resourcesLink' ref={register} />
                                </FileUploadSec>
                                <ButtonSec>
                                    <Button type="submit" fullWidth primary="primary">
                                        Post Content
                                    </Button>
                                </ButtonSec>
                            </ButtonWrapper>
                        </AddPostSection>)
                    }
                </Container>
            </CourseSection>}
        </>
    )
}

export default CoursePanel
