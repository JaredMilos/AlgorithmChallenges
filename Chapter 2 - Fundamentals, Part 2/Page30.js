//Twelve-Bar Blues
function blues() {
    for (let i = 1; i <= 12; i++) {
        console.log(i);
        console.log("chick");
        console.log("boom");
        console.log("chick");
    }
    return "Thank you very much!"
}

//Fibonacci
function fib(int) {
    if (int == 0) {
        return 0
    } else if (int == 1) {
        return 1;
    }
    return fib(int-1) + fib(int-2);
}

//Sum to One Digit
function sumToOne(int) {
    while (int > 9) {
        int = Math.abs(int).toString().split('').reduce(function(a,b){return +a + +b}, 0)
    }
    return int;
}

//Clock Hand Angles
function clockAngles(seconds) {
    let hourHand;
    let minuteHand;
    let secondHand;
    //if greater than 24 hours, set seconds as remainder
    if (seconds > 86400) {
        seconds = seconds % 86400; 
    }
    //One hour = 3600 seconds = hour hand 30 degrees
    if (seconds/3600 == 12 || seconds < 3600) {
        hourHand = 0;
    } else {
        hourHand = seconds/3600 * 30;
    }
    //if greater than 60 minutes, set seconds as remainder
    if (seconds > 3600) {
        seconds = seconds % 3600;
    }
    //One minute = 60 seconds = minute hand 6 degrees
    if (seconds == 3600 || seconds < 60) {
        minuteHand = 0;
    } else {
        minuteHand = seconds/60 * 6;
    }
    //if greater than 60 seconds, set seconds as remainder
    if (seconds > 60) {
        seconds = seconds % 60;
    }
    //One second = 1 second = second hand 6 degrees
    if (seconds == 60) {
        secondHand = 0;
    } else {
        secondHand = seconds * 6;
    }
    return "Hour hand: " + hourHand + " degrees. Minute hand: " + minuteHand + " degrees. Second hand: " + secondHand + " degrees."
}

//Is Prime
function isPrime(Int) {
    for (let i = 2; i <= Math.sqrt(Int); i++) {
        if (Int % i == 0) {
            return false;
        }
    }
    return true;
}