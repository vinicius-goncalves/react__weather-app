import TWeatherIconMap from '../types/TWeatherIconMap';

const nightIcons: TWeatherIconMap = {
    1000: 'clear_night',
    1003: 'partly_cloudy_night',
};

const dayIcons: TWeatherIconMap = {
    1000: 'clear_day',
    1003: 'partly_cloudy_day',
};

function getIcon(code: number, isDay: boolean): string {
    return (isDay ? dayIcons : nightIcons)[code] as string;
}

function getWeatherIconByCode(code: number, isDay: boolean): string {
    return getIcon(code, isDay);
}

export default getWeatherIconByCode;
