var scores = [90,98,89,100,100,86,94];
var scores2 = [40,65,77,82,80,54,73,63,95,49];
function avarage(score){
    var sum = 0;
    for(var i = 0; i < score.length; i++){
        sum += score[i];
    }
    var avg =  Math.round(sum / score.length);
    console.log(avg);
}

avarage(scores);
avarage(scores2);