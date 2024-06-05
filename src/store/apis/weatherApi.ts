import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import IWeather from '../../types/Weather/IWeather';
import IWeatherResponse from '../../types/WeatherResponse/IWeatherResponse';
import transformWeatherResponse from '../../utils/transformWeatherResponse';

const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY as string;

const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `https://api.weatherapi.com/v1/`,
    }),
    endpoints: (builder) => ({
        getCityWeather: builder.query<IWeather, { q: string | null }>({
            query: ({ q }) => ({
                url: `forecast.json?key=${WEATHER_API_KEY}&q=${q}&days=2`,
                method: 'GET',
                cache: 'force-cache',
                mode: 'cors',
            }),
            transformResponse: (response: IWeatherResponse) => {
                const tWR = transformWeatherResponse(response);
                return tWR;
            },
        }),
    }),
});

export const { useGetCityWeatherQuery } = weatherApi;
weatherApi.endpoints.getCityWeather.useQuery;
export default weatherApi;
