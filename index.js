// add solution here
function theBeatlesPlay(musicians, instruments){
  var whoPlaysWhat = [];
    for(let i = 0; i < musicians.length; i++){
    whoPlaysWhat.push(musicians[i] + " plays " + instruments[i])
  }
  return whoPlaysWhat
}


function johnLennonFacts(array){
  var addExclamations = [];
  let i = 0;
while (i < array.length){
  addExclamations.push(array[i] + "!!!"); i++
}
return addExclamations
}

function iLoveTheBeatles(n){
var emptyVariable = [];
let i = 0;
do{
  emptyVariable.push(n[i]+ "I love the Beatles!"); i++
} while (i < 15)
return emptyVariable
}
