import { tv } from 'tailwind-variants';
import GoogleIconProps from '../types/Props/GoogleIconProps';

const googleIcon = tv({
    base: 'material-symbols-outlined text-white',
});

function GoogleIcon({ icon, className }: GoogleIconProps): JSX.Element {
    return <span className={googleIcon({ className })}>{icon}</span>;
}

export default GoogleIcon;
