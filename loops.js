

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
  
   
  while(x > 0){
    console.log("yay" + x);
    x--;
  }
  return ('done');
}
 
 
 function doWhileLoop(arr) {
  
  
  function maybeTrue() {
  return Math.random() >= 0.5

  
  } if(arr)
 
 do {
  arr.pop();
 } while (maybeTrue());

 
}
 
