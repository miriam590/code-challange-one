const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//function to check the speed
function checkSpeed(speed){ //constants declaring different factors 
    const speedLimit = 70; 
    const kmPerPoint = 5 ;
    const maxPoints = 12 ;
      
    if (speed <= speedLimit){ //condition for speed under limit and should return ok
        return "Ok";

    }
    // finction to calculate points

    const points =Math.floor((speed -speedLimit) / kmPerPoint);
if (points > maxPoints){ // condition to check if the licence should be suspended
    return "Your License is suspended";

}
return `Points: ${points}`; //returns points  if the licence is not suspended
     
}
//prompts user for testing different speed values 
rl.question('Enter your speed: ', (input) => {
    const speed = parseInt(input); // Converts input to an integer
    if (isNaN(speed)) {
        console.log("Please enter a valid number.");
    } else {
        console.log(checkSpeed(speed)); // Check speed and display result
    }
    rl.close();
});


