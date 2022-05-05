/*
Have the function TwoSum(arr) take the array of integers stored in arr, and determine if any two numbers (excluding the first element) in the array can sum up to the first element in the array. For example: if arr is [7, 3, 5, 2, -4, 8, 11], then there are actually two pairs that sum to the number 7: [5, 2] and [-4, 11]. Your program should return all pairs, with the numbers separated by a comma, in the order the first number appears in the array. Pairs should be separated by a space. So for the example above, your program would return: 5,2 -4,11

If there are no two numbers that sum to the first element in the array, return -1
*/
function TwoSum(arr) {
    let result = ""; 
    // remove the first element and assign it to variable
    const firstNum = arr[0]
    arr.splice(0, 1)
    // nest two loops to check pairs, if equal to first element push it to result
    for(let i = 0; i < arr.length; i++) {
      for(let k = i + 1; k < arr.length; k++) {
        if(arr[i] + arr[k] === firstNum) {
          result += `${arr[i]},${arr[k]} `
        }
      }
    }
    // return result
    return result == "" ? -1 : result; 
  }