// https://www.hackerrank.com/challenges/one-week-preparation-kit-caesar-cipher-1/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-week-day-three
function caesarCipher(s, k) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    const stringArray = s.split('')
    let result = ''

    stringArray.map(letter => {
        const currentIndex = alphabet.findIndex(l => l === letter.toLowerCase())
        let newIndex

        const isUpperCase = letter === letter.toUpperCase() ? true : false

        if (currentIndex !== -1) {
            newIndex = ((currentIndex + k) % alphabet.length)

            result += isUpperCase ? alphabet[newIndex].toUpperCase() : alphabet[newIndex]
        } else {
            result += letter
        }
    })

    return result
}
function main() {
}
if (require.main === module) {
    main();
}