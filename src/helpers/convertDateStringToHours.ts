export function convertDateStringToHours(dateStr: string): string {
    const d = new Date(dateStr);
    const h = d.getHours();

    const fHours = h < 10 ? `0${h}` : h;

    return `${fHours}:00`;
}
