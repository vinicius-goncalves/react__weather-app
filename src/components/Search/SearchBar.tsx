import { useEffect, useRef } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import useGeolocation from '../../hooks/useGeolocation';
import useInputQuery from '../../hooks/useInputQuery';
import { useGetCityWeatherQuery } from '../../store/apis/weatherApi';
import { weatherActions } from '../../store/slices/weatherSlice';
import GoogleIcon from '../GoogleIcon';
import SearchOptions from './SearchOptions';

function Search(): JSX.Element {
    const { query, updateQuery } = useInputQuery(1100);

    const dispatch = useAppDispatch();
    const geolocation = useGeolocation();
    const inputQuery = useRef<HTMLInputElement | null>(null);

    const { data: weather, ...weatherApi } = useGetCityWeatherQuery(
        { q: query },
        { skip: !query, refetchOnFocus: true, refetchOnReconnect: true }
    );

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
            })
        );
    }, [weather, weatherApi, dispatch]);

    function setGeolocation() {
        if (!geolocation.error && inputQuery.current) {
            const [latitude, longitude] = [
                geolocation.latitude,
                geolocation.longitude,
            ];
            inputQuery.current.value = `${latitude}, ${longitude}`;
            updateQuery(`${latitude}, ${longitude}`);
        }
    }

    return (
        <div className="flex justify-center items-center w-full max-w-xl border border-color3 p-4 color-white bg-color0 focus-within:border-white">
            <div className="flex items-center w-full">
                <GoogleIcon icon="search" />
                <input
                    className="ml-2 border-none outline-none bg-transparent text-sm overflow-hidden placeholder:opacity-60 text-white w-full"
                    type="text"
                    placeholder="Ratabaná, BR"
                    onInput={updateQuery}
                    ref={inputQuery}
                />
            </div>
            <SearchOptions icon="my_location" onClick={setGeolocation} />
        </div>
    );
}

export default Search;
