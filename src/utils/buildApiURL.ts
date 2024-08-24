type WeatherSearchOptions = {
    query: string;
    forecastDays?: number;
};

function buildURLApiWithKey(): URL {
    const url: URL = new URL(
        `https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_WEATHER_API_KEY}`
    );
    const params: URLSearchParams = url.searchParams;

    params.set('key', import.meta.env.VITE_WEATHER_API_KEY);

    return url;
}

export function buildURLWeatherAPI(weatherSearchOptions: WeatherSearchOptions): string {
    const url = buildURLApiWithKey();
    const params = url.searchParams;

    params.set('q', weatherSearchOptions.query);
    params.set('days', String(weatherSearchOptions.forecastDays ?? 6));

    return url.toString();
}
