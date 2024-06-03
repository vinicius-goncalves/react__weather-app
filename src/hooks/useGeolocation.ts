import { useEffect, useState } from 'react';
import useLocalStorage from './useLocalStorage';

interface IGeolocation {
    isFetching: boolean;
    requestBefore?: boolean;
    error?: boolean;
    latitude?: number;
    longitude?: number;
}

function useGeolocation(): IGeolocation {
    const [requestBefore, setGeolocationRequestedBefore] = useLocalStorage(
        'geolocation_requested_before',
        false
    );

    const [geolocation, setGeolocation] = useState<IGeolocation | null>({
        isFetching: true,
        requestBefore,
    });

    useEffect(() => {
        const onSuccess = (gp: GeolocationPosition) => {
            const { latitude, longitude } = gp.coords;
            setGeolocation({
                isFetching: false,
                requestBefore,
                latitude,
                longitude,
            });
        };

        const onError = () => {
            setGeolocation((state) => ({
                ...state,
                isFetching: false,
                error: true,
            }));
        };

        const id = navigator.geolocation.watchPosition(onSuccess, onError, {
            enableHighAccuracy: false,
            timeout: 60 * 1000,
        });

        return () => {
            navigator.geolocation.clearWatch(id);
            setGeolocationRequestedBefore(true);
        };
    }, [requestBefore, setGeolocationRequestedBefore]);

    return geolocation as IGeolocation;
}

export default useGeolocation;
