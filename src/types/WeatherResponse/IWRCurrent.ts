interface IWRCurrent {
    cloud: number;
    wind_kph: number;
    last_updated: number;
    temp_c: number;
    condition: {
        text: string;
        code: number;
    };
    is_day?: number;
}

export default IWRCurrent;
