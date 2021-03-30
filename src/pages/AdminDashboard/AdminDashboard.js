import React from 'react';

const AdminDashboard = () => {
    let user = JSON.parse(localStorage.getItem('user'))

    return (
        <>
            <h1>Admin Dashboard</h1>
            <p>Hi {user.fullname}</p>
        </>
    )
}

export default AdminDashboard