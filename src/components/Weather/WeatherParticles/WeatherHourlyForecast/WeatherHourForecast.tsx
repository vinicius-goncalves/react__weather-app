// .weather-hour-forecast-wrapper {

import { useAppSelector } from '../../../../hooks/useAppSelector';
import getWeatherIconByCode from '../../../../utils/getWeatherIconByCode';
import GoogleIcon from '../../../GoogleIcon';

//     /* padding: 1rem 16rem 0 .56rem; */
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: space-between;
//     margin: 15px;
//     width: 100%;

//     & .weather-forecast-icon {
//         color: var(--color3);
//         font-size: 2.5rem;
//         margin: .25rem 0;
//     }

//     & .weather-forecast-hour {
//         color: var(--color4);
//     }

//     & .weather-forecast-degree {
//         color: var(--color4);
//     }

// }

function WeatherHourForecast({
    hour,
    degrees,
    text_condition,
    code_condition,
}: {
    hour: string;
    degrees: number;
    text_condition: string;
    code_condition: number;
}): JSX.Element {
    const formatHours = (date: string): string => {
        const d = new Date(date);
        const h = d.getHours();
        return `${h < 10 ? `0${h}` : h}:00`;
    };

    const { weather } = useAppSelector(({ weatherSlice }) => weatherSlice);

    return (
        <div className="flex flex-col items-center justify-between w-full bg-color0 p-4">
            <div className="text-center">
                <p className="text-white">{formatHours(hour)}</p>
                <small className="text-color3">{text_condition}</small>
            </div>
            <div className="text-center m-3">
                <GoogleIcon
                    icon={getWeatherIconByCode(
                        code_condition,
                        weather.astro_time.is_day
                    )}
                    className="text-color3 text-5xl"
                />
                <p className="text-color3">{degrees}°</p>
            </div>
        </div>
    );
}

export default WeatherHourForecast;
