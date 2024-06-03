import GoogleIcon from '../../GoogleIcon';
import WeatherParticle from './WeatherParticle';
import './weather-card.css';

function WeatherCard({
    cityName,
    country,
    degrees,
}: {
    cityName: string;
    country: string;
    degrees: number;
}): JSX.Element {
    return (
        <div className="bg-color0 border border-color0 p-12 w-full flex flex-col items-center max-sm:m-auto md:max-w-[250px]">
            <GoogleIcon icon="cloud" />
            <h2 className="text-lg">{cityName}</h2>
            <header className="flex flex-column text-center">
                <h2 className="font-normal text-2xl">{degrees}°</h2>
            </header>
            <hr />
            <div className="mt-4 flex flex-col items-start">
                <WeatherParticle icon="cloud" title="Clouded" />
                <WeatherParticle icon="location_on" title={country} />
            </div>
        </div>
    );
}

export default WeatherCard;
