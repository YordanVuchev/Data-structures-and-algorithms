//Find out if two numbers have the same frequency of  digits
// Time complexity : O(n)

function sameFrequency(num1, num2) {
  num1 = String(num1);
  num2 = String(num2);

  if (num1.length != num2.length) return false;

  const num1Count = {};

  for (const char of num1) {
    num1Count[char] = ++num1Count[char] || 1;
  }
  for (let i = 0; i < num2.length; i++) {
    const curr = num2[i];

    if (num1Count[curr] > 0) {
      num1Count[curr]--;
    } else {
      return false;
    }
  }

  return true;
}

console.log(sameFrequency(182, 281)); //true
console.log(sameFrequency(34, 14)); //false
console.log(sameFrequency(3589578, 5879385)); //true
console.log(sameFrequency(22, 222)); //false
console.log(sameFrequency(3, 333333)); //false
console.log(sameFrequency(666888, 688668)); //true
