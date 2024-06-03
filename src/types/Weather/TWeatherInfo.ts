type TWeatherInfo = {
    city: { name: string; country: string; localTime: Date };
    astro: { sunset: number; sunrise: number };
    weather: {
        windKph: number;
        cloudCover: number;
        changeOfRain: number;
        degrees: number;
        description: string;
        codeCondition: number;
    };
    hourlyForecast: object[];
};

export default TWeatherInfo;
