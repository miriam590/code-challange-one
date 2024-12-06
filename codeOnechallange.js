const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function studentGrade(marks){ //declaring the function for student grades
    //using switch statement to determine the grade
    switch (true){
        case marks >79:
            return "A";
            case marks >=60:
                return "B";
                case marks >=49:
                    return "C";
                    case marks >=40:
                        return "D";
                        default:
                            return "E"

    }
    
}
//Prompt the user for marks
rl.question('Enter the marks: ', (input) => {
    const marks = parseInt(input);//Converts input to an integer
    if (isNaN(marks)) {
        console.log("Please enter a valid number.");
    } else {
        console.log(`The grade is: ${studentGrade(marks)}`);
    }
    rl.close();
});