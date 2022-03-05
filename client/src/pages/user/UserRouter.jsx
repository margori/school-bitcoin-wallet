import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from '../NotFoundPage';
import UserRegister from './UserRegister';

const UserRouter = () => (
    <Routes>
        <Route path="/register" element={<UserRegister />} />
        <Route path="*" element={<NotFoundPage />} />
    </Routes>
);

export default UserRouter;
