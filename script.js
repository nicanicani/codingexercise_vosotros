var num = Math.random()*1000;
var rndm = Math.round(num);

var digit = rndm.toString();
var hun = digit.slice(0,1);
var ten = digit.slice(1,2);
var one = digit.slice(2,3);

if{rndm.length==2}(
    
)
var date = new Date();
document.getElementById("number").innerHTML = "Randomly generated number: " + rndm;
document.getElementById("breakdown").innerHTML = "Breakdown: " + hun + "00, " + ten + "0, " + one;
document.getElementById("date").innerHTML = date;
