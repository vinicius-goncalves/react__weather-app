import IWRCurrent from '../WeatherResponse/IWRCurrent';
import IWRForecastAstro from '../WeatherResponse/IWRForecastAstro';
import IWRHourlyForecast from '../WeatherResponse/IWRForecastHour';
import IWRLocation from '../WeatherResponse/IWRLocation';

interface IWeather {
    city: IWRLocation;
    astro_time: IWRForecastAstro;
    weather: IWRCurrent;
    forecast: IWRHourlyForecast[];
}

export default IWeather;
