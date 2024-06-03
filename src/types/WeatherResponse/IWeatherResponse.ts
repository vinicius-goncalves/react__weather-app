import { IWRCurrent, IWRForecast, IWRLocation } from './_WeatherResponse';

interface IWeatherResponse {
    current: IWRCurrent;
    forecast: {
        forecastday: Array<IWRForecast>;
    };
    location: IWRLocation;
}

export default IWeatherResponse;
