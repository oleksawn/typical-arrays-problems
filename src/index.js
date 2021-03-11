
exports.min = function min (array) {
  if(array == undefined || array.length == 0){
    return 0;
  }
  else{
    return array.reduce(function(min, el){return (el < min)? el : min});
  }
}

exports.max = function max (array) {
  if(array == undefined || array.length == 0){
    return 0;
  }
  else{
    return array.reduce(function(max, el){return (el > max)? el : max});
  }
}
exports.max([1,20,3,4,8]);

exports.avg = function avg (array) {
  if(array == undefined || array.length == 0){
    return 0;
  }
  else{
      return array.reduce(function(sum, el){return sum + el;}) / array.length;
  }
}
