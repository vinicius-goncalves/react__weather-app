import { tv } from 'tailwind-variants';

const weatherHourlyForecastSkeleton = tv({
    base: 'flex flex-col items-center justify-between w-full gap-3 bg-color0 h-32',
});

function WeatherHourlyForecastSkeleton(): JSX.Element {
    return <div className={weatherHourlyForecastSkeleton()} />;
}

export default WeatherHourlyForecastSkeleton;
