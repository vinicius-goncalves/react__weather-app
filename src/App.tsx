import { Outlet } from 'react-router-dom';

function App(): JSX.Element {
    return (
        <div className="bg-color1 bg-no-repeat min-w-full min-h-screen p-3">
            <Outlet />
        </div>
    );
}

export default App;
