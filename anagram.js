const anagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  let a = str1.split("").sort().join("");
  let b = str2.split("").sort().join("");

  const result = a === b;
  return result;
};
console.log(anagram("Glory", "ryoGl"));
