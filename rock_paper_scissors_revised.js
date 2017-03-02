function rockPaperScissors(player_1, player_2){
    var myArray = [[player_1, player_2], [player_2, player_1]]
    var winner = "";
    for(var i = 0; i < myArray.length; i++){
      if(myArray[i][0] == "rock" && myArray[i][1] == "scissors"){
        winner = myArray[i][0]
      }else if(myArray[i][0] == "scissors" && myArray[i][1]  == "paper"){
        winner = myArray[i][0]
      }else if(myArray[i][0] == "paper" && myArray[i][1]  == "rock"){
        winner = myArray[i][0]
      }
    }
    if(winner == player_1){
      console.log("player1")
    }else if(winner == player_2){
      console.log("player2")
    }else{
      console.log("draw")
    }    
}

rockPaperScissors('rock', 'paper');

rockPaperScissors('paper', 'paper');
