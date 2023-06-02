// https://www.codewars.com/kata/5574835e3e404a0bed00001b/train/javascript

function getParticipants(handshakes) {
    const count = [0, 2];

    let z = 2;

    while (count.length <= handshakes) {
        for (let i = 0; i < z; i++) {
            count.push(z + 1);
        }
        z++;
    }
    console.log(count);
    return count[handshakes];
}

function main() {
    const handshakes = 7;
    console.log(getParticipants(handshakes));
}
if (require.main === module) {
    main();
}
