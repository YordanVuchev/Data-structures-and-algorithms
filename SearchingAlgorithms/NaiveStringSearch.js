function naiveStringSearch(str, match) {
  let counter = 0;

  for (let i = 0; i < str.length; i++) {
    let check = true;
    for (let j = 0; j < match.length; j++) {
      if (str[i + j] !== match[j]) {
        check = false;
        // i += j; // Not sure about this one, tested it with some inputs and it worked. It should save some time and unnecessary loops
        break;
      }
    }
    if (check) counter++;
  }

  return counter;
}

console.log(naiveStringSearch("doggidoggkle", "doggk")); //1

console.log(naiveStringSearch("wowomgzomg", "omg")); //2
console.log(naiveStringSearch("ssabcaa", "abc")); //1
console.log(naiveStringSearch("this frog is a frog frog dog", "frog")); //3
console.log(naiveStringSearch("this frog is a frog frog dog", "dkosa")); //0
