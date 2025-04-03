function hasTargetSum(array, target) {
  // Create a set to store the numbers we have seen
  const seenNumbers = new Set();

  // Iterate through each number in the array
  for (let num of array) {
    // Calculate the complement that would sum up to the target
    const complement = target - num;

    // Check if the complement exists in the set
    if (seenNumbers.has(complement)) {
      return true;
    }

    // Add the current number to the set
    seenNumbers.add(num);
  }

  // If no pair is found, return false
  return false;
}

/* 
  Big O Time Complexity:
  - The function iterates through the array once, checking and adding elements to a Set.
  - Both checking and adding elements to a Set take O(1) time on average.
  - Since we iterate through the array only once, the time complexity is O(n).
*/

/* 
  Pseudocode:
  1. Create an empty set called `seenNumbers`.
  2. Loop through each number in the array:
      - Compute the complement (target - current number).
      - If the complement exists in `seenNumbers`, return true.
      - Otherwise, add the current number to `seenNumbers`.
  3. If no pair is found after looping, return false.
*/

/*
  Explanation:
  - We use a Set to store numbers we have already seen while iterating.
  - For each number, we compute the complement that would sum up to the target.
  - If the complement is already in the Set, we found a valid pair and return true.
  - If no such pair exists, we return false after completing the loop.
  - This approach efficiently finds the sum pair in O(n) time.
*/

// Custom test cases
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 5));
}

module.exports = hasTargetSum;
