interface IWRForecastHour {
    temp_c: number;
    condition: {
        code: number;
        text: string;
    };
    time_epoch: number;
    time: string;
    chance_of_rain: number;
}

export default IWRForecastHour;
