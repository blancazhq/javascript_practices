function cipher(text) {
  text_array = text.split("");
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  function findcipher(letter){
    var new_index =  alphabet.indexOf(letter.toUpperCase()) + 13;
    if (new_index >= alphabet.length) {
      new_index -= 26;
    }
    return alphabet[new_index];
  }
  var result_array = text_array.map(findcipher);
  var new_text = result_array.join("");
  return (new_text);
}

var encrypted = cipher('GENIUS');
console.log(encrypted);
