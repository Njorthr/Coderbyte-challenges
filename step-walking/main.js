/*
Have the function StepWalking(num) take the num parameter being passed which will be an integer between 1 and 1,000 that represents the number of stairs you will have to climb. You can climb the set of stairs by taking either 1 step or 2 steps, and you can combine these in any order. So for example, to climb 3 steps you can either do: (1 step, 1 step, 1 step) or (2, 1) or (1, 2). So for 3 steps we have 3 different ways to climb them, so your program should return 3. Your program should return the number of combinations of climbing num steps.
*/
function StepWalking(num) { 
    // for 3 (1,1,1) (1,2) (2,1) => 3 = 2 + 1
    // for 4 (1,1,1,1) (2, 1, 1) (1, 2 ,1) (1, 1, 2) (2, 2)  => 5 = 3 + 2
    // for 5 (1,1,1,1,1) (2, 1, 1, 1) (1, 2 ,1, 1) (1, 1, 2, 1) (1, 1, 1, 2) (2, 2, 1) (2, 1, 2) (1, 2, 2) => 8 = 5 + 3
    // for 6 (1,1,1,1,1,1) (2, 1, 1, 1, 1) (1, 2 ,1, 1, 1) (1, 1, 2, 1, 1) (1, 1, 1, 2, 1) (1, 1, 1, 1, 2) (2, 2, 1, 1) (2, 1, 2, 1) (2, 1, 1, 2) (1, 2, 1, 2) (1, 1, 2, 2) (1, 2, 2, 1) (2, 2, 2) => 13 = 8 + 5
    // looks like fibonacci                
  return fib(num + 1)
  }
  
  function fib(n) {
    if(n <= 1) return n;
    return fib(n - 1) +
           fib(n - 2);
  }