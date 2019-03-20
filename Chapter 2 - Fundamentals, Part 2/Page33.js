//Gaming Fun(damentals)
function rollOne() {
    return Math.floor(Math.random() * Math.floor(6)) + 1;
}

function playFives(num) {
    for (let i = 0; i < num; i++) {
        let roll = rollOne()
        console.log(roll);
        if (roll == 5) {
            console.log("That's lucky!")
        }
    }
    return true;
}

function playStatistics() {
    let min = 7;
    let max = 0;
    for (let i = 0; i < 8; i++) {
        let roll = rollOne()
        console.log(roll);
        if (roll > max) {
            max = roll;
        }
        if (roll < min) {
            min = roll;
        }
    }
    return "Lowest value: " + min + " Highest value: " + max;
}

function playStatistics() {
    let min = 7;
    let max = 0;
    for (let i = 0; i < 8; i++) {
        let roll = rollOne()
        console.log(roll);
        if (roll > max) {
            max = roll;
        }
        if (roll < min) {
            min = roll;
        }
    }
    return "Lowest value: " + min + " Highest value: " + max;
}

function playStatistics2() {
    let min = 7;
    let max = 0;
    let sum = 0;
    for (let i = 0; i < 8; i++) {
        let roll = rollOne()
        console.log(roll);
        if (roll > max) {
            max = roll;
        }
        if (roll < min) {
            min = roll;
        }
        sum = sum + roll;
    }
    return "Lowest value: " + min + " Highest value: " + max + " Sum: " + sum;
}

function playStatistics3(num) {
    let min = 7;
    let max = 0;
    let sum = 0;
    for (let i = 0; i < num; i++) {
        let roll = rollOne()
        console.log(roll);
        if (roll > max) {
            max = roll;
        }
        if (roll < min) {
            min = roll;
        }
        sum = sum + roll;
    }
    return "Lowest value: " + min + " Highest value: " + max + " Sum: " + sum;
}

function playStatistics4(num) {
    let min = 7;
    let max = 0;
    let sum = 0;
    for (let i = 0; i < num; i++) {
        let roll = rollOne()
        console.log(roll);
        if (roll > max) {
            max = roll;
        }
        if (roll < min) {
            min = roll;
        }
        sum = sum + roll;
    }
    return "Lowest value: " + min + " Highest value: " + max + " Sum: " + sum + " Average: " + sum/num;
}

//Statistics Until Doubles
function statsUntilDubs() {
    function roll20() {
        return Math.floor(Math.random() * Math.floor(20)) + 1;
    }
    let min = 21;
    let max = 0;
    let sum = 0;
    let count = 0;
    let lastRoll = 0;
    let dubsFlag = false;
    while (dubsFlag == false) {
        let roll = roll20();
        console.log(roll);
        sum = sum + roll;
        count++;
        if (roll > max) {
            max = roll;
        }
        if (roll < min) {
            min = roll;
        }
        if (roll == lastRoll) {
            dubsFlag = true;
        }
        lastRoll = roll;
    }
    console.log("Dubs!");
    console.log("Number of rolls: " + count);
    console.log("Min roll: " + min);
    console.log("Max roll: " + max);
    console.log("Average roll: " + sum/count);
    return true;
}

//Claire is Where?
let claire = [0,0]

function reset() {
    claire = [0,0];
    return claire;
}

function moveBy(xOffset, yOffset) {
    claire[0] += xOffset;
    claire[1] += yOffset;
    return claire;
}

function xLocation() {
    return claire[0];
}

function yLocation() {
    return claire[1];
}

function distFromHome() {
    let a = Math.abs(0 - claire[0]);
    let b = Math.abs(0 - claire[1]);
    return Math.sqrt(Math.pow(a, 2) * Math.pow(b, 2));
}