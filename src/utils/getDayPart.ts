const dayPartLookup = {
    '0-6': 'Evening',
    '6-11': 'Morning',
    '12-17': 'Afternoon',
    '18-23': 'Evening',
};

const hourFormatter: Intl.DateTimeFormat = Intl.DateTimeFormat('pt-BR', { hour: '2-digit' });

export function getDayPart(): string {
    const currHour: string = hourFormatter.format(new Date());

    const partOfTheDayFound: [string, string] | undefined = Object.entries(dayPartLookup).find(
        ([hourRange]): boolean => {
            const [startHour, endHour]: string[] = hourRange.split('-');
            return currHour >= startHour && currHour <= endHour;
        }
    );

    return partOfTheDayFound ? `Good ${partOfTheDayFound[1]}!` : 'Have a good day!';
}
