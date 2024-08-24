import { useCallback, useState } from 'react';

function useLocalStorage<T>(key: string, initialValue: T) {
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (err) {
            console.warn(err);
            return initialValue;
        }
    });

    const setValue = useCallback(
        (value: T | ((target: T) => T)) => {
            try {
                const v = value instanceof Function ? value(storedValue) : value;
                setStoredValue(v);
                localStorage.setItem(key, JSON.stringify(v));
            } catch (err) {
                console.warn(err);
            }
        },

        [storedValue, key],
    );

    return [storedValue, setValue] as const;
}

export default useLocalStorage;
