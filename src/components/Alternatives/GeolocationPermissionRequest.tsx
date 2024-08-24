import { tv } from 'tailwind-variants';
import GoogleIcon from '../GoogleIcon';

const twClasses = tv({
    slots: {
        wrapper:
            'flex min-h-screen min-w-full flex-col items-center justify-center bg-color1 bg-no-repeat p-3 text-center',
        googleIcon: 'text-8xl',
        title: 'text-2xl font-bold text-white',
        description: 'text-gray-500',
        smallDescription: 'm-4 text-gray-300/10',
    },
})();

const { wrapper, googleIcon, title, description, smallDescription } = twClasses;

function GeolocationPermissionRequest(): JSX.Element {
    return (
        <div className={wrapper()}>
            <GoogleIcon icon="distance" className={googleIcon()} />
            <h1 className={title()}>optional permission request</h1>
            <p className={description()}>
                To have a better precision, this application requires your location. Do you allow?
            </p>
            <small className={smallDescription()}>
                If you deny (or have denied) Don't worry! The application has a manual search input to you search
                whatever you want.
            </small>
        </div>
    );
}

export default GeolocationPermissionRequest;
