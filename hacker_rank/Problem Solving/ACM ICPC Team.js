// https://www.hackerrank.com/challenges/acm-icpc-team/problem?isFullScreen=true
function acmTeam(topic) {
    let countTeam = 0;
    let countTopics = 0;
    let maxCount = 0;
    let B = [];
    for (let i = 0; i < topic.length - 1; i++) {
        for (let g = i + 1; g < topic.length; g++) {
            for (let k = 0; k < topic[i].length; k++) {
                if (topic[i].charAt(k) | topic[g].charAt(k) == 1) {
                    countTopics++;
                }
            }
            if (countTopics > maxCount) {
                maxCount = countTopics;
                countTeam = 0;
                countTeam++;
            } else if (countTopics == maxCount) {
                countTeam++;
            }
            countTopics = 0;

        }
    }
    B = [maxCount, countTeam]
    return B
}
function main() {
}
if (require.main === module) {
    main();
}