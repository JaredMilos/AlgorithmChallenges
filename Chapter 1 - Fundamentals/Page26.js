//Weekend Challenge - Quiz
function quiz() {
    let name = prompt("Please enter your name:");
    let score = 0;
    let responseDict = {};
    let QAArray = [["Which fictional city is the home of Batman?", "Gotham"], ["Spinach is high in which mineral?", "Iron"], ["What is a Geiger Counter used to detect?", "Radiation"], ["Which type of dog has breeds called Scottish, Welsh and Irish?", "Terrier"], ["Babe Ruth is associated with which sport?", "Baseball"], ["In the film Babe, what type of animal was Babe?", "Pig"], ["What was Mohammed Ali’s birth name?", "Cassius Clay"], ["Which Roman emperor supposedly fiddled while Rome burned?", "Nero"], ["Which planet is the closest to Earth?", "Venus"], ["According to the old proverb, to which European capital city do all roads lead?", "Rome"], ["Which is the tallest mammal?", "Giraffe"], ["What is the name of the fairy in Peter Pan?", "Tinkerbell"], ["Who directed the movie Jaws?", "Steven Spielberg"], ["How many strings does a violin have?", "Four"], ["What color is the circle on the Japanese national flag?", "Red"], ["What is the chemical symbol for Hydrogen?", "H"], ["In the phonetic alphabet, the letter Q is represented by which Canadian city?", "Quebec"], ["In Greek mythology, who turned all that he touched into gold?", "Midas"], ["How many sides does an octagon have?", "Eight"], ["What is the name of the city where the cartoon family The Simpsons live?", "Springfield"], ["The title role of the 1990 movie “Pretty Woman” was played by which actress?", "Julia Roberts"]];
    for (let i = 0; i < 10; i++) {
        let arrayIndex = 100;
        while (arrayIndex > 20) {
            arrayIndex = Math.floor(Math.random() * 100);
            if (responseDict[arrayIndex] == true) {
                arrayIndex = 100;
            }
        }
        responseDict[arrayIndex] = true;
        let answer = prompt(QAArray[arrayIndex][0]);
        if (answer.toLowerCase() == QAArray[arrayIndex][1].toLowerCase()) {
            score++;
            alert("Correct! Your score is " + score + "/" + (i+1))
        } else {
            alert("Sorry, that's not correct! The correct answer is: " + QAArray[arrayIndex][1] +". Your score is " + score + "/" + (i+1))
        }
    }
    alert("Thanks for playing " + name + "! Your score is " + score + "/10.");
    return "Thanks for playing " + name + "! Your score is " + score + "/10.";
}