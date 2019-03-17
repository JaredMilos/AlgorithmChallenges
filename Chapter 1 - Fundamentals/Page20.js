//Countdown
function countdown(int) {
    let array = [];
    for (let i = int; i >= 0; i--) {
        array.push(i);
    }
    console.log("The array is", array.length, "elements long.");
    return array;
}

//Print and Return
function printReturn(array) {
    console.log(array[0]);
    return array[1];
}

//First Plus Length
function firstPlusLength(array) {
    return array[0] + array.length;
}

//Values Greater Than Second
function greaterThanSecond(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (i > array[1]) {
            console.log(i);
            count++;
        }
    }
    return count;
}

greaterThanSecond([1,3,5,7,9,13]);

//Values Greater Than Second, Generalized
function greaterThanSecond(array) {
    if (array.length <= 1) {
        return "Array not long enough";
    }
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (i > array[1]) {
            console.log(i);
            count++;
        }
    }
    return count;
}

//This Length, That Value
function thisThat(num1, num2) {
    let array = [];
    if (num1 == num2) {
        console.log("Jinx!");
    }
    for (let i = 0; i < num1; i++) {
        array.push(num2);
    }
    return array;
}

//Fit the First Value
function fitTheFirst(array) {
    if (array[0] > array.length) {
        console.log("Too big!");
    } else if (array[0] < array.length) {
        console.log("Too small!");
    } else {
        console.log("Just right!");
    }
    return array;
}

//Farenheit to Celsius
function farenheitToCelsius(fDegrees) {
    return (fDegrees - 32) / (9/5);
}

//Celsius to Farenheit
function celsiusToFarenheit(cDegrees) {
    return ((9/5 * cDegrees) + 32);
}