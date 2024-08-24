/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function(expression) {
    let num = 0;
    let den = 1;
    let i = 0;
    const n = expression.length;
    
    while(i < n) {
        let sign = 1;

        //Determine the sign of the current fraction
        if(expression[i] === '-') {
            sign = -1;
            i++;
        } else if (expression[i] === '+') {
            i++;
        }
        //Extract the numerator
        let j = i;
        while(j < n && isDigit(expression[j])) {
            j++;
        }
        let numerator = sign * parseInt(expression.substring(i, j));

        //Move past the '/' character
        i = j + 1;

        //Extract the denominator
        j = i;
        while(j < n && isDigit(expression[j])) {
            j++;
        }
        let denominator = parseInt(expression.substring(i, j));

        // calculate the new denominator (LCM of current and new denominator)
        let commonDen = lcm(den, denominator);

        //adjust the numerators to the new common denominator and add them
        num = num * (commonDen / den) + numerator * (commonDen/ denominator);
        den = commonDen;

        //Move to the next part of the expression
        i = j;
    }
    //Simplify the fraction
    let gcdValue = gcd(Math.abs(num), den);
    num /= gcdValue;
    den /= gcdValue;

    return `${num}/${den}`;
};
function isDigit(char) {
    return char >='0' && char <= '9';
}

// Helper function to compute the greatest common divisor (GCD) 
function gcd(a, b) {
    while(b != 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

//Helper function to compute the least common multiple (LCM)
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}