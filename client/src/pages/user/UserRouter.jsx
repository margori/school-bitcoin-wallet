import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from '../NotFoundPage';
import UserLogin from './UserLogin';
import UserLogout from './UserLogout';
import UserRegister from './UserRegister';

const UserRouter = () => (
    <Routes>
        <Route path="/register" element={<UserRegister />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/logout" element={<UserLogout />} />
        <Route path="*" element={<NotFoundPage />} />
    </Routes>
);

export default UserRouter;
