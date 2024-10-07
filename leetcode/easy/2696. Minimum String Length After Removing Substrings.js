// https://leetcode.com/problems/minimum-string-length-after-removing-substrings/description/

function minLength(s: string): number {
  while (/AB|CD/.test(s)) {
    s = s.replace(/AB|CD/, '');
  }
  return s.length;
}
