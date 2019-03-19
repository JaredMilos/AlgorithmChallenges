//Threes & Fives
function threesAndFives(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        if (i % 5 == 0 && i % 3 == 0) {
            continue;
        } else if (i % 5 == 0 || i % 3 == 0) {
            sum = sum + i;
        }
    }
    return sum;
}

//Generate Coin Change
function change(cents) {
    let total = cents;
    let changeArray = [[25, 0], [10, 0], [5, 0], [1, 0]];
    for (let i = 0; i < 4; i++) {
        changeArray[i][1] = Math.floor(cents/changeArray[i][0]);
        cents = cents % changeArray[i][0];
    }
    console.log(total + " cents can be represented by:");
    console.log("   Quarters: " + changeArray[0][1]);
    console.log("   Dimes: " + changeArray[1][1]);
    console.log("   Nickels: " + changeArray[2][1]);
    console.log("   Pennies: " + changeArray[3][1]);
    return total;
}

//Messy Math Mashup
function messyMath(num) {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        if (i * 3 == num) {
            return -1;
        } else if (i % 3 == 0) {
            continue;
        } else if (i % 7 == 0) {
            sum = sum + i + i;
        } else {
            sum = sum + i;
        }
    }
    return sum;
}