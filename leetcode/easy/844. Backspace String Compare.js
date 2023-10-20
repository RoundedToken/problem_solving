// https://leetcode.com/problems/backspace-string-compare/description/?envType=daily-question&envId=2023-10-19

const backspaceCompare = (S, T) => {
    return edit(S) === edit(T);

    function edit(str) {
        let result = '';
        let backspaces = 0;

        for (let i = str.length - 1; i >= 0; i -= 1) {
            if (str[i] === '#') {
                backspaces += 1;
            } else if (backspaces > 0) {
                backspaces -= 1;
            } else {
                result = str[i] + result;
            }
        }

        return result;
    }
};
