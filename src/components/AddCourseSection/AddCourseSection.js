import React, { useState } from 'react'
import { Container } from '../../globalStyles';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { ButtonModified, GridWrapper, 
        Heading, 
        Image, 
        InputBox, 
        LeftSection, 
        RightSection, 
        SubHeading,
        TopWarning,
        Warning,
        TextBox,
        SwitchWrapper,
        CheckBox} from './AddCourseSection.element';

const AddCourseSection = () => {
    const [warning, setWarning] = useState();
    const [failed, setFailed] = useState(true);

    const schema = yup.object().shape({
        title: yup.string().required('Please provide title'),
        description: yup.string().required('Please provide description'),
        price: yup.number().required('Please provide course price').typeError('Invalid price')
    });

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        if(data.image[0])
            uploadImage(data.image[0]);
        if(data.status)
            data.status = 'running';
        else
            data.status = 'down';
        addCourse(data);
    }

    const addCourse = async (data) => {
        await axios({
            method: 'POST',
            url: 'http://localhost:8080/admin/addCourse',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            },
            data: {
                'title': data.title,
                'desc': data.description,
                'image': data.image[0] ? data.image[0].name : 'default_course.jpg',
                'price': data.price,
                'imageUrl': data.image[0] ? 
                            `https://devrezaur.com/File-Bucket/image/${data.image[0].name}` : 
                            'https://devrezaur.com/File-Bucket/image/default_course.jpg',
                'status': data.status,
            }
        })
        .then((response) => { 
            if (response.data) {
                setFailed(false);
                setWarning('Course added successfully !');
            }
        })
        .catch((error) => {
            setFailed(true);
            setWarning('Failed to add course !');
            console.log(error);
        });
    };

    const uploadImage = async (image) => {
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
            }
        })
        .catch((error) => {
            setFailed(true);
            setWarning('Failed to add image !');
            console.log(error);
        });   
    }

    return (
        <>
            <Container>
                <GridWrapper>
                    <LeftSection>
                        <Image src={require('../../images/course.svg').default} alt="coder" />
                    </LeftSection>
                    <RightSection onSubmit={handleSubmit(onSubmit)}>
                        <TopWarning failed = {failed}>
                            {warning}
                        </TopWarning>
                        <Heading>
                            Add New Course
                        </Heading>
                        <SubHeading>
                            Course Title
                        </SubHeading>
                        <InputBox type="text" name='title' ref={register} />
                        <Warning>
                            {errors['title']?.message}
                        </Warning>
                        <SubHeading>
                            Description
                        </SubHeading>
                        <TextBox type="text" maxLength="150" name='description' ref={register} />
                        <Warning>
                            {errors['description']?.message}
                        </Warning>
                        <SubHeading>
                            Course Price
                        </SubHeading>
                        <InputBox type="number" name='price' ref={register} />
                        <Warning>
                            {errors['price']?.message}
                        </Warning>
                        <SubHeading>
                            Banner Image
                        </SubHeading>
                        <InputBox type="file" name='image' ref={register} />
                        <SwitchWrapper>
                            <SubHeading>
                                Currently Running?
                            </SubHeading>
                            <CheckBox type="checkbox" name='status' ref={register} />
                        </SwitchWrapper>
                        <ButtonModified type="submit" primary={true}>
                            Add Course
                        </ButtonModified>
                    </RightSection>
                </GridWrapper>
            </Container>      
        </>
    )
}

export default AddCourseSection;
