// https://www.hackerrank.com/challenges/organizing-containers-of-balls/problem?isFullScreen=true
function organizingContainers(container) {

    const containerSizes = Array(container.length).fill(0)
    const ballQuantities = Array(container.length).fill(0)
    
    for (let i = 0; i < container.length; i++) {
        for (let j = 0; j < container[i].length; j++) {
           containerSizes[i] += container[i][j]
           ballQuantities[j] += container[i][j]
        }
    }
    
    containerSizes.sort((a, b) => a - b)
    ballQuantities.sort((a, b) => a - b)
    
    return containerSizes.reduce((pv, cv, i) => {
        return ballQuantities[i] <= cv && pv
    }, true) ? 'Possible' : 'Impossible'
}
function main() {
}
if (require.main === module) {
    main();
}