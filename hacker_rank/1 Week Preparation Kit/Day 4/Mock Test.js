function truckTour(petrolpumps) {
    let l = petrolpumps.length; let index;
    for (let i = 0; i < l; i++) {
        let petrol = 0;
        let count = 0;
        for (let g = i; g < l + i; g++) {
            petrol += petrolpumps[g % l][0] - petrolpumps[g % l][1]; if (petrol < 0) {
                break;
            } else {
                count++;
            }
        }
        if (count == l) {
            index = i;
            break;
        }
    }
    return index
}
function main() {
}
if (require.main === module) {
    main();
}