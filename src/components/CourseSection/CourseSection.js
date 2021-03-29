import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from '../../globalStyles';
import { Card,
        CardDesc,
        CardImage,
        CardTitle,
        CardWrapper,
        Heading,
        TextWrapper } from './CourseSection.element';
import axios from 'axios';

const CourseSection = () => {

    const [courses, setCourses] = useState([])

    useEffect(() => {
        getTopCourses();
    }, []);

    const getTopCourses = async () => {
        await axios({
            method: 'GET',
            url: 'http://localhost:8080/general/course/getAll',
        })
        .then((response) => { 
            if (response.data) {
                setCourses(response.data)
            }
        })
        .catch((error) => {
            console.log(error);
        });
    };

    return (
        <>
            <Container id="course">
                <Heading>
                    Top Cousrses
                </Heading>
                <CardWrapper>
                    {courses.map((course) =>
                    <Card key={course.id}>
                        <CardImage src={require('../../images/' + course.imageUrl).default} alt='Course Image' />
                        <TextWrapper>
                            <CardTitle>
                                {course.title}
                            </CardTitle>
                            <CardDesc>
                                {course.desc}
                            </CardDesc>
                            <Link to='/sign-in'>
                                <Button fullWidth primary="primary">
                                    Enroll Now
                                </Button>
                            </Link>
                        </TextWrapper>
                    </Card>
                    )}
                </CardWrapper>    
            </Container> 
        </>
    )
}

export default CourseSection
