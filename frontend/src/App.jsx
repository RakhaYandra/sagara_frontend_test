import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar'; 
import DashboardContent from './pages/Dashboard';
import StudentPage from './pages/StudentPage';
import { Box } from '@mui/material';

const Dashboard = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <Sidebar />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Header />
                <Routes>
                    <Route path="/dashboard" element={<DashboardContent />} />
                    <Route path="/students" element={<StudentPage />} />
                </Routes>
            </Box>
        </Box>
    );
};

export default Dashboard;
