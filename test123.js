
//Write a function isEven() which takes a single numeric argument
//and returns your number is even if true and is odd if false


function isEven(num){ 
if (num % 2 === 0){
  return true
}
else {
  return false
}
}


function even(num){
  var even = isEven(num);
  if (!even ){
    console.log ('Your number is even');
  } else {
    console.log('Your number is odd')
  }

}   

even(4);
even(21);
even(68);
even(333);






// var num = 13

// if (num % 2 === 0) {
//   console.log('true');
// }
// else {
//   console.log('false');
// }
