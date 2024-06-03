import { useCallback, useState } from 'react';
import debounce from '../utils/debounce';

function useInputQuery(delayMs: number = 1000, initialQuery: string = '') {
    const [query, setQuery] = useState<string>(initialQuery);

    const eventFunc = (input: React.FormEvent<HTMLInputElement> | string) => {
        if (typeof input === 'string') {
            setQuery(input);
            return;
        }

        setQuery((input.target as HTMLInputElement).value);
    };

    const debouncedInput = debounce(eventFunc, delayMs);
    const updateQuery = useCallback(debouncedInput, [debouncedInput, delayMs]);

    return { query, updateQuery };
}
export default useInputQuery;
