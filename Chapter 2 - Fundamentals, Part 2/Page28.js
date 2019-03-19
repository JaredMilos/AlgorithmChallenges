//Sigma
function sigma(int) {
    let sum = 0;
    for (let i = 1; i <= int; i++) {
        sum = sum + i;
    }
    return sum;
}

//Factorial
function factorial(int) {
    let total = 1;
    for (let i = 1; i <= int; i++) {
        total = total * i;
    }
    return total;
}

//Star Art
function drawLeftStars(int) {
    let string = '';
    if (int > 75) {
        int = 75;
    } else if (int < 0) {
        int = 0;
    }
    for (let i = 0; i < 75; i++) {
        if (i < int) {
            string += '*';
        } else {
            string += ' ';
        }
    }
    return string;
}

function drawRightStars(int) {
    let string = '';
    if (int > 75) {
        int = 75;
    } else if (int < 0) {
        int = 0;
    }
    for (let i = 0; i < 75; i++) {
        if (i >= 75-int) {
            string += '*';
        } else {
            string += ' ';
        }
    }
    return string;
}

function drawCenteredStars(int) {
    let string = '';
    let even;
    if (int > 75) {
        int = 75;
    } else if (int < 0) {
        int = 0;
    }
    if (int % 2 == 0) {
        even = 1;
    } else {
        even = 0;
    }
    for (let i = 0; i < 75; i++) {
        if (i >= 37 - (int/2) && i <= 37 + (int/2-even)) {
            string += '*';
        } else {
            string += ' ';
        }
    }
    return string;
}

//Character Art
function drawLeftChar(int, char) {
    let string = '';
    if (int > 75) {
        int = 75;
    } else if (int < 0) {
        int = 0;
    }
    for (let i = 0; i < 75; i++) {
        if (i < int) {
            string += char;
        } else {
            string += ' ';
        }
    }
    return string;
}

function drawRightChar(int, char) {
    let string = '';
    if (int > 75) {
        int = 75;
    } else if (int < 0) {
        int = 0;
    }
    for (let i = 0; i < 75; i++) {
        if (i >= 75-int) {
            string += char;
        } else {
            string += ' ';
        }
    }
    return string;
}

function drawCenteredChar(int, char) {
    let string = '';
    let even;
    if (int > 75) {
        int = 75;
    } else if (int < 0) {
        int = 0;
    }
    if (int % 2 == 0) {
        even = 1;
    } else {
        even = 0;
    }
    for (let i = 0; i < 75; i++) {
        if (i >= 37 - (int/2) && i <= 37 + (int/2-even)) {
            string += char;
        } else {
            string += ' ';
        }
    }
    return string;
}