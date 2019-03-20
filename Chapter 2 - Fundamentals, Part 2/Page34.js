//Date, On a Deserted Island
function weekdayName(weekdayNum) {
    var name;
    switch(weekdayNum) {
        case 1:
            name = "Sunday";
        break;
        case 2:
            name = "Monday";
        break;
        case 3:
            name = "Tuesday";
        break;
        case 4:
            name = "Wednesday";
        break;
        case 5:
            name = "Thursday";
        break;
        case 6:
            name = "Friday";
        break;
        case 7:
            name = "Saturday";
        break;
    }
    return name;
}

function weekdayName2(dayNum) {
    var name;
    dayNum = dayNum % 7 + 1;
    switch(dayNum) {
        case 1:
            name = "Sunday";
        break;
        case 2:
            name = "Monday";
        break;
        case 3:
            name = "Tuesday";
        break;
        case 4:
            name = "Wednesday";
        break;
        case 5:
            name = "Thursday";
        break;
        case 6:
            name = "Friday";
        break;
        case 7:
            name = "Saturday";
        break;
    }
    return name;
}

function someDays() {
    for (let i = 0; i < 17; i++) {
        let rand = Math.floor(Math.random() * Math.floor(365)) + 1;
        let day = weekdayName2(rand);
        console.log(day);
        if (day == "Saturday" || day == "Sunday") {
            console.log("Enjoy your day off!");
        } else {
            console.log("Work hard!");
        }
    }
}

function monthName(monthNum) {
    let monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return monthArray[monthNum + 1];
}

function monthToDays(monthNum) {
    var days;
    switch(monthNum) {
        case 1:
            days = 31;
        break;
        case 2:
            days = 28;
        break;
        case 3:
            days = 31;
        break;
        case 4:
            days = 30;
        break;
        case 5:
            days = 31;
        break;
        case 6:
            days = 30;
        break;
        case 7:
            days = 31;
        break;
        case 8:
            days = 31
        break;
        case 9:
            days = 30;
        break;
        case 10:
            days = 31;
        break;
        case 11:
            days = 30;
        break;
        case 12:
            days = 31;
        break;
    }
    return days;
}

function dayToMonth(dayNum) {
    if (dayNum <= 31) {
        return "January";
    } else if (dayNum <= 59) {
        return "February";
    } else if (dayNum <= 90) {
        return "March";
    } else if (dayNum <= 120) {
        return "April";
    } else if (dayNum <= 151) {
        return "May";
    } else if (dayNum <= 181) {
        return "June";
    } else if (dayNum <= 212) {
        return "July";
    } else if (dayNum <= 243) {
        return "August";
    } else if (dayNum <= 273) {
        return "September";
    } else if (dayNum <= 304) {
        return "October";
    } else if (dayNum <= 334) {
        return "November";
    } else if (dayNum <= 365) {
        return "December";
    } 
}

function fullDate(dayNum) {
    let dayOfWeek = weekdayName2(dayNum);
    let month = dayToMonth(dayNum);
    let date;
    if (dayNum <= 31) {
        date = dayNum;
    } else if (dayNum > 31 && dayNum < 60) {
        date = dayNum - 31;
    } else if (dayNum > 59 && dayNum < 91) {
        date = dayNum - 59;
    } else if (dayNum > 90 && dayNum < 121) {
        date = dayNum - 90;
    } else if (dayNum > 120 && dayNum < 152) {
        date = dayNum - 120;
    } else if (dayNum > 151 && dayNum < 182) {
        date = dayNum - 151;
    } else if (dayNum > 181 && dayNum < 213) {
        date = dayNum - 181;
    } else if (dayNum > 212 && dayNum < 244) {
        date = dayNum - 212;
    } else if (dayNum > 243 && dayNum < 273) {
        date = dayNum - 243;
    } else if (dayNum > 272 && dayNum < 305) {
        date = dayNum - 272;
    } else if (dayNum > 304 && dayNum < 335) {
        date = dayNum - 304;
    } else if (dayNum > 334) {
        date = dayNum - 334;
    }
    return dayOfWeek + ", " + month + " " + date + ", 2017";
}