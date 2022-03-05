import React from 'react';
import { Route, Routes } from 'react-router';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import UserRouter from './pages/user/UserRouter';

const App = () => (
    <div style={{ overflow: 'auto', margin: '0px 16px' }}>
        <Header />
        <Routes>
            <Route path="/" element={<HomePage />} exact={true} />
            <Route path="/user/*" element={<UserRouter />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </div>
);

export default App;
