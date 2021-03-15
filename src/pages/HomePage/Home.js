import React from 'react'
import { aboutObject, mentorshipObject, testimonialObject } from './Data'; 
import { CourseSection, InfoSection, Navbar } from '../../components';

const Home = () => {
    return (
        <>
            <Navbar />
            <InfoSection {...aboutObject} />
            <InfoSection {...mentorshipObject} />
            <InfoSection {...testimonialObject} />
            <CourseSection />
        </>
    )
}

export default Home
