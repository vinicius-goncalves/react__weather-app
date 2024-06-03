import { useEffect, useRef } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import useInputQuery from '../../hooks/useInputQuery';
import { useGetCityWeatherQuery } from '../../store/apis/weatherApi';
import GoogleIcon from '../GoogleIcon';
import SearchOptions from '../SearchOptions/SearchOptions';
import { weatherActions } from '../../store/slices/weatherSlice';
import useGeolocation from '../../hooks/useGeolocation';

function Search(): JSX.Element {
    const { query, updateQuery } = useInputQuery(1100);
    const dispatch = useAppDispatch();
    const { error, latitude, longitude } = useGeolocation();
    const inputQuery = useRef<HTMLInputElement | null>(null);

    const {
        data: weather,
        isLoading,
        isFetching,
        isUninitialized,
    } = useGetCityWeatherQuery(
        { cityName: query },
        { skip: !query, refetchOnFocus: true }
    );

    useEffect(() => {
        if (isUninitialized && !error) {
            updateQuery(`${latitude},${longitude}`);
        }
    }, [isUninitialized, error, latitude, longitude, updateQuery]);

    useEffect(() => {
        dispatch(weatherActions.setWeather(weather));
    }, [weather, dispatch]);

    useEffect(() => {
        dispatch(
            weatherActions.setStatus({
                isLoading,
                isFetching,
                isUninitialized,
            })
        );
    }, [isLoading, isFetching, isUninitialized, dispatch]);

    function updateSearchOptions() {
        if (!error && inputQuery.current) {
            inputQuery.current.value = `${latitude}, ${longitude}`;
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
            <SearchOptions icon="my_location" onClick={updateSearchOptions} />
        </div>
    );
}

export default Search;
