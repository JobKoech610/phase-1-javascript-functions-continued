// code your solution here
const mondayWork = function(activity="go to the office"){
    return (`This Monday, I will ${activity}.`)
}
mondayWork();
mondayWork('work from home');

const saturdayFun = function (activity='roller-skate'){
return (`This Saturday, I want to ${activity}!`);
}
saturdayFun();
saturdayFun('bathe my dog!');

// const wrapAdjective = function (sign ='*', activity = "special"){
// return (`You are ${sign}${activity}${sign}!`)
// }
// wrapAdjective();
// wrapAdjective("||","a dedicated programmer");

function wrapAdjective(visualFlair = "*") {
    return function(adjective = "special") {
      return `You are ${visualFlair }${adjective}${visualFlair }!`;
    }
  }

//  wrapAdjective()();
//  wrapAdjective("||")("a dedicated programmer");


  


