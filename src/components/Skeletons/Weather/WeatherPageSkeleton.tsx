import WeatherCardSkeleton from './WeatherCardSkeleton';
import WeatherHourlyForecastSkeleton from './WeatherHourlyForecastSkeleton';
import WeatherInfoSkeleton from './WeatherInfoSkeleton';

function WeatherPageSkeleton(): JSX.Element {
    return (
        <div className="flex flex-col gap-2.5 w-full animate-pulse">
            <div className="text-white text-4xl flex gap-2.5 max-md:flex-col w-full">
                <WeatherCardSkeleton />
                <div className="w-full flex gap-2.5 max-sm:flex-wrap">
                    <div className="w-full flex flex-col gap-2">
                        <WeatherInfoSkeleton />
                        <WeatherInfoSkeleton />
                        <WeatherInfoSkeleton />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <WeatherInfoSkeleton />
                        <WeatherInfoSkeleton />
                        <WeatherInfoSkeleton />
                    </div>
                </div>
            </div>
            <aside className="grid grid-cols-6 gap-2.5 max-md:grid-cols-3">
                {new Array(6).fill(undefined).map((_, index) => (
                    <WeatherHourlyForecastSkeleton key={index} />
                ))}
            </aside>
        </div>
    );
}

export default WeatherPageSkeleton;
