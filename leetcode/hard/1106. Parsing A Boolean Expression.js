// https://leetcode.com/problems/parsing-a-boolean-expression/description/

var parseExpr = function (expr, list, st, ed) {
  let boolVal = list[st] === 't' ? true : false;
  switch (expr) {
    case '!':
      boolVal = !boolVal;
      break;
    case '&':
      for (let i = st + 1; i < ed; ++i) {
        if (list[i] === ',') continue;
        boolVal &&= list[i] === 't' ? true : false;
      }
      break;
    case '|':
      for (let i = st + 1; i < ed; ++i) {
        if (list[i] === ',') continue;
        boolVal ||= list[i] === 't' ? true : false;
      }
      break;
  }
  return boolVal ? 't' : 'f';
};

var parseBoolExpr = function (expression) {
  let stack = Array(expression.length).fill(null);
  let top = 0;

  for (c of expression) {
    if (c == ')') {
      let index = top - 1;
      while (stack[index] != '(') index--;
      stack[index - 1] = parseExpr(stack[index - 1], stack, index + 1, top);
      top = index;
    } else stack[top++] = c;
  }

  return stack[--top] === 't' ? true : false;
};
