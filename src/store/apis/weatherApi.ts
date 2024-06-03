import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import IWeather from '../../types/Weather/IWeather';
import IWeatherResponse from '../../types/WeatherResponse/IWeatherResponse';
import transformWeatherResponse from '../../utils/transformWeatherResponse';

const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `https://api.weatherapi.com/v1/forecast.json?key=${
            import.meta.env.VITE_WEATHER_API_KEY
        }&`,
    }),
    endpoints: (builder) => ({
        getCityWeather: builder.query<IWeather, { cityName: string | null }>({
            query: ({ cityName }) => ({
                url: `&q=${cityName}&days=2`,
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
