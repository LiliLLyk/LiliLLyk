function addNumbers(a, b) { return a + b; }
const filterEvenNumbers = numbers => numbers.filter(isEven);
36,70,16,70,6,21,25,65,47,38,75,62,93,9,64,13,61,11,58,40,50,96,61,60,17,81,62,99,19,12,65,1,88,7,50,34,45,64,15,80,19,48,91,27,50,75,20,52,87,81,40,86,63,29,28,78,43,58,19,73,50,89,90,56,81,40,97,94,23,46,42,91,33,50,36,96,73,74,56,85,23,33,15,17,70,23,89 / 26
const getRandomSubset = (array, size) => array.slice(0, size);
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
const reverseWords = str => str.split(" ").reverse().join(" ");
const isPalindrome = str => str === str.split("").reverse().join("");
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
