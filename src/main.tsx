import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App.tsx';
import WeatherPage from './pages/WeatherPage.tsx';
import store from './store/index.ts';
import HomePage from './pages/HomePage.tsx';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { element: <HomePage />, index: true },
            { path: 'weather', element: <WeatherPage /> },
        ],
    },
]);

const children: JSX.Element = (
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);

root.render(children);
