function rockPaperScissors(player1_move, player2_move){
    var myArray = [player1_move, player2_move]
    var myOtherArray = [player2_move, player1_move]
    if(myArray[0] == "rock" && myArray[1] == "scissors"){
      console.log("player 1")
    }else if(myArray[0] == "scissors" && myArray[1]  == "paper"){
      console.log("player 1")
    }else if(myArray[0] == "paper" && myArray[1]  == "rock"){
      console.log("player 1")
    }else if(myArray[0] == myArray[1]){
      console.log("draw")
    }

    if(myOtherArray[0] == "rock" && myOtherArray[1] == "scissors"){
      console.log("player 2")
    }else if(myOtherArray[0] == "scissors" && myOtherArray[1]  == "paper"){
      console.log("player 2")
    }else if(myOtherArray[0] == "paper" && myOtherArray[1]  == "rock"){
      console.log("player 2")
    }else if(myOtherArray[0] == myOtherArray[1]){
      console.log("draw")
    }
}

rockPaperScissors('rock', 'paper');
