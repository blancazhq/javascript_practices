function cipher(content, offset){
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var content_array = content.split("");
  var new_letter;
  for (var i = 0; i < content.length; i++) {
    if (alphabet.indexOf(content_array[i])+offset <= 25){
      new_letter = alphabet[alphabet.indexOf(content_array[i]) + offset];
    } else {
      new_letter = alphabet[(alphabet.indexOf(content_array[i]) + offset)-26];
    }
    content_array[i] = new_letter;
  }
  var new_content = content_array.join("");
  console.log(new_content)
}

cipher("zoo", 2);

function decipher(content, offset){
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var content_array = content.split("");
  var new_letter;
  for (var i = 0; i < content.length; i++) {
    if (alphabet.indexOf(content_array[i])-offset >= 0){
      new_letter = alphabet[alphabet.indexOf(content_array[i]) - offset];
    } else {
      new_letter = alphabet[(alphabet.indexOf(content_array[i]) - offset)+26];
    }
    content_array[i] = new_letter;
  }

  var new_content = content_array.join("");
  console.log(new_content)
}

decipher("bqq", 2);
