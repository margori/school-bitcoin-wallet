import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { backendUrl } from './utils/paramsUtils';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const index = (
    <Provider store={store}>
        <BrowserRouter basename={backendUrl}>
            <App />
        </BrowserRouter>
    </Provider>
);

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(index, document.getElementById('app'));
});
