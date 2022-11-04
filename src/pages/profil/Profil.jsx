import React from 'react';

// Import components
import Dashboard from '../../components/dashboard/Dashboard';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';

const Profil = () => {
    return (
        <>
            <Navbar />
            <Sidebar />
            <Dashboard />
        </>
    );
};

export default Profil;