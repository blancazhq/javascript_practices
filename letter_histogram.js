function letterHistogram(content){
  var histogram = {};
  for (var i=0;i<content.length;i++){
    if(histogram[content[i]] == undefined){
      histogram[content[i]] = 1;
    }else {
      histogram[content[i]] += 1;
    }
  }
  console.log(histogram);
}

letterHistogram('bananas');
