interface IWRHourlyForecast {
    temp_c: number;
    condition: {
        code: number;
        text: string;
    };
    time_epoch: number;
    time: string;
    chance_of_rain: number;
    is_day: number;
}

export default IWRHourlyForecast;
