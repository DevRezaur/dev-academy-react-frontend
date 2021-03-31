import React from 'react';
import { PrivateNav } from '../../components';

const UserDashboard = () => {
    let user = JSON.parse(localStorage.getItem('user'))

    return (
        <>
            <PrivateNav />
            <h1>User Dashboard</h1>
            <p>Hi {user.fullname}</p>
        </>
    )
}

export default UserDashboard
