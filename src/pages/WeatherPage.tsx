import GeolocationPermissionRequest from '../components/Alternatives/GeolocationPermissionRequest';
import SearchBar from '../components/Search/SearchBar';
import Weather from '../components/Weather/Weather';
import useGeolocation from '../hooks/useGeolocation';

function WeatherPage(): JSX.Element {
    const { requestBefore } = useGeolocation();

    if (!requestBefore) {
        return <GeolocationPermissionRequest />;
    }

    return (
        <div>
            <header className="w-full">
                <SearchBar />
            </header>
            <main className="mt-2.5">
                <Weather />
            </main>
            <footer className="text-color3 m-3 text-center">
                <small>
                    Created by
                    <a
                        className="text-white hover:opacity-60 transition-opacity duration-200"
                        href="https://vinicius-goncalves.com"
                        rel="noopener noreferrer"
                        referrerPolicy="strict-origin"
                        target="_blank">
                        vinicius-goncalves.com
                    </a>
                    .
                </small>
            </footer>
        </div>
    );
}

export default WeatherPage;
