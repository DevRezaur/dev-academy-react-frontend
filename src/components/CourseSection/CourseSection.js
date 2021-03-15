import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from '../../globalStyles';
import { Card,
        CardDesc,
        CardImage,
        CardTitle,
        CardWrapper,
        Heading,
        TextWrapper } from './CourseSection.element';

const CourseSection = () => {
    return (
        <>
            <Container id="course">
                <Heading>
                    Top Cousrses
                </Heading>
                <CardWrapper>
                    <Card>
                        <CardImage src={require('../../images/spring.jpg').default} alt="course" />
                        <TextWrapper>
                            <CardTitle>
                                Java Spring &amp; Spring Boot
                            </CardTitle>
                            <CardDesc>
                                Spring Framework is the most demanded Java enterprise framework. 
                                Learn Spring Framework 5.0 with Spring Boot 2.0 now. And fulfill your dream to become a 
                                enterprise application developer.
                            </CardDesc>
                            <Link to='/sign-in'>
                                <Button fullWidth primary="primary">
                                    Enroll Now
                                </Button>
                            </Link>
                        </TextWrapper>
                    </Card>
                    <Card>
                        <CardImage src={require('../../images/python.png').default} alt="course" />
                        <TextWrapper>
                            <CardTitle>
                                Python with Django
                            </CardTitle>
                            <CardDesc>
                                Python is growing so fast. Currently its the number one programming language. 
                                From general programming to machine learning, anything you can do with Python. 
                                So learn Python today with its amazing Django Framework.
                            </CardDesc>
                            <Link to='/sign-in'>
                                <Button fullWidth primary="primary">
                                    Enroll Now
                                </Button>
                            </Link>
                        </TextWrapper>
                    </Card>
                    <Card>
                        <CardImage src={require('../../images/react.jpg').default} alt="course" />
                        <TextWrapper>
                            <CardTitle>
                                React JS &amp; Styled Components
                            </CardTitle>
                            <CardDesc>
                                React JS is the most loved JavaScript library around the world. It was 
                                developed by Facebook Corporation. It is popular beacuse of its easy learning 
                                curve. More and more reple are switching to React.
                            </CardDesc>
                            <Link to='/sign-in'>
                                <Button fullWidth primary="primary">
                                    Enroll Now
                                </Button>
                            </Link>
                        </TextWrapper>
                    </Card>
                </CardWrapper>    
            </Container> 
        </>
    )
}

export default CourseSection
