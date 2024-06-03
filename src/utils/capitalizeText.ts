function capitalizeText(text: string): string {
    return text
        .split('')
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(' ');
}

export default capitalizeText;
