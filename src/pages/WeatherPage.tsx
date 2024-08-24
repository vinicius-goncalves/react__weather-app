import { tv } from 'tailwind-variants';
import GeolocationPermissionRequest from '../components/Alternatives/GeolocationPermissionRequest';
import SearchBar from '../components/Search/SearchBar';
import Weather from '../components/Weather/Weather';
import useGeolocation from '../hooks/useGeolocation';

const weatherPage = tv({
    slots: {
        wrapper: 'bg-color1 bg-no-repeat min-w-full min-h-screen p-3',
        header: 'w-full flex justify-center',
        main: 'mt-2.5',
        footer: 'text-color3 m-3 text-center',
        anchor: 'text-white hover:opacity-60 transition-opacity duration-200',
    },
})();

const { wrapper, header, main, footer, anchor } = weatherPage;

function WeatherPage(): JSX.Element {
    const { requestBefore } = useGeolocation();

    if (!requestBefore) {
        return <GeolocationPermissionRequest />;
    }

    return (
        <div className={wrapper()}>
            <header className={header()}>
                <SearchBar />
            </header>
            <main className={main()}>
                <Weather />
            </main>
            <footer className={footer()}>
                <small>
                    Created by{' '}
                    <a
                        className={anchor()}
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
