function leetspeak(content){
  contentUpper = content.toUpperCase();
  var content_array = contentUpper.split("");
  for (var i = 0; i < content.length; i++) {
    if(content_array[i] == "A"){
      content_array[i] = "4";
    }
    else if(content_array[i] == "E"){
      content_array[i] = "3";
    }
    else if(content_array[i] == "G"){
      content_array[i] = "6";
    }
    else if(content_array[i] == "I"){
      content_array[i] = "1";
    }
    else if(content_array[i] == "O"){
      content_array[i] = "0";
    }
    else if(content_array[i] == "S"){
      content_array[i] = "5";
    }
    else if(content_array[i] == "T"){
      content_array[i] = "7";
    }
  }
  var new_content = content_array.join("").toLowerCase();
  console.log(new_content)
}

leetspeak("leet");
