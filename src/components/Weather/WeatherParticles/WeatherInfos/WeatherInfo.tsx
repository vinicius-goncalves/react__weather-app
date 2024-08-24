import { tv } from 'tailwind-variants';
import GoogleIcon from '../../../GoogleIcon';

interface Props {
    icon: string;
    title: string;
    info: unknown;
}

const weatherInfo = tv({
    slots: {
        wrapper: 'bg-color0 h-[inherit] flex items-center flex-auto gap-4 p-2.5 w-full',
        googleIcon: 'text-[3rem]',
        title: 'text-white text-base',
        description: 'text-color3 text-base',
    },
})();

const { wrapper, googleIcon, title: twTitle, description } = weatherInfo;

function WeatherInfo({ icon, title, info }: Props): JSX.Element {
    return (
        <div className={wrapper()}>
            <GoogleIcon icon={icon} className={googleIcon()} />
            <div>
                <p className={twTitle()}>{title}</p>
                <p className={description()}>{String(info)}</p>
            </div>
        </div>
    );
}

export default WeatherInfo;
