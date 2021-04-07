import React from 'react';
import { CourseSection, EnrolledCourse, PrivateNav, TopSection } from '../../components';
import { data } from './Data';

const UserDashboard = () => {
    return (
        <>
            <PrivateNav />
            <TopSection {...data} />
            <EnrolledCourse />
            <CourseSection />
        </>
    )
}

export default UserDashboard
