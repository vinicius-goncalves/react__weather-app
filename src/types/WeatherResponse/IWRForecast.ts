import { IWRForecastAstro, IWRForecastHour, IWRDay } from './_WeatherResponse';

interface IWRForecast {
    astro: IWRForecastAstro;
    hour: Array<IWRForecastHour>;
    day: IWRDay;
}

export default IWRForecast;
