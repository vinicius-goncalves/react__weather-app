function WeatherInfoSkeleton(): JSX.Element {
    return (
        <div className="bg-color0 h-[inherit] flex items-center flex-auto gap-4 p-2.5">
            <span className="block w-16 h-16 bg-gray-50/10" />
            <div className="flex flex-col gap-2">
                <span className="block bg-gray-50/10 py-2 px-12" />
                <span className="block bg-gray-50/10 py-3 px-16" />
            </div>
        </div>
    );
}

export default WeatherInfoSkeleton;
