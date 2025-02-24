/**
 * All of these examples come from this post on freeCodeCamp: https://www.freecodecamp.org/news/the-top-data-structures-you-should-know-for-your-next-coding-interview-36af0831f5e3/
 * This are my solutions for them, and I'm trying to explain line by line my thought process 
 */

// Find the second minimum element of an array
/**
 * First I always think "How would I do this manually", well, I would look at each number and keep track of the two smallest ones I saw.
 * Then, if I find a number smaller than the current minimum, the old minimum becomes the 2nd minimum right? So:
 */

function findSecondMinimum (array: number[]): number {
  // First off I wanna make sure that I have at least 2 numbers on my array
  if(array.length < 2) {
    throw new Error ('The array must have at least 2 numbers');
  }

  /**
   * I need an initial value that is greater than any possible number in the array, to ensure that the first number found is recognized as the minimum. That way any real number will be less than Infinity, so the condition num < min will work for the first element thats being compared. 
   * */ 
  let min = Infinity;
  let secondMin = Infinity;

  // Since I will only have one iteration in the array, this will be an O(n) complexity, therefore I go through each number of the array once: 
  for (const num of array) {
    // Is there a number less than my current minimum?
    if (num < min) {
      // Then the old minimum becomes the second minimum
      secondMin = min;
      // So I update the new minimum
      min = num;
    } 
    // Is it not less than the minimum, but is it less than the second minimum? (and not equal to the minimum)
    else if (num < secondMin && num !== min) {
      // then I update the second minimum
      secondMin = num;
  }
}

  // If I can't find a secondMin (they are all the same numbers)
  if(secondMin === Infinity) {
    throw new Error("There is no second minimum. All the numbers are equals")
  }

  return secondMin;
}