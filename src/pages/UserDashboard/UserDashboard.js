import React from 'react';
import { PrivateNav } from '../../components';

const UserDashboard = () => {
    let user = JSON.parse(localStorage.getItem('user'))

    return (
        <>
            <PrivateNav />
            <h1>Hi ${user.fullname}</h1>
        </>
    )
}

export default UserDashboard
