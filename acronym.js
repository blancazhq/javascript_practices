function combineAcronym(a, b){
  var b_first_letter = b.slice(0, 1);
  if (a === ""){
    return b_first_letter;
  }else{
    return a + b_first_letter;
  }
}

function toAcronym(array){
  var acronym = array.reduce(combineAcronym, "");
  var acronym_allcaps = acronym.toUpperCase();
  console.log(acronym_allcaps);
}

toAcronym(['very', 'important', 'person']);
