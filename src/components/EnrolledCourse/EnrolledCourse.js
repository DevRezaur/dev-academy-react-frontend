import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from '../../globalStyles';
import {EnrolledSec,
        Heading,
        CardWrapper,
        Card,
        CardImage,
        TextWrapper,
        CardTitle,
        CardDesc} from './EnrolledCourse.element';

const EnrolledCourse = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        getCourses();
    }, []);

    const getCourses = async () => {
        let user = JSON.parse(localStorage.getItem('user'));
        await axios({
            method: 'GET',
            url: `http://localhost:8080/user/${user.id}/getCourses`,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            }
        })
        .then((response) => { 
            if (response.data) {
                setCourses(response.data)
            }
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return (
        <EnrolledSec>
            <Container>
                <Heading>
                    Enrolled Courses
                </Heading>
                <CardWrapper>
                    {courses.map((course) =>
                    <Card key={course.id}>
                        <CardImage src={course.imageUrl} alt='Course Image' />
                        <TextWrapper>
                            <CardTitle>
                                {course.title}
                            </CardTitle>
                            <CardDesc>
                                {course.desc}
                            </CardDesc>
                            <Link to={`/user/course/${course.id}`}>
                                <Button fullWidth primary="primary">
                                    View Course
                                </Button>
                            </Link>
                        </TextWrapper>
                    </Card>
                    )}
                </CardWrapper>    
            </Container>  
        </EnrolledSec>
    )
}

export default EnrolledCourse
