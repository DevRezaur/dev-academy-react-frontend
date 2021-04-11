import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Button } from '../../globalStyles'
import { BrandLogo, FooterContainer, FooterLink, FooterLinkContainer, FooterLinkItem, 
    FooterLinkTitle, FooterLinkWrapper, FooterSubHeading, FooterSubscription, FooterSubText, 
    Form, FormInput, SocialMediaContainer, SocialMediaIcon, SocialMediaLink, SocialMediaWrap, 
    WebsiteIcon, WebsiteRights } from './Footer.element'

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterSubscription>
                    <FooterSubHeading>
                        Subscribe to our monthly news letter
                    </FooterSubHeading>
                    <FooterSubText>
                        You can unsubscibe anytime
                    </FooterSubText>
                    <Form action="mailto:mail@devrezaur.com" method="post" enctype="text/plain">
                        <FormInput name="mail" type="email" required placeholder="Your Email" />
                        <Button fontBig>Subscribe</Button>
                    </Form>
                </FooterSubscription>
                <FooterLinkContainer>
                    <FooterLinkWrapper>
                        <FooterLinkItem>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to='/'>
                                Testimonials
                            </FooterLink>
                            <FooterLink to='/'>
                                Careers
                            </FooterLink>
                            <FooterLink to='/'>
                                Investors
                            </FooterLink>
                        </FooterLinkItem>
                        <FooterLinkItem>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to='/'>
                                Email Us
                            </FooterLink>
                            <FooterLink to='/'>
                                Hot Line
                            </FooterLink>
                            <FooterLink to='/'>
                                Telephone
                            </FooterLink>
                        </FooterLinkItem>
                        <FooterLinkItem>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to='/'>
                                Facebook
                            </FooterLink>
                            <FooterLink to='/'>
                                Twitter
                            </FooterLink>
                            <FooterLink to='/'>
                                LinkedIn
                            </FooterLink>
                        </FooterLinkItem>
                    </FooterLinkWrapper>
                </FooterLinkContainer>
                <SocialMediaContainer>
                    <SocialMediaWrap>
                        <BrandLogo to='/'>
                            <WebsiteIcon />
                            Dev Academy
                        </BrandLogo>
                        <WebsiteRights>Designed By &nbsp;&copy; Dev Rezaur</WebsiteRights>
                        <SocialMediaIcon>
                            <SocialMediaLink href='/' targer='_blank' aria-label='Facebook'>
                                <FaFacebook />
                            </SocialMediaLink>
                            <SocialMediaLink href='/' targer='_blank' aria-label='Youtube'>
                                <FaYoutube />
                            </SocialMediaLink>
                            <SocialMediaLink href='/' targer='_blank' aria-label='Twitter'>
                                <FaTwitter />
                            </SocialMediaLink>
                            <SocialMediaLink href='/' targer='_blank' aria-label='LinkedIn'>
                                <FaLinkedin />
                            </SocialMediaLink>
                        </SocialMediaIcon>
                    </SocialMediaWrap>
                </SocialMediaContainer>
            </FooterContainer>
        </>
    )
}

export default Footer
