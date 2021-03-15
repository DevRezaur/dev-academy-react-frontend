import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container } from '../../globalStyles'
import { 
    Heading,
    InfoColumn,
    ImageColumn, 
    InfoRow, 
    InfoSec, 
    SubTitle, 
    TopLine,
    Img } from './InfoSection.element'

const InfoSection = ({id, lightBG, imgStart, lightTopLine, topLine, lightText, 
                    headLine, lightTextDesc, description, primary, buttonLabel,
                    img, alt}) => {

    return (
        <>
            <InfoSec lightBG={lightBG} id={id}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TopLine lightTopLine={lightTopLine}>
                                {topLine}    
                            </TopLine>
                            <Heading lightText={lightText}>
                                {headLine}
                            </Heading>
                            <SubTitle lightTextDesc={lightTextDesc}>
                                {description}
                            </SubTitle>
                            <Link to='/sign-in'>
                                <Button big fontBig primary={primary}>
                                    {buttonLabel}
                                </Button>
                            </Link>
                        </InfoColumn>
                        <ImageColumn>
                            <Img src={img} alt={alt} />
                        </ImageColumn>
                    </InfoRow>
                </Container>
            </InfoSec>  
        </>
    )
}

export default InfoSection
