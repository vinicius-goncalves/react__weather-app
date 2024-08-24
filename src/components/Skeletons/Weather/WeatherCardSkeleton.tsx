import { tv } from 'tailwind-variants';

const weatherCardSkeleton = tv({
    base: 'block bg-color0 p-3 min-h-full w-full max-md:h-64',
});

function WeatherCardSkeleton(): JSX.Element {
    return <span className={weatherCardSkeleton()} />;
}

export default WeatherCardSkeleton;
