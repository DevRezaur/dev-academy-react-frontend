import React, { useState, useEffect } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { Button } from '../../globalStyles';
import { 
    Nav, 
    NavContainer, 
    NavLogo, 
    NavIcon,
    NavTitle, 
    MobileIcon,
    NavMenu,
    NavItem,
    NavLink,
    NavItemBtn,
    NavBtnLink } from './Navbar.element';

const Navbar = () => {

    const [click, setClick] = useState(false);
    const [buttonLabelSm, setButtonLabelSm] = useState(true);

    const handleClick = () => setClick(!click);

    const showButton = () => {
        if(window.innerWidth <= 900) {
            setButtonLabelSm(false);
            setClick(false);
        } else {
            setButtonLabelSm(true);
        }
    }

    useEffect(() => {
        showButton();
        return () => {
            setButtonLabelSm(false);
            setClick(false)
        };
    },[])

    window.addEventListener('resize', showButton);

    return (
        <>
            <Nav>
                <NavContainer>
                    <NavLogo to='/' onClick={handleClick}>
                        <NavIcon />
                        <NavTitle>Dev Academy</NavTitle>
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                    <NavMenu click={click}>
                        <NavItem>
                            <NavLink to='home' onClick={handleClick} smooth={true} offset={-80} duration={500}>
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='mentor' onClick={handleClick} smooth={true} offset={-80} duration={500}>
                                Mentorship
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='testimonial' onClick={handleClick} smooth={true} offset={-80} duration={500}>
                                Testimonials
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='course' onClick={handleClick} smooth={true} offset={-80} duration={500}>
                                Courses
                            </NavLink>
                        </NavItem>
                        <NavItemBtn>
                            {buttonLabelSm ? (
                                <NavBtnLink to="/sign-in" onClick={handleClick}>
                                    <Button primary>Sign In</Button>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink to="/sign-in" onClick={handleClick}>
                                    <Button fontBig primary>Sign In</Button>
                                </NavBtnLink>
                            )}
                        </NavItemBtn>
                    </NavMenu>
                </NavContainer>
            </Nav>
        </>
    )
}

export default Navbar
