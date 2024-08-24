import TWeatherIconMap from '../types/TWeatherIconMap';

const commonIcons = {
    1063: 'rainy',
    1153: 'rainy',
    1183: 'rainy',
};

function createWeatherIcons(weatherIconsMap: TWeatherIconMap, defaultIcons?: TWeatherIconMap) {
    return { ...weatherIconsMap, ...defaultIcons };
}

const nightIcons: TWeatherIconMap = createWeatherIcons(
    {
        1000: 'clear_night',
        1003: 'partly_cloudy_night',
    },
    commonIcons,
);

const dayIcons: TWeatherIconMap = createWeatherIcons(
    {
        1000: 'clear_day',
        1003: 'partly_cloudy_day',
    },
    commonIcons,
);

function getIcon(code: number, isDay: boolean): string {
    return (isDay ? dayIcons : nightIcons)[code] as string;
}

export function getWeatherIconByCode(code: number, isDay: boolean): string {
    return getIcon(code, isDay);
}
