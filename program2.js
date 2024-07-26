const decodeTheRing = function (s, p) {
  // write your code here

  let msgLen = s.length;
  let keyLen = p.length;
  let i = 0;
  let j = 0;
  let starIdx = -1;
  let match = 0;

  while (i < msgLen) {
    //char matched or p has ?
    if (j < keyLen && (p[j] === "?" || p[j] === s[i])) {
      i++;
      j++;
    }

    //star char in p
    else if (j < keyLen && p[j] === "*") {
      starIdx = j;
      match = i;
      j++;
    }

    //char is not matched and is not ? -> use star char
    else if (starIdx != -1) {
      j = starIdx + 1;
      match++;
      i = match;
    }

    //matched
    else {
      return false;
    }
  }


  //check p string for star char only
  if (j < keyLen && p[j] === "*") {
    return j++;
  }

  if (j === keyLen) return true;
  else return false;
};

// console.log(decodeTheRing("hello", "h*llo"));

module.exports = decodeTheRing;
