import React from 'react';
import { ControlPanel, PrivateNav, TopSection } from '../../components';
import { data } from './Data';

const AdminDashboard = () => {

    return (
        <>
            <PrivateNav />
            <TopSection {...data} />
            <ControlPanel />
        </>
    )
}

export default AdminDashboard;