import React from 'react';
import { PrivateNav } from '../../components';


const AdminDashboard = () => {
    let user = JSON.parse(localStorage.getItem('user'))

    return (
        <>
            <PrivateNav />
            <h1>Admin Dashboard</h1>
            <p>Hi {user.fullname}</p>
        </>
    )
}

export default AdminDashboard