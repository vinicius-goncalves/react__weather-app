import { useEffect, useRef, useState } from 'react';
import useLocalStorage from './useLocalStorage';

interface IGeolocation {
    isFetching: boolean;
    requestBefore?: boolean;
    error?: boolean;
    latitude?: number;
    longitude?: number;
}

interface IGeolocationOptions {
    watchPosition?: boolean;
}

function useGeolocation({ watchPosition = true }: IGeolocationOptions = {}): IGeolocation {
    const [requestBefore, setGeolocationRequestedBefore] = useLocalStorage('geolocation_requested_before', false);
    const watchId = useRef<number>(-1);

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

        const positionOptions: PositionOptions = {
            enableHighAccuracy: false,
            timeout: 60 * 1000,
        };

        if (watchPosition) {
            const id = navigator.geolocation.watchPosition(onSuccess, onError, positionOptions);
            watchId.current = id;
            return;
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError, positionOptions);

        return () => {
            navigator.geolocation.clearWatch(watchId.current);
            setGeolocationRequestedBefore(true);
        };
    }, [requestBefore, setGeolocationRequestedBefore, watchPosition]);

    return geolocation as IGeolocation;
}

export default useGeolocation;
