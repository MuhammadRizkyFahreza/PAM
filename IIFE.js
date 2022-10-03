var x = 2; //Var Global

(function IIFE(){ 
    var x = 5; //Var IIFE
    console.log(x); 
})();
    
console.log(x);