import GoogleIcon from '../../../GoogleIcon';

function WeatherInfo({
    icon,
    title,
    info,
}: {
    icon: string;
    title: string;
    info: unknown;
}): JSX.Element {
    return (
        <div className="bg-color0 h-[inherit] flex items-center flex-auto gap-4 p-2.5 w-full">
            <GoogleIcon icon={icon} className="text-[3rem]" />
            <div>
                <p className="text-white text-base">{title}</p>
                <p className="text-color3 text-base">{String(info)}</p>
            </div>
        </div>
    );
}

export default WeatherInfo;
