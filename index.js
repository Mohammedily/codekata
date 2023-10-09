// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
  const P = input[0];

  const T = input[1];
  
  const R = input[2];
  
  const si = P * R * T / 100
  
  console.log(si.toFixed(2))

  //end-here
});