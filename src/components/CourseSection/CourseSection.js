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
    const [user, setUser] = useState({});
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')));
        getTopCourses();
        return () => {
            setUser({});
            setCourses([]);
        };
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
                    Our Cousrses
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
                            {(user && user.role==='ADMIN') ?
                                (<Link to={`/admin/course/${course.id}`}>
                                    <Button fullWidth primary="primary">
                                        Manage Course
                                    </Button>
                                </Link>) :
                                (<Link to={`/enroll/course/${course.id}`}>
                                    <Button fullWidth primary="primary">
                                        Enroll Now
                                    </Button>
                                </Link>)
                            }
                        </TextWrapper>
                    </Card>
                    )}
                </CardWrapper>    
            </Container> 
        </>
    )
}

export default CourseSection
