//https://www.codewars.com/kata/54b72c16cd7f5154e9000457/train/javascript

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

function trim(str, ch) {
    var start = 0,
        end = str.length;

    while (start < end && str[start] === ch) ++start;

    while (end > start && str[end - 1] === ch) --end;

    return start > 0 || end < str.length ? str.substring(start, end) : str;
}

var decodeBits = function (bits) {
    console.log(bits);
    bits = trim(bits, '0');
    const map = new Map();
    const set = new Set();
    let pos = 0;
    let currSequence = '';
    while (pos < bits.length) {
        const currBit = bits[pos];
        const prevBit = bits[pos - 1];

        if (currBit !== prevBit && pos !== 0) {
            set.add(currSequence);
            currSequence = '';
        }

        currSequence += currBit;
        pos++;
    }
    set.add(currSequence);
    const coff = Math.min(...Array.from(set.entries()).map((str) => str[0].length));

    bits = replaceAll(bits, '111'.repeat(coff), '-');
    bits = replaceAll(bits, '000'.repeat(coff), '  ');
    bits = replaceAll(bits, '1'.repeat(coff), '.');
    bits = replaceAll(bits, '0'.repeat(coff), '');
    return bits.trim();
};

var decodeMorse = function (morseCode) {
    const words = morseCode.split('    ');
    let result = '';
    for (const word of words) {
        const chars = word.split('  ');
        for (const char of chars) result += MORSE_CODE[char];
        result += ' ';
    }

    return result.trim();
};

function main() {
    console.log(decodeBits('1110111'));
}
if (require.main === module) {
    main();
}
