import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WeatherPage from './pages/WeatherPage.tsx';
import SettingsPage from './pages/SettingsPage.tsx';
import { Provider } from 'react-redux';
import store from './store/index.ts';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: 'weather', element: <WeatherPage />, index: true },
            { path: 'settings', element: <SettingsPage /> },
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
