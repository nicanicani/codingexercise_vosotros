// Generate a random number from the interval [0, 1000]
var num = Math.random()*1000;
var rndm = Math.round(num);

// Print the generated number
document.getElementById("number").innerHTML = "Randomly generated number: " + rndm;

var digit = rndm.toString();
var long = digit.length;

// Incase the generated number is a 2 digit number
if(long == 2){
    ten = digit.slice(0,1);
    one = digit.slice(1,2);
    if(one == 0){
        // Print the breakdown of the number
        document.getElementById("breakdown").innerHTML = "Breakdown: " + ten + "0";
    }
    else{
        // Print the breakdown of the number
        document.getElementById("breakdown").innerHTML = "Breakdown: " + ten + "0, " + one;
    }
}
// Incase the generated number is a 1 digit number
else if(long == 1){
    var one = digit.slice(0,1);
    // Print the breakdown of the number
    document.getElementById("breakdown").innerHTML = "Breakdown: " + one;
}
// Incase the generated number is a 1 digit number
else if(long == 4){
    var thou = digit.slice(0,1);
    // Print the breakdown of the number
    document.getElementById("breakdown").innerHTML = "Breakdown: " + thou + "000";
}
// When it generates a 3 digit number
else{
    var hun = digit.slice(0,1);
    var ten = digit.slice(1,2);
    var one = digit.slice(2,3);
    document.getElementById("breakdown").innerHTML = "Breakdown: " + hun + "00, " + ten + "0, " + one;
}

// Print the current date
var date = new Date();
document.getElementById("date").innerHTML = date;
