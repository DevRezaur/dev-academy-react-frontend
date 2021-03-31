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
        NavItemBtn,
        NavBtnLink, 
        NavItem,
        NavLink} from './PrivateNav.element';

const PrivateNav = () => {
    const [click, setClick] = useState(false);
    const [buttonLabelSm, setButtonLabelSm] = useState(true);
    let user = JSON.parse(localStorage.getItem('user'));

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
            setClick(false);
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
                            {(user && user.role === 'ADMIN') ? 
                                (<NavLink to='/admin/dashboard' onClick={handleClick}>
                                    Admin Dashboard
                                </NavLink>) :
                                (<NavLink to='/user/dashboard' onClick={handleClick}>
                                    User Dashboard
                                </NavLink>) }
                        </NavItem>
                        <NavItem>
                            {(user && user.role === 'ADMIN') ? 
                                (<NavLink to='/admin/profile' onClick={handleClick}>
                                    Admin Profile
                                </NavLink>) :
                                (<NavLink to='/user/profile' onClick={handleClick}>
                                    User Profile
                                </NavLink>) }
                        </NavItem>
                        <NavItemBtn>
                            {buttonLabelSm ? (
                                <NavBtnLink to="/sign-in" onClick={handleClick}>
                                    <Button primary>Logout</Button>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink to="/sign-in" onClick={handleClick}>
                                    <Button fontBig primary>Logout</Button>
                                </NavBtnLink>
                            )}
                        </NavItemBtn>
                    </NavMenu>
                </NavContainer>
            </Nav>
        </>
    )
}

export default PrivateNav
