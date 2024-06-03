interface IWRForecastAstro {
    sunset: `${number}:${number} ${'PM' | 'AM'}`;
    sunrise: `${number}:${number} ${'PM' | 'AM'}`;
    is_day: boolean;
}

export default IWRForecastAstro;
