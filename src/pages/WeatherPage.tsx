import GoogleIcon from '../components/GoogleIcon';
import Search from '../components/Search/Search';
import Weather from '../components/Weather/Weather';
import useGeolocation from '../hooks/useGeolocation';

function WeatherPage(): JSX.Element {
    const { requestBefore } = useGeolocation();

    if (!requestBefore) {
        return (
            <div className="min-w-full min-h-screen flex items-center justify-center flex-col text-center">
                <GoogleIcon icon="distance" className="text-8xl" />
                <h1 className="text-white text-2xl font-bold">
                    optional permission request
                </h1>
                <p className="text-gray-500">
                    To have a better precision, this application requires your
                    location. Do you allow?
                </p>
                <small className="text-gray-300/10 m-4">
                    If you deny (or have denied) Don't worry! The application
                    has a manual search input to you search whatever want.
                </small>
            </div>
        );
    }

    return (
        <div>
            <header className="w-full">
                <Search />
            </header>
            <div className="py-3">
                <p className="text-gray-500 text-sm">
                    {/* Check out the current weather at your location */}
                </p>
            </div>
            <main>
                <Weather />
            </main>
            <footer className="text-color3 m-3 text-center">
                <small>
                    Created by{' '}
                    <a
                        className="text-white hover:opacity-60 transition-opacity duration-200"
                        href="vinicius-goncalves.com"
                        rel="noopener noreferrer">
                        vinicius-goncalves.com
                    </a>
                    .
                </small>
            </footer>
        </div>
    );
}

export default WeatherPage;
