/*
Have the function HappyNumbers(num) determine if a number is Happy, which is a number whose sum of the square of the digits eventually converges to 1. Return true if it's a Happy number, otherwise return false.

For example: the number 10 is Happy because 1^2 + 0^2 converges to 1.
*/


function HappyNumbers(num) {
    let sum = 0; 
    const numbers = num.toString()
    for(let i = 0; i < numbers.length; i++) {
      sum += parseInt(numbers[i]) ** 2
    }
      if(sum.toString().length > 1) return HappyNumbers(sum)
    // code goes here  
    return sum === 1 ? true : false; 
  
}