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
    NavBtnLink } from './MiniNav.element';

const MiniNav = () => {

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
                        <NavItemBtn>
                            {buttonLabelSm ? (
                                <NavBtnLink to="/" onClick={handleClick}>
                                    <Button primary>Back to Home</Button>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink to="/" onClick={handleClick}>
                                    <Button fontBig primary>Back to Home</Button>
                                </NavBtnLink>
                            )}
                        </NavItemBtn>
                    </NavMenu>
                </NavContainer>
            </Nav>
        </>
    )
}

export default MiniNav