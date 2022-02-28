import React from 'react';
import { Route, Routes } from 'react-router';

import HomePage from './pages/HomePage';

const App = () => {
    console.log('App');
    return (
        <div style={{ overflow: 'auto', margin: '0px 16px' }}>
            <HomePage />
        </div>
    );
};

export default App;
