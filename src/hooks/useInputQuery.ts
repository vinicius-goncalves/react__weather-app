import { useCallback, useMemo, useState } from 'react';
import { debounce } from '../utils';

function useInputQuery(delayMs: number = 1000, initialQuery: string = '') {
    const [query, setQuery] = useState<string>(initialQuery);

    const debouncedInput = useMemo(() => {
        const debouncedFn = debounce((value: string) => setQuery(value), delayMs);
        return debouncedFn;
    }, [delayMs]);

    const updateQuery = useCallback(debouncedInput, [debouncedInput]);
    return { query, updateQuery };
}
export default useInputQuery;
