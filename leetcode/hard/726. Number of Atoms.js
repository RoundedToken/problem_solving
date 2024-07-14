// https://leetcode.com/problems/number-of-atoms/description/

var countOfAtoms = function (formula) {
    const isLower = (s, i) => {
        const _i = s.charCodeAt(i);
        return _i >= 97 && _i <= 122;
    };

    const isDig = (s, i) => {
        const _i = s.charCodeAt(i);
        return _i >= 48 && _i <= 57;
    };

    const parseUntilBracket = (st) => {
        let i = st;
        const _r = new Map();
        while (i < formula.length && formula[i] !== ')') {
            if (formula[i] === '(') {
                const [_i, _m] = parseUntilBracket(i + 1);
                i = _i + 1;
                const mulStart = i;
                while (isDig(formula, i)) i += 1;
                const mul = !!parseInt(formula.slice(mulStart, i)) ? parseInt(formula.slice(mulStart, i)) : 1;
                for (const [k, v] of _m) {
                    if (!_r.has(k)) _r.set(k, v * mul);
                    else _r.set(k, _r.get(k) + v * mul);
                }
            } else {
                const charStart = i;
                i += 1;
                while (isLower(formula, i)) i += 1;
                const atom = formula.slice(charStart, i);
                const mulStart = i;
                while (isDig(formula, i)) i += 1;
                const mul = !!parseInt(formula.slice(mulStart, i)) ? parseInt(formula.slice(mulStart, i)) : 1;
                if (!_r.has(atom)) _r.set(atom, mul);
                else _r.set(atom, _r.get(atom) + mul);
            }
        }
        return [i, _r];
    };
    return [...parseUntilBracket(0)[1]]
        .toSorted()
        .map((e) => (e[1] === 1 ? e[0] : e.join('')))
        .join('');
};
