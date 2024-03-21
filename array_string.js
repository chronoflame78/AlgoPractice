// 6. Zigzag Conversion
// https://leetcode.com/problems/zigzag-conversion/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1 || numRows >= s.length) {
       return s;
   }

   let rows = [];
   let currentRow = 0;
   let goingDown = false;

   for (let i = 0; i < numRows; i++) {
       rows[i] = "";
   }

   for (let c of s) {
       rows[currentRow] += c;
       if (currentRow === 0 || currentRow === numRows - 1) {
           goingDown = !goingDown;
       }
       currentRow += goingDown ? 1 : -1;
   }

   return rows.join('');
   // The function iterates through each character in the input string s once, so the time complexity is O(n), where n is the length of the string s.
   // The space complexity is also O(n) because we store the zigzag conversion in an array of strings (rows). In the worst case, this array will have as many characters as the input string when numRows is 1.
};



// 1431. Kids With the Greatest Number of Candies
// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/?envType=study-plan-v2&envId=leetcode-75
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max = 0;
    for(const candy of candies){
        if(candy > max)
        max = candy;
    }
    //Math.max(...candies)

    const result = candies.map(x => (x + extraCandies >= max) ? true : false);
    //const result = []
    //for candy of candies, if condition then push to result

    return result;

    // Time Complexity:

    // The first loop that finds the maximum number of candies in the candies array iterates through the array once. This operation has a time complexity of O(n).
    // The second loop, which creates the result array, also iterates through the candies array once. This operation also has a time complexity of O(n).
    // The overall time complexity is O(n) + O(n), which simplifies to O(n).
    // Space Complexity:

    // The space complexity is determined by the additional space used for the result array, which has a length equal to the number of kids (n).
    // Additionally, the function uses a constant amount of extra space for variables like max and candy.
};