import React from 'react';
import { ControlPanel, PrivateNav } from '../../components';
import TopSection from '../../components/TopSection/TopSection';
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