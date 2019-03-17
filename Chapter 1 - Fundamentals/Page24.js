//Only Keep The Last Few
function keepFew(array, x) {
    array.splice(0, (array.length-x));
    return array;
}

//Math Help
function help(m, b) {
    return (0-b)/m;
}

//Poor Kenny
function whatHappensToday() {
    let x = Math.random();
    if (x <= 0.09) {
        return "Today, there was a volcano eruption."
    } else if (x <= 0.24) {
        return "Today, there was a tsunami."
    } else if (x <= 0.44) {
        return "Today, there was an earthquake."
    } else if (x <= 0.69) {
        return "Today, there was a blizzard."
    } else {
        return "Today, there were meteors."
    }
}

//What Really Happened
function whatReallyHappenedToday() {
    let a = Math.random();
    if (a <= 0.09) {
        console.log("Today, there was a volcano eruption.")
    } 
    let b = Math.random();
    if (b <= 0.14) {
        console.log("Today, there was a tsunami.")
    }
    let c = Math.random();
    if (c <= 0.19) {
        console.log("Today, there was an earthquake.")
    }
    let d = Math.random();
    if (d <= 0.24) {
        console.log("Today, there was a blizzard.")
    }
    let e = Math.random();
    if (e <= 0.29) {
        console.log("Today, there were meteors.")
    }
    return false
}

//Soaring IQ
function soaringIQ() {
    let iq = 101;
    let increase = 0;
    for (let i = 0; i < 98; i++) {
        increase = increase + .01;
        iq = iq + increase;
    }
    return iq;
}

//Letter Grade
function grade(int) {
    if (int <= 60) {
        return "Score: " + int + ". Grade: F"; 
    } else if (int <= 69) {
        return "Score: " + int + ". Grade: D"; 
    } else if (int <= 79) {
        return "Score: " + int + ". Grade: C"; 
    } else if (int <= 89) {
        return "Score: " + int + ". Grade: B"; 
    } else {
        return "Score: " + int + ". Grade: A"; 
    }
}

//More Accurate Grades
function accurateGrades(int) {
    if (int < 60) {
        return "Score: " + int + ". Grade: F"; 
    } else if (int <= 61) {
        return "Score: " + int + ". Grade: D-"; 
    } else if (int <= 67) {
        return "Score: " + int + ". Grade: D"; 
    } else if (int <= 69) {
        return "Score: " + int + ". Grade: D+"; 
    } else if (int <= 71) {
        return "Score: " + int + ". Grade: C-"; 
    } else if (int <= 77) {
        return "Score: " + int + ". Grade: C"; 
    } else if (int <= 79) {
        return "Score: " + int + ". Grade: C+"; 
    } else if (int <= 81) {
        return "Score: " + int + ". Grade: B-"; 
    } else if (int <= 87) {
        return "Score: " + int + ". Grade: B"; 
    } else if (int <= 89) {
        return "Score: " + int + ". Grade: B+"; 
    } else if (int <= 91) {
        return "Score: " + int + ". Grade: A-"; 
    } else {
        return "Score: " + int + ". Grade: A"; 
    }
}