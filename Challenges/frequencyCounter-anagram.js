function validAnagram(str1, str2) {
  const str1LettersCount = {};
  for (const char of str1) {
    str1LettersCount[char] = ++str1LettersCount[char] || 1;
  }

  for (let i = 0; i < str2.length; i++) {
    const letter = str2[i];
    if (str1LettersCount[letter]) {
      str1LettersCount[letter]--;
    } else {
      return false;
    }
  }

  return true;
}

console.log(validAnagram("yes", "sey"));
console.log(validAnagram("aaz", "zza"));
console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("rat", "car"));
