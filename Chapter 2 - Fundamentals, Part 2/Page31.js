//Rockin' The Dojo Sweatshirt
function buySweatshirts(quantity) {
    let cost = quantity * 20;
    if (quantity == 2) {
        cost = Math.ceil(cost - (cost * .09));
    } else if (quantity == 3) {
        cost = Math.ceil(cost - (cost * .19));
    } else if (quantity >= 4) {
        cost = Math.ceil(cost - (cost * .35));
    }
    return "Cost for " + quantity + " sweatshirts is $" + cost + ".";
}

//Clock Hand Angles, Revisited
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
        hourHand = Math.round(seconds/3600 * 30);
    }
    //if greater than 60 minutes, set seconds as remainder
    if (seconds > 3600) {
        seconds = seconds % 3600;
    }
    //One minute = 60 seconds = minute hand 6 degrees
    if (seconds == 3600 || seconds < 60) {
        minuteHand = 0;
    } else {
        minuteHand = Math.round(seconds/60 * 6);
    }
    //if greater than 60 seconds, set seconds as remainder
    if (seconds > 60) {
        seconds = seconds % 60;
    }
    //One second = 1 second = second hand 6 degrees
    if (seconds == 60) {
        secondHand = 0;
    } else {
        secondHand = Math.round(seconds * 6);
    }
    return "Hour hand: " + hourHand + " degrees. Minute hand: " + minuteHand + " degrees. Second hand: " + secondHand + " degrees."
}