function WeatherCardInformation({
    icon,
    title,
}: {
    icon: string;
    title: string;
}): JSX.Element {
    return (
        <div className="flex justify-center items-center text-sm gap-1 mt-2.5">
            <span className="material-symbols-outlined weather-small-icon text-white/70">
                {icon}
            </span>
            <p>{title}</p>
        </div>
    );
}

export default WeatherCardInformation;
