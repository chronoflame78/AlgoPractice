// A greedy algorithm is a problem-solving method that follows the problem-solving heuristic of making the locally optimal choice at each stage with the hope of finding a global optimum. In other words, a greedy algorithm makes the best decision it can at each step, aiming to solve the entire problem in this way.

// Characteristics of Greedy Algorithms:
// Local Optimization: At each step, it picks the best local solution without considering the broader context.
// No Backtracking: Once a choice is made, it is never reconsidered.
// Shortsightedness: The algorithm doesn't look ahead to see the consequences of a choice beyond the immediate benefit.
// Feasibility: It maintains a feasible solution at every step.
// Optimality: It tries to find the globally optimal solution by locally optimal steps, which does not always lead to the global optimum.

// How it works:
// Initialization: Start with an empty solution set.
// Selection: From the remaining options, choose the option that is most beneficial and adds it to the solution set.
// Feasibility: Check if the solution remains viable after adding the new element.
// Solution: Repeat the selection process until a complete solution is formed or no more selections can be made.

// Advantages:
// Often easy to conceptualize and implement.
// Typically more efficient in terms of runtime and memory than more exhaustive counterparts.
// Disadvantages:
// Not always optimal: Greedy choices can result in suboptimal solutions.
// Difficult to ascertain correctness: Proving that a greedy algorithm always achieves the optimal solution can be tricky.

// 605. Can Place Flowers
// https://leetcode.com/problems/can-place-flowers/description/?envType=study-plan-v2&envId=leetcode-75
var canPlaceFlowers = function (flowerbed, n) {
  let count = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      // Check if the current plot and its adjacent plots are empty.
      const prevEmpty = i === 0 || flowerbed[i - 1] === 0;
      const nextEmpty = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;

      if (prevEmpty && nextEmpty) {
        // Plant a flower at the current plot.
        flowerbed[i] = 1;
        count++;

        if (count >= n) {
          return true; // We've planted enough flowers.
        }
      }
    }
  }

  return count >= n; // Check if we've planted enough flowers.

  // The time complexity of the canPlaceFlowers function is O(N), where N is the length of the flowerbed array. This is because the function iterates through the flowerbed array once, performing constant-time operations at each step.

  // The space complexity of the function is O(1), which means it uses a constant amount of extra space regardless of the size of the input flowerbed array. The additional space used by the function is for variables like count, prevEmpty, nextEmpty, and the loop counter i, all of which occupy a constant amount of memory. The function does not create any data structures or allocate memory that scales with the size of the input array, making its space complexity constant.
};
