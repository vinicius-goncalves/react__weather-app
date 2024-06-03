/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-this-alias */
export default function debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number = 1000,
    immediate: boolean = false
): (...args: Parameters<T>) => void {
    let timeout: number | null = null;

    return function (this: unknown, ...args: Parameters<T>) {
        const context = this;

        const later = () => {
            timeout = null;
            if (!immediate) {
                func.apply(context, args);
            }
        };

        const shouldCallNow = immediate && !timeout;
        if (timeout) clearTimeout(timeout);
        timeout = window.setTimeout(later, wait);
        if (shouldCallNow) func.apply(context, args);
    };
}
