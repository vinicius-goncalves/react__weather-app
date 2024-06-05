import GoogleIcon from '../GoogleIcon';

function GeolocationPermissionRequest(): JSX.Element {
    return (
        <div className="min-w-full min-h-screen flex items-center justify-center flex-col text-center">
            <GoogleIcon icon="distance" className="text-8xl" />
            <h1 className="text-white text-2xl font-bold">
                optional permission request
            </h1>
            <p className="text-gray-500">
                To have a better precision, this application requires your
                location. Do you allow?
            </p>
            <small className="text-gray-300/10 m-4">
                If you deny (or have denied) Don't worry! The application has a
                manual search input to you search whatever want.
            </small>
        </div>
    );
}

export default GeolocationPermissionRequest;
