import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';
import {
        Wrapper,
        Heading,
        StyledButton,
        ButtonWrapper, 
        SubTitle} from './ControlPanel.element';

const ControlPanel = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')));
        return () => setUser({});
    }, []);

    return (
        <>
            <Wrapper>
                <Container>
                    <Heading>
                        Hi, {user.fullname}
                    </Heading>
                    <SubTitle>
                        Welcome to admin dashboard. This is the main control panel. From there, as an 
                        authorized admin, you can manage all the administritive activity of Dev Academy.
                    </SubTitle>
                    <ButtonWrapper>
                        <Link to='/admin/courses'>
                            <StyledButton fullWidth primary="primary">
                                Manage Courses
                            </StyledButton>
                        </Link>
                        <Link to='/add/course'>
                            <StyledButton fullWidth primary="primary">
                                Add Courses
                            </StyledButton>
                        </Link>
                        <Link to='/sign-in'>
                            <StyledButton fullWidth primary="primary">
                                Manage Payments
                            </StyledButton>
                        </Link>
                        <Link to='/sign-in'>
                            <StyledButton fullWidth primary="primary">
                                View Students
                            </StyledButton>
                        </Link>
                        <Link to='/sign-in'>
                            <StyledButton fullWidth primary="primary">
                                Add Admins
                            </StyledButton>
                        </Link>
                    </ButtonWrapper>
                </Container>
            </Wrapper>
        </>
    )
}

export default ControlPanel
