import IWeather from '../types/Weather/IWeather';
import IWRHourlyForecast from '../types/WeatherResponse/IWRForecastHour';
import IWeatherResponse from '../types/WeatherResponse/IWeatherResponse';

function transformToDate(target: string | number): Date {
    if (typeof target === 'string') {
        const dMs = Date.parse(target);
        return new Date(dMs);
    }

    if (typeof target === 'number') {
        return new Date(target);
    }

    throw new TypeError('target is neither string nor number.');
}

function getHourlyForecast(
    todayForecast: IWRHourlyForecast[],
    tomorrowForecast: IWRHourlyForecast[],
    lastTimeUpdated: number
): IWRHourlyForecast[] {
    const dailyForecasts = [...todayForecast, ...tomorrowForecast];
    const hourlyForecast = [];

    for (const forecast of dailyForecasts) {
        if (hourlyForecast.length >= 6) {
            break;
        }

        const forecastTime = transformToDate(forecast.time);
        const timeUpdated = transformToDate(lastTimeUpdated);

        if (forecastTime >= timeUpdated) {
            hourlyForecast.push(forecast);
        }
    }

    return hourlyForecast;
}

export function transformWeatherResponse(weatherResponse: IWeatherResponse): IWeather {
    if (!weatherResponse) {
        throw new Error('Weather response cannot be undefined.');
    }

    const {
        current: currentForecast,
        forecast: { forecastday: dailyForecast },
        location,
    } = weatherResponse;

    const { cloud, wind_kph, last_updated, condition, temp_c, is_day } = currentForecast;

    const todayForecast = dailyForecast[0];
    const tomorrowForecast = dailyForecast[1];

    const { astro, hour: todayHourlyForecast } = todayForecast;
    const { hour: tomorrowHourlyForecast } = tomorrowForecast;

    const { name, country, localtime: local_time } = location;
    const { sunset, sunrise } = astro;

    const currentHourlyForecast = getHourlyForecast(todayHourlyForecast, tomorrowHourlyForecast, last_updated);

    return {
        astro_time: { sunrise, sunset, is_day: is_day == 1 },
        city: { name, country, localtime: local_time },
        weather: { condition, cloud, last_updated, temp_c, wind_kph },
        forecast: currentHourlyForecast,
    };
}
