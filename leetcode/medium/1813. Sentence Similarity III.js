// https://leetcode.com/problems/sentence-similarity-iii/description/

function areSentencesSimilar(sentence1, sentence2) {
  const arr1 = sentence1.split(' ');
  const arr2 = sentence2.split(' ');
  // Converted strings to arrays
  // Example: "a b c" => ["a", "b", "c"]

  let commonPreLength = 0;
  let commonSuffixLength = 0;

  for (let i = 0; ; i++) {
    // Counting from start

    const [element1, element2] = [arr1[i], arr2[i]];
    if (element1 == null || element2 == null) return true;
    // They are totally equal

    if (element1 === element2) commonPreLength++;
    // Accumulator
    else break; // We found not matching words, we are done here
  }

  for (let i = 0; ; i++) {
    // Same but for suffix
    const [element1, element2] = [arr1[arr1.length - 1 - i], arr2[arr2.length - 1 - i]];
    if (element1 == null || element2 == null) return true;
    if (element1 === element2) commonSuffixLength++;
    else break;
  }

  const equalOuter = commonPreLength + commonSuffixLength;

  if (equalOuter >= arr1.length || equalOuter >= arr2.length) return true;
  // If sum was more than the length of the arrays, we return true

  return false;
}
