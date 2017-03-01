function longLongVowels(content){
  var contentUpper = content.toUpperCase();
  var content_array = contentUpper.split("");
  for (var i = 0; i < content.length; i++) {
    if(content_array[i] == content_array[i+1] && content_array[i+1] == "A"){
      content_array[i] = "AAA";
    }
    else if(content_array[i] == content_array[i+1] && content_array[i+1] == "E"){
      content_array[i] = "EEE";
    }
    else if(content_array[i] == content_array[i+1] && content_array[i+1] == "I"){
      content_array[i] = "III";
    }
    else if(content_array[i] == content_array[i+1] && content_array[i+1] == "O"){
      content_array[i] = "OOO";
    }
    else if(content_array[i] == content_array[i+1] && content_array[i+1] == "U"){
      content_array[i] = "UUU";
    }
  }
  var new_content = content_array.join("").toLowerCase();
  console.log(new_content)
}

longLongVowels('Good');
