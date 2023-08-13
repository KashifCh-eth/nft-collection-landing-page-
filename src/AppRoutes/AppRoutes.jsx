import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../App';
import Join from '../Screens/Join/Join';
import MainHome from '../Screens/MainHome/MainHome';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainHome />} />
                <Route path="/join" element={<Join />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;
