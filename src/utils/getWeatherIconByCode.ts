import TWeatherIconMap from '../types/TWeatherIconMap';

const nightIcons: TWeatherIconMap = {
    1000: 'clear_night',
    1003: 'partly_cloudy_night',
    1063: 'rainy',
    1153: 'rainy',
    1183: 'rainy',
};

const dayIcons: TWeatherIconMap = {
    1000: 'clear_day',
    1003: 'partly_cloudy_day',
    1063: 'rainy',
    1153: 'rainy',
    1183: 'rainy',
};

function getIcon(code: number, isDay: boolean): string {
    return (isDay ? dayIcons : nightIcons)[code] as string;
}

export function getWeatherIconByCode(code: number, isDay: boolean): string {
    return getIcon(code, isDay);
}
