import axios from 'axios';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
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
        ButtonSec,
        Heading,
        BannerWrapper,
        PostWrapper} from './CoursePanel.element';

const CoursePanel = () => {
    let user = JSON.parse(localStorage.getItem('user'));
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
        if(data.resource[0]) {
            uploadFile(data.resource[0]);
        }
        createPost(data);
    }

    const uploadFile = async (file) => {
        const formData = new FormData();
		formData.append('sendfile', file);

        await axios.post('https://devrezaur.com/File-Bucket/file-upload.php', formData, {
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
                'resource': data.resource[0] ? data.resource[0].name : null,
                'resourcesLink': data.resource[0] ? 
                    `https://devrezaur.com/File-Bucket/file/${data.resource[0].name}` : null,
            }
        })
        .then((response) => {
            if (response.data) {
                console.log(response.data);
                window.location.reload(false);
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

    const changeCourseStatus = async (data) => {
        await axios({
            method: 'POST',
            url: 'http://localhost:8080/admin/addCourse',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            },
            data: {
                'id': course.id,
                'title': data.title,
                'desc': data.desc,
                'image': data.image,
                'price': data.price,
                'imageUrl': data.imageUrl,
                'status': data.status === 'running' ? 'down' : 'running',
            }
        })
        .then((response) => { 
            if (response.data) {
                getCourse(courseId);
            }
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return (
        <>
            {course && <CourseSection>
                <BannerWrapper>
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
                                    <Button 
                                        fullWidth
                                        primary = {course.status === 'running' ? true : false}
                                        danger = {course.status === 'down' ? true : false}
                                        onClick={()=> changeCourseStatus(course)}>
                                        {`Status: ${course.status}`}
                                    </Button>
                                }
                            </InfoSection>
                        </BannerSection>
                    </Container>
                </BannerWrapper>
                {(user && user.role==='ADMIN') &&
                    <PostWrapper>
                        <Container>
                        <Heading>
                            Add New Post
                        </Heading>
                        <AddPostSection onSubmit={handleSubmit(onSubmit)}>
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
                            <TextBox type="text" name='Description' ref={register} maxLength="750" />
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
                                    <FileInput type="file" name='resource' ref={register} />
                                </FileUploadSec>
                                <ButtonSec>
                                    <Button type="submit" fullWidth primary="primary">
                                        Post Content
                                    </Button>
                                </ButtonSec>
                            </ButtonWrapper>
                        </AddPostSection>
                        </Container>
                    </PostWrapper>
                }
            </CourseSection>}
        </>
    )
}

export default CoursePanel
