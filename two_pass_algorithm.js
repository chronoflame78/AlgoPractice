// A two-pass algorithm is a method that involves going through the data twice, each pass with a specific purpose, to achieve the final result.
// This approach is often used in problems where a single pass through the data is insufficient to gather all the necessary information
// to solve the problem. Here's a general breakdown of how a two-pass algorithm works:

// First Pass: The first pass through the data typically gathers necessary information, sets up initial conditions,
// or performs a partial computation. This pass may also be used to set up constraints or conditions that will be used in the second pass.

// Second Pass: The second pass uses the information gathered or the conditions set up during the first pass to complete
// the computation or to refine the results. This pass often involves the actual processing or decision-making based on the earlier pass's setup.

// Advantages of Two-Pass Algorithms
// Clarity: Separating the logic into two distinct passes can make the algorithm easier to understand and implement.
// Efficiency: Sometimes, breaking down the problem into two sequential scans can lead to more efficient solutions compared to trying to solve everything in one pass.
// Flexibility: It allows for initial setup or computation that can be used to optimize or simplify the second pass.

// Disadvantages of Two-Pass Algorithms
// Potentially Higher Computational Cost: Running through the data twice can lead to increased computational time, especially for large datasets.

// 135. Candy
// https://leetcode.com/problems/candy/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  const candies = new Array(ratings.length).fill(1); // Step 1: Give each child one candy

  // Step 2: Left to right
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  }

  // Step 3: Right to left
  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    }
  }

  // Step 4: Sum up the candies
  const totalCandies = candies.reduce((acc, curr) => acc + curr, 0);

  return totalCandies;

  //     Time Complexity
  // First Pass: We iterate through the ratings array once from left to right. This pass takes O(n) time, where n is the number of children (or the length of the ratings array).
  // Second Pass: We iterate through the ratings array again, this time from right to left, which also takes O(n) time.
  // Since we go through the array twice, the total time complexity of the algorithm is O(n) + O(n) = O(2n), which simplifies to O(n).

  // Space Complexity
  // Candy Array: We need an array to keep track of the candies given to each child. This array will have the same length as the ratings array, so the space required is O(n).
  // No Additional Significant Space: The rest of the algorithm uses constant extra space for variables and control structures.
  // Thus, the total space complexity of the algorithm is O(n).
};
