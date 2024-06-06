// return {
//     city: { name, country, localTime: localtime },
//     astro: { sunrise, sunset },
//     weather: {
//         windKph: wind_kph,
//         cloudCover: cloud_cover,
//         changeOfRain: day.daily_chance_of_rain,
//         degrees: temp_c,
//         description: text,
//         codeCondition: code,
//     },
//     hourlyForecast,

import IWRCurrent from '../WeatherResponse/IWRCurrent';
import IWRForecastAstro from '../WeatherResponse/IWRForecastAstro';
import IWRHourlyForecast from '../WeatherResponse/IWRForecastHour';
import IWRLocation from '../WeatherResponse/IWRLocation';

// }
interface IWeather {
    city: IWRLocation;
    astro_time: IWRForecastAstro;
    weather: IWRCurrent;
    forecast: IWRHourlyForecast[];
}

export default IWeather;
