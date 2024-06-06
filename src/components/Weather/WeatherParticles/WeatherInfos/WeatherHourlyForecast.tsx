// .weather-hour-forecast-wrapper {

import IWeather from '../../../../types/Weather/IWeather';
import IWRHourlyForecast from '../../../../types/WeatherResponse/IWRForecastHour';
import convertDateStringToHours from '../../../../utils/convertDateStringToHours';
import getWeatherIconByCode from '../../../../utils/getWeatherIconByCode';
import GoogleIcon from '../../../GoogleIcon';

interface WHFProps {
    weather: IWeather;
}

interface WHFItemProps {
    forecast: IWRHourlyForecast;
}

function WeatherHourlyForecastItem({ forecast }: WHFItemProps) {
    const time: string = convertDateStringToHours(forecast.time);
    const timeEpoch: number = forecast.time_epoch;
    const degrees: number = forecast.temp_c;
    const isDay: boolean = forecast.is_day == 1;

    const { text: textCondition, code: codeCondition } = forecast.condition;

    return (
        <div
            key={timeEpoch}
            className="flex flex-col items-center justify-between w-full bg-color0 p-4 hover:opacity-95 hover:cursor-pointer hover:scale-[1.02]">
            <div className="text-center">
                <p className="text-white">{time}</p>
                <small className="text-color3">{textCondition}</small>
            </div>
            <div className="text-center m-3">
                <GoogleIcon
                    icon={getWeatherIconByCode(codeCondition, isDay)}
                    className="text-color3 text-5xl"
                />
                <p className="text-color3">{degrees}°</p>
            </div>
        </div>
    );
}

function WeatherHourlyForecast({ weather }: WHFProps): JSX.Element {
    return (
        <>
            {weather.forecast.map((forecast) => (
                <WeatherHourlyForecastItem
                    key={forecast.time_epoch}
                    forecast={forecast}
                />
            ))}
        </>
    );
}

export default WeatherHourlyForecast;
