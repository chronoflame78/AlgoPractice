// 1768. Merge Strings Alternately
// https://leetcode.com/problems/merge-strings-alternately/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let result = '';
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