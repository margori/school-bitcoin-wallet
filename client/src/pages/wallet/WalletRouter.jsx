import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from '../NotFoundPage';
import WalletAddresses from './WalletAddresses';
import WalletBalance from './WalletBalance';
import WalletNewAddress from './WalletNewAddress';
import WalletReceive from './WalletReceive';
import WalletSend from './WalletSend';

const WalletRouter = () => (
    <Routes>
        <Route path="/balance" element={<WalletBalance />} />
        <Route path="/addresses" element={<WalletAddresses />} />
        <Route path="/new-address" element={<WalletNewAddress />} />
        <Route path="/send" element={<WalletSend />} />
        <Route path="/receive" element={<WalletReceive />} />
        <Route path="*" element={<NotFoundPage />} />
    </Routes>
);

export default WalletRouter;
