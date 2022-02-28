import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { backendUrl } from './utils/paramsUtils';
import App from './App';

const index = (
    <BrowserRouter basename={backendUrl}>
        <App />
    </BrowserRouter>
);

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(index, document.getElementById('app'));
});
