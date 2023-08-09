// code your solution here
function saturdayFun(msg = "roller-skate") {
  return `This Saturday, I want to ${msg}!`;
}
console.log(saturdayFun("bathe my dog"));

function mondayWork(msg = "go to the office") {
  return `This Monday, I will ${msg}.`;
}

// function wrapAdjective() {
//   const msg = function (adjective) {
//     return `You are ${adjective}`;
//   };
//   return msg("good");
// }
// wrapAdjective();

function wrapAdjective(symbol) {
  return function (adjective) {
    return `You are ${symbol}${adjective}${symbol}!`;
  };
}

const wrapWithAsterisk = wrapAdjective("*");
const wrapWithHash = wrapAdjective("#");

console.log(wrapWithAsterisk("awesome"));
console.log(wrapWithHash("fantastic"));
