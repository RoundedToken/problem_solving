import { segmentCodes, segmentNames } from './model';
export function isKnownChar(char: string): char is keyof typeof segmentCodes {
    return char in segmentCodes;
}
export function charToDisplay(char: string, options: {convertToUpperCase?: boolean, unknownChar?: 'exception'}): typeof segmentNames[number][] {
    console.log(options);
    if (options?.convertToUpperCase) {
        char = char.toUpperCase();
        console.log(char);
    }
    console.log({ char });
    if (!isKnownChar(char)) {
        if (options?.unknownChar === 'exception') {
            throw new Error(`Cannot convert character ${char} to 14-segment display`);
        }
        return options?.unknownChar ?? [];
    }
    return segmentCodes[char];
}
export function stringToDisplay(input: string, options: {convertToUpperCase?: boolean, unknownChar?: 'exception'}) {
    return [...input].map(c => charToDisplay(c, options));
}
