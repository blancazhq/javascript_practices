function wordHistogram_complete(content){

  var histogram = {};

  function wordHistogram(content){
    var content_array = content.split(" ");
    for (var i=0;i<content_array.length;i++){
      if(histogram[content_array[i]] == undefined){
        histogram[content_array[i]] = 1;
      }else {
        histogram[content_array[i]] += 1;
      }
    }
    console.log(histogram);
  }

  wordHistogram(content);

  var histogram_copy = histogram

  var max_word = "";
  var max_value = 0;

  function find_max(histogram){
    for (var word in histogram){
      var number = histogram[word];
      if(number > max_value ){
        max_value = number;
        max_word = word;
      }
    }
  }

  var most_frequent_words_array = [];

  find_max(histogram_copy)
  most_frequent_words_array.push(max_word);
  delete histogram_copy[max_word];

  var max_word = "";
  var max_value = 0;
  find_max(histogram_copy)
  most_frequent_words_array.push(max_word);

  console.log(most_frequent_words_array);
}

wordHistogram_complete("to be or not to be");
