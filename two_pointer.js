// Characteristics of the Two-Pointer Technique:
// Efficiency: It reduces the time complexity in many cases, especially for problems that would
// otherwise require a nested loop, bringing it down from potentially O(n²) to O(n).
// Simplicity: It simplifies the logic needed to solve problems involving sequences or intervals.
// Applicability: Commonly used in array and string manipulation, especially for problems involving sorting, searching, or needing to compare elements.

// How it Works:
// Initialization: Two pointers are initialized, typically at the start and end of the array or sequence, or both at the start, depending on the problem.
// Iteration: The pointers move based on certain conditions dictated by the problem's requirements.
// Termination: The process continues until the pointers meet or pass each other, or until some condition specific to the problem is satisfied.

// Examples of Two-Pointer Use Cases:
// Finding a Pair Sum in a Sorted Array: One pointer starts at the beginning, another at the end, and they move toward each other until they find a pair whose sum matches the target value.
// Palindrome Check: One pointer starts at the beginning and another at the end of a string, moving towards the center, comparing characters for equality.
// Removing Duplicates from a Sorted Array: One pointer tracks the position for placing the next unique element, and another iterates through the array to find new unique elements.
// Subarray Problems: Identifying a subarray that meets a certain condition, like a sum or length constraint, with pointers defining the start and end of the subarray.

// 1768. Merge Strings Alternately
// https://leetcode.com/problems/merge-strings-alternately/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let result = "";
  let i = 0;
  let j = 0;

  while (i < word1.length || j < word2.length) {
    if (i < word1.length) {
      result += word1[i];
      i++;
    }
    if (j < word2.length) {
      result += word2[j];
      j++;
    }
  }

  return result;

  //     Time Complexity:
  // The time complexity of this function is O(N), where N is the sum of the lengths of word1 and word2. This is because we iterate through both input strings exactly once, and the number of iterations is directly proportional to the combined length of the input strings.

  // Space Complexity:
  // The space complexity of this function is also O(N). This is because the result string, which stores the merged string, grows linearly with the combined length of word1 and word2. In the worst case, where word1 and word2 are of equal length, the space complexity is O(N).
};
