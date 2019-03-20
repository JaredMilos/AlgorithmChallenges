//Extract-o-Matic
function extractDigit(num, digit) {
    if (digit == 0) {
        divisor = 1;
    } else {
        divisor = Math.pow(10, digit);
    }
    if (num > 0) {
        return Math.floor((num / divisor) % 10);
    } else {
        return Math.ceil((num / divisor) % 10);
    }
}

//Most Significant Digit
function significantDigit(num) {
    if (num > 9) {
        let exp = 1;
        while (num > Math.pow(10, exp)) {
            exp++;
        }
        exp--;
        return Math.floor(num / Math.pow(10, exp));
    } else if (num < 1) {
        let exp = -1;
        while (num < Math.pow(10, exp)) {
            console.log(num + " is less than " + Math.pow(10, exp))
            exp--;
        }
        return Math.floor(num / Math.pow(10, exp));
    } else {
        return num;
    }
}