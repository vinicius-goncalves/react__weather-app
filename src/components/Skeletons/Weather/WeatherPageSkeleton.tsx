import { tv } from 'tailwind-variants';
import WeatherCardSkeleton from './WeatherCardSkeleton';
import WeatherHourlyForecastSkeleton from './WeatherHourlyForecastSkeleton';
import WeatherInfoSkeleton from './WeatherInfoSkeleton';

const twClasses = tv({
    slots: {
        wrapper: 'flex flex-col gap-2.5 w-full animate-pulse',
        content: 'text-white text-4xl flex gap-2.5 max-md:flex-col w-full',
        flexContent: 'w-full flex gap-2.5 max-sm:flex-wrap',
        flexCol: 'w-full flex flex-col gap-2',
        gridContent: 'grid grid-cols-6 gap-2.5 max-md:grid-cols-3',
    },
})();

const { wrapper, content, flexContent, flexCol, gridContent } = twClasses;

function WeatherPageSkeleton(): JSX.Element {
    const WeatherHourlyForecastSkeletonItems: JSX.Element[] = new Array(6)
        .fill(undefined)
        .map((_, index) => <WeatherHourlyForecastSkeleton key={index} />);

    return (
        <div className={wrapper()}>
            <div className={content()}>
                <WeatherCardSkeleton />
                <div className={flexContent()}>
                    <div className={flexCol()}>
                        <WeatherInfoSkeleton />
                        <WeatherInfoSkeleton />
                        <WeatherInfoSkeleton />
                    </div>
                    <div className={flexCol()}>
                        <WeatherInfoSkeleton />
                        <WeatherInfoSkeleton />
                        <WeatherInfoSkeleton />
                    </div>
                </div>
            </div>
            <aside className={gridContent()}>{WeatherHourlyForecastSkeletonItems}</aside>
        </div>
    );
}

export default WeatherPageSkeleton;
