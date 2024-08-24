import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from './useLocalStorage';

interface IGeolocation {
    isFetching: boolean;
    askedPermission?: boolean;
    error?: boolean;
    latitude?: number;
    longitude?: number;
}

interface IGeolocationOptions {
    watchPosition?: boolean;
}

function useGeolocation({ watchPosition = true }: IGeolocationOptions = {}): IGeolocation {
    const [askedPermission, setAskedPermission] = useLocalStorage('asked_geolocation_permission', false);
    const watchId = useRef<number | null>(null);
    const navigate = useNavigate();

    const [geolocation, setGeolocation] = useState<IGeolocation | null>({
        isFetching: true,
    });

    useEffect(() => {
        const handleWithGeolocationPermission = async () => {
            const permissions = navigator.permissions;
            const permissionStatus = await permissions.query({ name: 'geolocation' });
            if (permissionStatus.state !== 'prompt') setAskedPermission(true);

            permissionStatus.addEventListener('change', () => {
                setAskedPermission(true);
                navigate(0);
            });
        };

        handleWithGeolocationPermission();
    }, [setAskedPermission]);

    useEffect(() => {
        const onSuccess = (gp: GeolocationPosition) => {
            const { latitude, longitude } = gp.coords;
            setGeolocation({
                isFetching: false,
                askedPermission,
                latitude,
                longitude,
            });
        };

        const onError = () => {
            setGeolocation((state) => ({
                ...state,
                askedPermission,
                isFetching: false,
                error: true,
            }));
        };

        const positionOptions: PositionOptions = {
            enableHighAccuracy: false,
            timeout: 60 * 1000,
        };

        if (watchPosition) {
            const id = navigator.geolocation.watchPosition(onSuccess, onError, positionOptions);
            watchId.current = id;
        } else {
            navigator.geolocation.getCurrentPosition(onSuccess, onError, positionOptions);
        }

        return () => {
            if (watchId.current) navigator.geolocation.clearWatch(watchId.current);
        };
    }, [askedPermission, watchPosition]);

    return geolocation as IGeolocation;
}

export default useGeolocation;
