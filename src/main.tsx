import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import HomePage from './pages/HomePage.tsx';
import WeatherPage from './pages/WeatherPage.tsx';
import store from './store/index.ts';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: 'weather',
        element: <WeatherPage />,
        index: true,
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
