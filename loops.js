

function forLoop(phrases){
  
 
  
  for (let i = 0; i < 25; i++) {

  if(i===1){
    phrases.push('I am 1 strange loop.');
  } else{
  
    phrases.push( 'I am"+ {i} +" strange loop' ); 

    }
  } return phrases;
  
}

function whileLoop(x) {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}
 
// run until `maybeTrue()` returns `false`
// (so the body of the loop might _never_ run!)
while (maybeTrue()) {
  console.log("And I ran; I ran so far away!");
}