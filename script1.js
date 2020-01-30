// 1. Write code to display a triangle in the console that looks similar to the following.
// You should use a loop to accomplish this.
// #
// ##
// ###
// ####
// ###
// ##
// #
 
 for (let i = 1; i<=4; i++) {
     let R=("");
     for (let T = 1; T<=i; T++) {
         R += "#";
         
     }console.log (R);
 } 
 

 for (let j =3; j>=1; j--){
    let R=("");
    for (let T = 1; T<=j; T++) {
        R += "#";
        
    }console.log (R);
 }