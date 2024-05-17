/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // console.log(str1.split(""));
  // console.log(str2.split(""));
  const uniqueNumbers = new Set(str1.split(""));
  const uniqueNumbers2 = new Set(str2.split(""));
  console.log(uniqueNumbers,uniqueNumbers2);
  // console.log(Set(str1.split(""))==Set(str2.split("")))
// if (str1.split("")===str2.split("")){
//   return 
// }
}
isAnagram('openai', 'aiopen')

module.exports = isAnagram;
