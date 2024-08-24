import { tv } from 'tailwind-variants';
import GoogleIcon from '../../../GoogleIcon';

interface Props {
    icon: string;
    title: string;
}

const weatherSmallDescription = tv({
    slots: {
        wrapper: 'flex justify-center items-center text-sm gap-1 mt-2.5',
        googleIcon: 'text-white/90',
    },
})();

const { wrapper, googleIcon } = weatherSmallDescription;

function WeatherCardInformation({ icon, title }: Props): JSX.Element {
    return (
        <div className={wrapper()}>
            <GoogleIcon icon={icon} className={googleIcon()} />
            <p>{title}</p>
        </div>
    );
}

export default WeatherCardInformation;
