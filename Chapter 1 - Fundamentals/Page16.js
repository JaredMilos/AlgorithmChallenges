//Setting & Swapping
let myNumber = 42;
let myName = "Jared Milos";
let temp = myNumber;
myNumber = myName;
myName = temp;

//Print -52 to 1066;
for (let i = -52; i <= 1066; i++) {
    console.log(i);
}

//Don't Worry, Be Happy
function beCheerful() {
    console.log("good morning!");
}

for (let i = 0; i < 98; i++) {
    beCheerful();
}

//Multiples of Three - but Not All
for (let i = -300; i < 1; i++) {
    if (i % 3 == 0 && (i != -3 || i != -6)) {
        console.log(i)
    }
}

//Printing Integers with While
let i = 2000;
while (i <= 5280) {
    console.log(i);
}

//You Say It's Your Birthday
function birthday(x, y) {
    if (x == 2 && y == 14 || x == 14 && y == 2){
        console.log("How did you know?");
    } else {
        console.log("Just another day...");
    }
}

//Leap Year
function leapYear(int) {
    if (int % 4 == 0 && (int % 400 == 0 || int % 100 != 0)) {
        console.log("Leap year!");
    } else {
        console.log("Not a leap year!");
    }
}

//Print & Count
let count = 0;
for (let i = 512; i <= 4096; i++) {
    if (i % 5 == 0) {
        console.log(i);
        count++;
    }
}
console.log("There were", count, "fives.");

//Multiples of Six
let j = 6;
while (j <= 60000) {
    if (j % 6 == 0) {
        console.log(j);
    }
    j++
}

//Counting, the Dojo Way
for (let k = 1; k <= 100; k++) {
    if (k % 10 == 0) {
        console.log("Coding Dojo");
    } else if (k % 5 == 0) {
        console.log("Coding");
    } else {
        console.log(k);
    }
}

//What Do You Know?
function know(incoming) {
    console.log(incoming);
}

//Woah, That Sucker's Huge
let count = 0;
for (let l = -300000; l <= 300000; l++) {
    if (l % 2 != 0) {
        count += l;
    }
}
console.log(l);

//Countdown By Fours
let m = 2016;
while (2016 > 0) {
    console.log(m);
    m = m - 4;
}

//Flexible Countdown
function flex(lowNum, highNum, mult) {
    for (let n = highNum; n >= lowNum; n--) {
        if (n % mult == 0) {
            console.log(n);
        }
    }
}

//The Final Countdown
function final(param1, param2, param3, param4) {
    for (let o = param2; o <= param3; o++) {
        if (o % param1 == 0 && o != param4) {
            console.log(o);
        }
    }
}