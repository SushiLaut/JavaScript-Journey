// Smallest Common Multiple
// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

smallestCommons([1, 5])//should return a number.
Passed:smallestCommons([1, 5]) //should return 60.
Passed:smallestCommons([5, 1]) //should return 60.
Passed:smallestCommons([2, 10]) //should return 2520.
Passed:smallestCommons([1, 13]) //should return 360360.
Passed:smallestCommons([23, 18]) //should return 6056820.

function smallestCommons(arr) {
    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
    var mltple = max;
  
    for(var i = max; i >= min; i--){
      if(mltple % i !== 0){
        mltple += max; 
        i = max;
      } 
    }
    return mltple;  
  }
  
  smallestCommons([1,5]);
  smallestCommons([5, 1])
  