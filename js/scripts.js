//let diceRoll = function () {
//return Math.floor(Math.random() * 6 + 1)
//}


function diceRoll(max){
  return Math.floor(Math.random()*max);}

  console.log(diceRoll(6));

  function player(name, totalScore) {
    this.name = name;
    this.totalScore = totalScore;
  }

  Dice.prototype.assignId = function () {
    this.playerId += 1;
    return this.playerId 
  };
  

  let player1 = "";
  let player2 = "";
  let tempScore = [];
  let turnScore = 0;
  this.roll = roll;
  this.tempScore = tempScore;


  onclick(function(){
    turnScore = diceRoll();
    if(roll === 1){
      turnScore = 0;
    }else {
      tempScore += turnScore;
    }
  })

  player.prototype.presentScore = function() {
    return this.name + " has " + this.totalScore + " points!";
  };

