import GoogleIconProps from '../types/Props/GoogleIconProps';

function GoogleIcon({ icon, className }: GoogleIconProps): JSX.Element {
    return (
        <span className={`material-symbols-outlined text-white ${className}`}>
            {icon}
        </span>
    );
}

export default GoogleIcon;
