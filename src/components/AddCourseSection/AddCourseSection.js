import React, { useState } from 'react'
import { Container } from '../../globalStyles';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { ButtonModified, GridWrapper, 
        Heading, 
        Image, 
        InputBox, 
        LeftSection, 
        RightSection, 
        SubHeading,
        Warning,
        TextBox} from './AddCourseSection.element'

const AddCourseSection = () => {
    // const [title, setTitle] = useState('');
    // const [description, setDescription] = useState('');
    // const [imageUrl, setImageUrl] = useState('');
    const [warning, setWarning] = useState('');

    const schema = yup.object().shape({
        title: yup.string().required(),
        description: yup.string().required(),
        imageUrl: yup.string().required(),
    });

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        
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
                        <TextBox type="text" name='description' ref={register} />
                        <Warning>
                            {errors['description']?.message}
                        </Warning>
                        <SubHeading>
                            Banner Image
                        </SubHeading>
                        <InputBox type="text" name='imageUrl' ref={register} />
                        <Warning>
                            {errors['imageUrl']?.message}
                        </Warning>
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
