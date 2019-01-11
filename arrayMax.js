function arrayMax(numbers) {
  if(numbers == undefined)
    return 0;
  if(numbers.length == 0)
    return 0;

  let maximum = numbers[0];
  for(i of numbers) {
    if(i > maximum) maximum = i;
  }
  
  return maximum;
}

// console.log( arrayMax( [20,30,10] ) ); // ==> 30
// console.log( arrayMax( [-2, -3, -2, -1, -3, -2] ) );
