import React from 'react';
import UserDashboard from './userDashboard';
import AdminDashboard from './adminDashboard';

const Dashboard = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return(
    <>
    {user.position === 'admin' ? <AdminDashboard user={user}/> : <UserDashboard user={user}/>}
    </>
    );
}

export default Dashboard;