import React from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';

const App = () => (
    <div style={{ overflow: 'auto', margin: '0px 16px' }}>
        <Header />
        <HomePage />
    </div>
);

export default App;
