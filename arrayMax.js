function arrayMax(numbers) {
  if(numbers == undefined)
    return 0;
  if(numbers.length == 0)
    return 0;

  let max = numbers[0];
  for(i of numbers) {
    if(i>max) max = i;
  }
  
  return max;
}

console.log( arrayMax([20,30,10]) ); // ==> 30
