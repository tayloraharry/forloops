//Write a for loop that uses a counter variable initialized at 5 and then increments it by 10 every time it executes. Use console.log() to output the value of the counter variable each time through the loop. Stop execution of the loop if the counter variable's value is greater than 120.
for (var i = 5; i < 120; i += 10) {
  console.log("Current value of i =",i);
}

//Write a for loop with a counter variable initialized at 4096. Each time the loop executes divide the counter variable's value by 2. Use console.log() to output its value every time. When the counter variable's value is 1, stop execution.
for (var j = 4096; j >= 1; j /= 2) {
  console.log("Current value of j ",j);
}

//Create an array that contains the names of American Presidents. Loop over that array with a for loop, and use string concatenation with console.log() to output the order and name of each President (see example below).
var presidents = ["George Washington", "John Adams", "Thomas Jefferson"];

for (l = 0; l < presidents.length; l++) {
  console.log(presidents[l]," was POTUS #",l);
}

//Use can use another kind of for loop to iterate over objects. Iterate over the object below and use console.log() to output the names of the keys in the object.
var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

for (prop in antSpecies) {
  console.log(prop,"is a species of ant");
}