import { useEffect, useRef } from 'react';
import { tv } from 'tailwind-variants';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import useGeolocation from '../../hooks/useGeolocation';
import useInputQuery from '../../hooks/useInputQuery';
import { useGetCityWeatherQuery } from '../../store/apis/weatherApi';
import { weatherActions } from '../../store/slices/weatherSlice';
import GoogleIcon from '../GoogleIcon';
import SearchOptions from './SearchOptions';

const searchBar = tv({
    slots: {
        wrapper:
            'color-white flex w-full max-w-xl items-center justify-center border border-color3 bg-color0 p-4 focus-within:border-white',
        content: 'flex w-full items-center',
        input: 'ml-2 w-full overflow-hidden border-none bg-transparent text-sm text-white outline-none placeholder:opacity-60',
    },
})();

const { wrapper, content, input } = searchBar;

function Search(): JSX.Element {
    const { query, updateQuery } = useInputQuery(1100);

    const dispatch = useAppDispatch();
    const geolocation = useGeolocation({ watchPosition: false });
    const inputQuery = useRef<HTMLInputElement | null>(null);

    const { data: weather, ...weatherApi } = useGetCityWeatherQuery({ q: query }, { skip: !query });

    useEffect(() => {
        if (!geolocation.isFetching && !geolocation.error) {
            updateQuery(`${geolocation.latitude},${geolocation.longitude}`);
        }
    }, [geolocation, updateQuery]);

    useEffect(() => {
        dispatch(weatherActions.setWeather(weather));
        dispatch(
            weatherActions.setStatus({
                isLoading: weatherApi.isLoading,
                isFetching: weatherApi.isFetching,
                isUninitialized: weatherApi.isUninitialized,
            }),
        );
    }, [weather, weatherApi, dispatch]);

    function setGeolocation() {
        if (!geolocation.error && inputQuery.current) {
            const [latitude, longitude] = [geolocation.latitude, geolocation.longitude];
            inputQuery.current.value = `${latitude}, ${longitude}`;
            updateQuery(`${latitude}, ${longitude}`);
        }
    }

    return (
        <div className={wrapper()}>
            <div className={content()}>
                <GoogleIcon icon="search" />
                <input
                    className={input()}
                    type="text"
                    placeholder="Ratabaná, BR"
                    onInput={(ev) => updateQuery((ev.target as HTMLInputElement).value)}
                    ref={inputQuery}
                />
            </div>
            <SearchOptions icon="my_location" onClick={setGeolocation} />
        </div>
    );
}

export default Search;
