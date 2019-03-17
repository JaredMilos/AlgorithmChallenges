//Biggie Size
function biggie(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            array[i] = "big";
        }
    }
    return array;
}

//Print Low, Return High
function lowHigh(array) {
    let low = array[0];
    let high = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < low) {
            low = array[i];
        }
        if (array[i] > high) {
            high = array[i];
        }
    }
    console.log(low);
    return high;
}

//Print One, Return Another
function oneAnother(array) {
    let firstOdd;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0 && firstOdd == null) {
            firstOdd = array[i];
        }
    }
    console.log(array[array.length - 2]);
    return firstOdd;
}

//Double Vision
function double(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] * 2);
    }
    return newArray;
}

//Count Positives
function countPositives(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            count++;
        }
    }
    array[array.length-1] = count;
    return array;
}

//Evens and Odds
function evensAndOdds(array) {
    let evenCount = 0;
    let oddCount = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            evenCount++;
            oddCount = 0;
        } else {
            evenCount = 0;
            oddCount++;
        }
        if (evenCount >= 3) {
            console.log("Even more so!")
        } else if (oddCount >= 3) {
            console.log("That's odd!")
        } 
    }
    return array;
}

//Increment the Seconds
function increment(array) {
    for (let i = 0; i < array.length; i++) {
        if (i % 2 != 0) {
            array[i] = array[i] + 1;
        }
        console.log(array[i]);
    }
    return array;
}

//Previous Lengths
function previous(array) {
    for (let i = 1; i < array.length; i++) {
        array[i] = array[i-1].length;
    }
    return array;
}

//Add Seven To Most
function addSeven(array) {
    let newArray = [];
    for (let i = 1; i < array.length; i++) {
        newArray.push(array[i] + 7);
    }
    return newArray;
}

//Reverse Array
function reverse(array) {
    let temp;
    for (let i = 0; i < array.length/2; i++) {
        temp = array[i];
        array[i] = array[array.length-(1+i)];
        array[array.length-(1+i)] = temp;
    }
    return array;
}

//Outlook Negative
function negative(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            array[i] = array[i] * -1;
        }
    }
    return array;
}

//Always Hungry
function hungry(array) {
    let foodFlag = false;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == "food") {
            console.log("Yummy!");
            foodFlag = true;
        }
    }
    if (foodFlag == false) {
        console.log("I'm hungry!")
    }
    return array;
}

//Swap Towards The Center
function swapCenter(array) {
    for (let i = 0; i < array.length/2; i++) {
        if (i % 2 == 0) {
            let temp = array[i];
            array[i] = array[array.length-(1+i)];
            array[array.length-(1+i)] = temp;
        }
    }
    return array;
}

//Scale The Array
function scale(array, num) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i] * num;
    }
    return array;
}