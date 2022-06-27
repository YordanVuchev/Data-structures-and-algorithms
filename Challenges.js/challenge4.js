// Write a function called isSubsequence which takes two strings. The function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// function isSubsequence(str1, str2) {
//   let str1Pointer = str1.length - 1;
//   let str2Pointer = 0;
//   const result = [];

//   while (true) {
//     if (str2Pointer === str2.length) {
//       break;
//     }

//     if (str1[str1Pointer] === str2[str2Pointer]) {
//       result.push(str2[str2Pointer]);
//       str1Pointer--;
//       str2Pointer = -1;
//     }

//     str2Pointer++;
//   }

//   if (result.length != str1.length) return false;
//   for (let i = 0; i < str1.length; i++) {
//     if (str1[i] != result[result.length - 1 - i]) {
//       return false;
//     }
//   }

//   return true;
// }

function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

console.log(isSubsequence("sing", "sting")); //true
console.log(isSubsequence("abc", "acb")); //false (order matters)
