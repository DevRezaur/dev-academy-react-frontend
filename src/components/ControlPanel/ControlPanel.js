import React from 'react'
import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';
import {
        Wrapper,
        StyledButton,
        ButtonWrapper } from './ControlPanel.element';

const ControlPanel = () => {

    return (
        <>
            <Wrapper>
                <Container>
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
                        <Link to='/admin/payments'>
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
