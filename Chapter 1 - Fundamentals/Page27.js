//Basic 13
//print 1-255
function print1to255() {
    for (let i = 1; i <= 255; i++) {
        console.log(i);
    }
    return true;
}

//Print Ints and Sum 0-255
function printIntsAndSum0To255() {
    let sum = 0;
    for (let i = 0; i <= 255; i++) {
        sum = sum + i;
        console.log("Current integer: " + i + " Current sum: " + sum);
    }
    return true;
}

//Print Max of Array
function printMaxOfArray(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

//Return Odds Array 1-255
function oddsArray() {
    let array = [];
    for (let i = 1; i <= 255; i++) {
        if (i % 2 != 0) {
            array.push(i);
        }
    }
    return array;
}

//Return Array Count Greater Than Y
function returnArrayCountGreaterThanY(array, y) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > y) {
            console.log(array[i]);
            count++;
        }
    }
    return count;
}

//Print Max, Min, Average Array Values
function printMaxMinAverage(array) {
    let sum = 0;
    let max = array[i];
    let min = array[i];
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
        if (array[i] > max) {
            max = array[i];
        }
        if (array[i] < min) {
            min = array[i];
        }
    }
    return "Max value: " + max + " Min Value: " + min + " Average: " + (sum/array.length);
}

//Swap String for Array Negative Values
function swapString(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            array[i] = "Dojo";
        }
    }
    return array;
}

//Print Odds 1-255
function printOdds() {
    for (let i = 1; i <= 255; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
    return true;
}

//Print Array Values
function printArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
    return true;
}

//Print Average Of Array
function printAverage(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum/array.length;
}

//Square Array Values
function squareValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i] * array[i];
    }
    return array;
}

//Zero Out Any Negative Numbers
function zeroNegative(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            array[i] = 0;
        }
    }
    return array;
}

//Shift Array Values Left
function shiftLeft(array) {
    for (let i = 0; i < array.length; i++) {
        if (i < array.length-1) {
            array[i] = array[i+1];
        } else {
            array[i] = 0;
        }
    }
    return array;
}