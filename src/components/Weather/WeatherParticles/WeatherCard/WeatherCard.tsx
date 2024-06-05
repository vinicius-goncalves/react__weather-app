import IWeather from '../../../../types/Weather/IWeather';
import getWeatherIconByCode from '../../../../utils/getWeatherIconByCode';
import GoogleIcon from '../../../GoogleIcon';
import WeatherCardInformation from './WeatherSmallDescription';

interface WeatherProps {
    weather: IWeather;
}

function WeatherCard({ weather }: WeatherProps): JSX.Element {
    return (
        <div className="bg-color0 border border-color0 p-12 w-full flex flex-col items-center max-sm:m-auto md:max-w-[250px]">
            <GoogleIcon icon="cloud" />
            <h2 className="text-lg">{weather.city.name}</h2>
            <header className="flex flex-column text-center">
                <h2 className="font-normal text-2xl">
                    {weather.weather.temp_c}°
                </h2>
            </header>
            <hr className="bg-color3 w-full mt-3" />
            <div className="mt-4 flex flex-col items-start">
                <WeatherCardInformation
                    icon={getWeatherIconByCode(
                        weather.weather.condition.code,
                        weather.astro_time.is_day
                    )}
                    title={weather.weather.condition.text}
                />
                <WeatherCardInformation
                    icon="location_on"
                    title={weather.city.country}
                />
            </div>
        </div>
    );
}

export default WeatherCard;
