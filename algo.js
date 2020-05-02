function isPalindrome(str) {
  return (
    str
      .split('')
      .reverse()
      .join('') === str
  );
}

function arrangeInt(int) {
  return int
    .toString()
    .split('')
    .sort((a, b) => a > b)
    .join('');
}
function reverseInt(int) {
  //   return parseInt(
  //     int
  //       .toString()
  //       .split('')
  //       .reverse()
  //       .join('')
  //   );
  //   const stringArr = int.toString().split('');
  return (
    parseInt(
      int
        .toString()
        .split('')
        .reduce((revString, num) => num + revString, '')
    ) *
    // If its negative value
    Math.sign(int)
  );
}
function capitalize(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(itm => itm[0].toUpperCase() + itm.substring(1))
    .join(' ');
}

function maxChar(str) {
  const charObj = {};
  str.split('').forEach(char => {
    if (charObj[char]) {
      charObj[char]++;
    } else {
      charObj[char];
    }
  });
  console.log(charObj);
}
console.log(maxChar('javaSCript'));
