import React from 'react';
import { CourseSection, EnrolledCourse, PrivateNav, TopSection } from '../../components';
import { data } from './Data';

const UserDashboard = () => {
    return (
        <>
            <PrivateNav />
            <TopSection {...data} />
            <CourseSection />
            <EnrolledCourse />
        </>
    )
}

export default UserDashboard
