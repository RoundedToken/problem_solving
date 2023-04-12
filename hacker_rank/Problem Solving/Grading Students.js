// https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true
function gradingStudents(grades) {
    function round5(x) {
        return Math.ceil(x / 5) * 5;
    }
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 38) {
            if (round5(grades[i]) - grades[i] <= 2) {
                grades[i] = round5(grades[i]);
            }
        }
    }
    return grades;
}
function main() {
}
if (require.main === module) {
    main();
}