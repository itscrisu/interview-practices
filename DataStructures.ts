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

// --------------
// --------------
// --------------

// Merge two sorted arrays

/**
 * I have two arrangements already sorted and I want to combine them into one, also sorted.
 * I will compare the first element of each array and take the smallest one.
 * Then I will move forward to the arrangement from which I took the element and repeat.
 * When I'm done with one array, I'll add all the remaining elements from the other.
 */

function mergeSortedArrays(array1: number[], array2: number[]): number[] {
  // I will create a new array to store the merged array
  const mergedArray: number[] = [];

  // I will create two pointers to keep track of the current position of each array
  let i = 0;
  let j = 0;

  // While there are elements in both arrays
  while (i < array1.length && j < array2.length) {
    // If the element of the first array is smaller
    if (array1[i] < array2[j]) {
      // I add it to the merged array
      mergedArray.push(array1[i]);
      // And move the pointer to the next element
      i++;
    } else {
      // If the element of the second array is smaller
      mergedArray.push(array2[j]);
      j++;
    }
  }

  // When I finish one of the arrays, I add the remaining elements of the other
  while (i < array1.length) {
    mergedArray.push(array1[i]);
    i++;
  }

  while (j < array2.length) {
    mergedArray.push(array2[j]);
    j++;
  }

  return mergedArray;


  /**
   * It is O(n + m) where n is the size of the first array and m is the size of the second, because each element of both arrays is processed exactly once.
   * Now that I think about it, what if the two arrays weren't sorted? Well, I think I will sort them first, and then merge them. It may sound like a waste of time, but I believe it is the most efficient way to do it.
   */
}

// --------------
// --------------
// --------------

// Rearrange positive and negative values in an array

/**
 * I want to put all the negatives on the left and all the positives on the right.
 * I will use two pointers: one from the beginning and one from the end.
 * If I find a positive at the beginning and a negative at the end, I swap them.
 * If not, I move on accordingly.
 */

function rearrangePositivesAndNegatives(array: number[]): number[] {
  // Left pointer starts at the beginning
  let left = 0;
  // Right pointer starts at the end
  let right = array.length - 1;

  // While the pointers don't meet
  while (left < right) {
    // If the left element is already negative, that's ok 
    // I just advance the left pointer
    if (array[left] < 0) {
      left++;
    }
    // If the right element is already positive, that's ok
    // I just move the right pointer
    else if (array[right] >= 0) {
      right--;
    }
    // If I have a positive on the left and a negative on the right 
    // I swap them
    else {
      const temp = array[left];
      array[left] = array[right];
      array[right] = temp;
      // I advance on both pointers
      left++;
      right--;
    }
  }
  return array;

  /**
   * This one is O(n) because I go through the array once, and I only swap elements when necessary.
   */
}