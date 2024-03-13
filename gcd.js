// 1071. Greatest Common Divisor of Strings
//https://leetcode.com/problems/greatest-common-divisor-of-strings/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) return '';
    //Euclidean algorithm to find greatest common division
    const gcd = (a, b) => (0 === b ? a : gcd(b, a % b));

    return str1.substring(0, gcd(str1.length, str2.length));

//     Time Complexity:

    // The if statement that checks the concatenation of str1 and str2 has a time complexity of O(N), where N is the combined length of str1 and str2. This is because string concatenation takes linear time.

    // The gcd function, which calculates the greatest common divisor (GCD) using the Euclidean algorithm, has a time complexity of O(log(min(a, b))), where a and b are the lengths of str1 and str2. In this case, it's O(log(min(N, M))), where N is the length of str1 and M is the length of str2.

    // The substring extraction using str1.substring(0, gcd(str1.length, str2.length)) also takes O(GCD) time.

    // Therefore, the overall time complexity of the gcdOfStrings function is O(N + log(min(N, M)) + GCD), where N and M are the lengths of str1 and str2, and GCD is the greatest common divisor of their lengths.

    // Space Complexity:

    // The space complexity of this function is relatively low and doesn't depend on the input size. It primarily uses stack space for the recursive gcd function, which is O(log(min(N, M))) in the worst case.
    // In summary, this function has a time complexity that depends on the lengths of the input strings and a space complexity that depends on the depth of the recursive calls to gcd. It's efficient and uses minimal memory.
};



function greatestCommonPrimeDivisor(a, b){
    var gcpd = -1;
    for(var i = 2; i <= a; i ++){
        if(a%i === 0 && b%i === 0 && isPrime(i) === true){
            gcpd = i;
        }
    }
    return gcpd;

}

const findGreatestCommonDivisor = (a, b) => {
    let gcd = -1;
    for(let i = 2; i <= a; i ++){
        if(a % i === 0 && b % i === 0){
            gcd = i;
        }
    }
    return gcd;
}

function lcm(a, b) {
    return a * (b / greatestCommonPrimeDivisor(a, b));
}

function isPrime(n){
    if(n === 1) return true;
    if(n === 0) return false;
    for(var i = 2; i< n; i++){
        if(n%i === 0){
            return false;
        }
    }
    return true;
}