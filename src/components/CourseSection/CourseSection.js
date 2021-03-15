import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from '../../globalStyles';
import { topCourses } from '../../pages/HomePage/Data';
import { Card,
        CardDesc,
        CardImage,
        CardTitle,
        CardWrapper,
        Heading,
        TextWrapper } from './CourseSection.element';

const CourseSection = () => {

    const [courses, setCourses] = useState([...topCourses])

    return (
        <>
            <Container id="course">
                <Heading>
                    Top Cousrses
                </Heading>
                <CardWrapper>
                    {courses.map((course, i) =>
                    <Card key={i}>
                        <CardImage src={course.image} alt={course.alt} />
                        <TextWrapper>
                            <CardTitle>
                                {course.title}
                            </CardTitle>
                            <CardDesc>
                                {course.desc}
                            </CardDesc>
                            <Link to='/sign-in'>
                                <Button fullWidth primary="primary">
                                    {course.label}
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
