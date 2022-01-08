function reverseString(str) {
  let strArr = str.split("");
  let revStr = [];
  
  // Iterate through array backwards, push each iteration to revStr
  for (let i = strArr.length - 1; i >= 0; i--){
    revStr.push(strArr[i]);
  };

  return revStr.join("");
};



if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));

  console.log("");

  console.log("Expecting: 'smraf yrekcih'");
  console.log("=>", reverseString("Hickery Farms"));

  console.log("");

  console.log("Expecting: ''");
  console.log("=>", reverseString(""));

  console.log("");

  console.log("Expecting: 'a'");
  console.log("=>", reverseString("a"));

  console.log("");

  console.log("Expecting: 'ba'");
  console.log("=>", reverseString("ab"));

  console.log("");

  console.log("Expecting: 'tac'");
  console.log("=>", reverseString("cat"));

  console.log("");

  console.log("Expecting: 'sham-meow'");
  console.log("=>", reverseString("sham-meow"));
}

//module.exports = reverseString;

// Please add your pseudocode to this file
/*

reverseStr('str'){
  new array = str.split('')
  empty array = []
  iterate backwards through array
    add each iteration to empty array
  empty array.join()
  return empty array (no longer empty)
}

*/

// And a written explanation of your solution
/*

1. Take the string from the function argument and split the characters into an array
2. create an empty array
3. Iterate through array backwards
4. Add each iteration to the new array, they will be added in reverse order
5. Join the array back together into a string
6. Return the string


*/
