import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from './useLocalStorage';

interface IGeolocation {
    isFetching: boolean;
    askedPermission?: boolean;
    error?: boolean;
    latitude?: number;
    longitude?: number;
}

function useGeolocation(): IGeolocation {
    const [askedPermission, setAskedPermission] = useLocalStorage('asked_geolocation_permission', false);
    const navigate = useNavigate();

    const [geolocation, setGeolocation] = useState<IGeolocation | null>({
        isFetching: true,
    });

    useEffect(() => {
        const handleWithGeolocationPermission = async () => {
            try {
                const { permissions } = navigator;
                const permissionStatus = await permissions.query({ name: 'geolocation' });
                if (permissionStatus.state !== 'prompt') setAskedPermission(true);

                const handlePermissionChange = () => {
                    setAskedPermission(true);
                    navigate(0);
                };

                permissionStatus.onchange = handlePermissionChange;
            } catch (err) {
                console.warn(err);
            }
        };

        handleWithGeolocationPermission();
    }, [setAskedPermission, navigate]);

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

        const id = navigator.geolocation.watchPosition(onSuccess, onError, positionOptions);

        return () => {
            navigator.geolocation.clearWatch(id);
        };
    }, [askedPermission]);

    return geolocation as IGeolocation;
}

export default useGeolocation;
