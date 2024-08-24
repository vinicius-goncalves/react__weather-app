import { tv } from 'tailwind-variants';
import { useAppSelector } from '../../hooks/useAppSelector';
import WeatherPageSkeleton from '../Skeletons/Weather/WeatherPageSkeleton';
import WeatherCard from './WeatherParticles/WeatherCard/WeatherCard';
import WeatherHourlyForecast from './WeatherParticles/WeatherInfos/WeatherHourlyForecast';
import WeatherParticleInfo from './WeatherParticles/WeatherInfos/WeatherInfo';

const twClasses = tv({
    slots: {
        wrapper: 'flex flex-col gap-2.5',
        content: 'text-white text-4xl flex gap-2.5 max-md:flex-col',
        flexWrapper: 'w-full flex gap-2.5',
        flexColumns: 'flex flex-col gap-2.5 w-full',
        asideContent: 'grid grid-cols-6 gap-2.5 max-md:grid-cols-3',
    },
})();

const { wrapper, content, flexWrapper, flexColumns, asideContent } = twClasses;

function Weather(): JSX.Element {
    const { weather, status } = useAppSelector(({ weatherSlice }) => weatherSlice);

    if (status.isFetching || status.isUninitialized || !weather) {
        return <WeatherPageSkeleton />;
    }

    const { weather: w, astro_time, forecast, city } = weather;

    return (
        <div className={wrapper()}>
            <div className={content()}>
                <WeatherCard weather={weather} />
                <div className={flexWrapper()}>
                    <div className={flexColumns()}>
                        <WeatherParticleInfo icon="water_lux" title="Sunrise" info={astro_time.sunrise} />
                        <WeatherParticleInfo icon="partly_cloudy_day" title="Cloud cover" info={`${w.cloud}%`} />
                        <WeatherParticleInfo icon="air" title="Wind K/m" info={`${w.wind_kph} K/m`} />
                    </div>
                    <div className="flex flex-col gap-2.5 w-full">
                        <WeatherParticleInfo icon="wb_twilight" title="Sunset" info={astro_time.sunset} />
                        <WeatherParticleInfo
                            icon="dark_mode"
                            title="Rain condition"
                            info={`${forecast[0].chance_of_rain}%`}
                        />
                        <WeatherParticleInfo icon="schedule" title="Local time" info={city.localtime} />
                    </div>
                </div>
            </div>
            <aside className={asideContent()}>
                <WeatherHourlyForecast weather={weather} />
            </aside>
        </div>
    );
}

export default Weather;
