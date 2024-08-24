import { tv } from 'tailwind-variants';
import GeolocationPermissionRequest from '../components/Alternatives/GeolocationPermissionRequest';
import SearchBar from '../components/Search/SearchBar';
import Weather from '../components/Weather/Weather';
import useGeolocation from '../hooks/useGeolocation';

const weatherPage = tv({
    slots: {
        wrapper: 'min-h-screen min-w-full bg-color1 bg-no-repeat p-3',
        header: 'flex w-full justify-center',
        main: 'mt-2.5',
        footer: 'm-3 text-center text-color3',
        anchor: 'text-white transition-opacity duration-200 hover:opacity-60',
    },
})();

const { wrapper, header, main, footer, anchor } = weatherPage;

function WeatherPage(): JSX.Element {
    const { askedPermission } = useGeolocation();

    if (!askedPermission) {
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
