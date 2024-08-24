import { tv } from 'tailwind-variants';

const twClasses = tv({
    slots: {
        wrapperSkeleton: 'bg-color0 h-[inherit] flex items-center flex-auto gap-4 p-2.5',
        iconSkeleton: 'block w-16 h-16 bg-gray-50/10',
        flexCol: 'flex flex-col gap-2',
        descriptionSkeleton: 'block bg-gray-50/10',
    },
})();

const { wrapperSkeleton, iconSkeleton, flexCol, descriptionSkeleton } = twClasses;

function WeatherInfoSkeleton(): JSX.Element {
    return (
        <div className={wrapperSkeleton()}>
            <span className={iconSkeleton()} />
            <div className={flexCol()}>
                <span className={descriptionSkeleton({ className: 'py-2 px-12' })} />
                <span className={descriptionSkeleton({ className: 'py-3 px-16' })} />
            </div>
        </div>
    );
}

export default WeatherInfoSkeleton;
