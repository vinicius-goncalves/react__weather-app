import { useAppSelector } from '../../hooks/useAppSelector';
import WeatherPageSkeleton from '../Skeletons/WeatherPageSkeleton';
import WeatherCard from './WeatherCard/WeatherCard';
import WeatherParticleInfo from './WeatherParticleInfo.tsx/WeatherInfo';
import WeatherHourForecast from './WeatherHourForecast/WeatherHourForecast';

function Weather(): JSX.Element {
    const { weather, status } = useAppSelector(
        ({ weatherSlice }) => weatherSlice
    );

    if (status.isFetching || status.isUninitialized || !weather) {
        return <WeatherPageSkeleton />;
    }

    return (
        <div className="flex flex-col gap-2.5">
            <div className="text-white text-4xl flex gap-2.5 max-md:flex-col">
                <WeatherCard
                    cityName={weather.city.name}
                    country={weather.city.country}
                    degrees={weather.weather.temp_c}
                />
                <div className="w-full flex gap-2.5">
                    <div className="flex flex-col gap-2.5 w-full">
                        <WeatherParticleInfo
                            icon="water_lux"
                            title="Sunrise"
                            info={weather.astro_time.sunrise}
                        />
                        <WeatherParticleInfo
                            icon="partly_cloudy_day"
                            title="Cloud cover"
                            info={`${weather.weather.cloud}%`}
                        />
                        <WeatherParticleInfo
                            icon="air"
                            title="Wind K/m"
                            info={`${weather.weather.wind_kph} K/m`}
                        />
                    </div>
                    <div className="flex flex-col gap-2.5 w-full">
                        <WeatherParticleInfo
                            icon="wb_twilight"
                            title="Sunset"
                            info={weather.astro_time.sunset}
                        />
                        <WeatherParticleInfo
                            icon="dark_mode"
                            title="Rain condition"
                            info={`${weather.forecast[0].chance_of_rain}%`}
                        />
                        <WeatherParticleInfo
                            icon="schedule"
                            title="Local time"
                            info={weather.city.localtime}
                        />
                    </div>
                </div>
            </div>
            <aside className="grid grid-cols-6 gap-2.5 max-md:grid-cols-3">
                {weather.forecast.map((dailyForecast, index) => (
                    <WeatherHourForecast
                        key={index}
                        degrees={Math.round(dailyForecast.temp_c)}
                        hour={dailyForecast.time}
                        text_condition={dailyForecast.condition.text}
                        code_condition={dailyForecast.condition.code}
                    />
                ))}
                {/* {() => console.log(weather)} */}
            </aside>
        </div>
    );
}

export default Weather;
