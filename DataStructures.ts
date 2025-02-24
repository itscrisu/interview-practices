/**
 * All of these examples come from this post on freeCodeCamp: https://www.freecodecamp.org/news/the-top-data-structures-you-should-know-for-your-next-coding-interview-36af0831f5e3/
 * These are my solutions for them, and I'm trying to explain line by line my thought process 
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

// --------------
// --------------
// --------------

// First non-repeating integers in an array

/**
 * Which numbers appear more than one time? 
 * I'll start counting how many times each number appears on the array
 * Then, in the original order, I will look for the first one that appears only once. 
 */

function firstNonRepeatingInteger(array: number[]): number {
//  I look for each number of my array of numbers:
  for (let i = 0; i < array.length; i++) {
    let isRepeated = false;

    // For each number, we check if it is repeated anywhere else
    for (let j = 0; j < array.length; j++) {
      // If I find the same number on a different position
      if(i !== j && array[i] === array[j]) {
        // If I find that it is repeated, I mark isRepeated = true and exit the inner loop
        isRepeated = true;
        break;
      }
    }

    // After verifying a complete number, if it is not repeated, we return it immediately.
    if (!isRepeated) {
      return array[i] // This will be the first non-repeated number
    }
  }

  // Error handling: If there are no non-repeated integers
  throw new Error("There are no non-repeated integers on this array, sorry.")

  // Thinking about this solution I can probably make it better instead of going for a 0(n2) complexity here, but I think this way is more intuitive and better explained like this. I mean for sure each solution can be better I think lol. 
 }
