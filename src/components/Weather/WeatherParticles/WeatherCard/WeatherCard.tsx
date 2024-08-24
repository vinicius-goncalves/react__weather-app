import { tv } from 'tailwind-variants';
import IWeather from '../../../../types/Weather/IWeather';
import { getWeatherIconByCode } from '../../../../utils';
import GoogleIcon from '../../../GoogleIcon';
import WeatherCardInformation from './WeatherSmallDescription';

interface WeatherProps {
    weather: IWeather;
}

const weatherCard = tv({
    slots: {
        wrapper:
            'bg-color0 border border-color0 p-12 w-full flex flex-col items-center max-sm:m-auto md:max-w-[250px]',
        cityName: 'text-lg',
        weatherTempWrapper: 'flex flex-column text-center',
        weatherTempContent: 'font-normal text-2xl',
        separator: 'bg-color3 w-full mt-3',
        weatherCardsWrapper: 'mt-4 flex flex-col items-start',
    },
})();

const { wrapper, cityName, weatherTempWrapper, weatherTempContent, separator, weatherCardsWrapper } = weatherCard;

function WeatherCard({ weather }: WeatherProps): JSX.Element {
    return (
        <div className={wrapper()}>
            <GoogleIcon icon="cloud" />
            <h2 className={cityName()}>{weather.city.name}</h2>
            <header className={weatherTempWrapper()}>
                <h2 className={weatherTempContent()}>{weather.weather.temp_c}°</h2>
            </header>
            <hr className={separator()} />
            <div className={weatherCardsWrapper()}>
                <WeatherCardInformation
                    icon={getWeatherIconByCode(weather.weather.condition.code, weather.astro_time.is_day)}
                    title={weather.weather.condition.text}
                />
                <WeatherCardInformation icon="location_on" title={weather.city.country} />
            </div>
        </div>
    );
}

export default WeatherCard;
