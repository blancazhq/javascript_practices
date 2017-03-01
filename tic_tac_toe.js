function ticTacToe(myArray){
  var win = false;
  for(var i=0; i<myArray.length-2; i++){
    for(var j=0; j<myArray[0].length; j++){
        if(myArray[i][j] == myArray[i][j+1] && myArray[i][j+1] == myArray[i][j+2]){
          console.log(myArray[i][j]);
          win = true;
          break
        }else if(myArray[i][j] == myArray[i+1][j] && myArray[i+1][j] == myArray[i+2][j]){
          console.log(myArray[i][j]);
          win = true;
          break
        }else if(myArray[i][j] == myArray[i+1][j+1] && myArray[i+1][j+1] == myArray[i+2][j+2]){
          console.log(myArray[i][j]);
          win = true;
          break
        }else if(myArray[i][j+2] == myArray[i+1][j+1] && myArray[i+1][j+1] == myArray[i+2][j]){
          console.log(myArray[i][j+2]);
          win = true;
          break
        }
    }
  }
  if(win == false){
    console.log(null);
  }
}

ticTacToe([
  ['O', 'O', 'O'],
  ['X', null, 'X'],
  [null, 'X', null]
]);

ticTacToe([
  ['O', 'X', 'O'],
  ['O', 'X', null],
  [null, 'X', null]
  ])

ticTacToe([
  ['O', 'X', 'O'],
  ['O', 'O', null],
  [null, 'X', 'X']
  ])

ticTacToe([
  ['O', 'X', 'O'],
  ['O', 'O', null],
  [null, 'X', 'O']
  ])
