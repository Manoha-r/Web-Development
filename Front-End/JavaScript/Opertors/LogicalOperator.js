// Check if both conditions are true
let age = 20;
let idProof = true;

// Logical AND checks both conditions
if (age >= 18 && idProof) {
  console.log("Allowed"); 
} else {
  console.log("Not Allowed");  
}
// Check if at least one condition is true
let ag = 16;
let hasGuardian = true;

// Logical OR checks if either condition is true
if (ag >= 18 || hasGuardian) {
  console.log("Allowed");
} else {
  console.log("Not Allowed");
}
// The nullish coalescing operator (??) returns the right-hand operand when the left-hand operand is either null or undefined. Otherwise, it returns the left-hand operand.
let name="john";
let defaultName=null;
console.log(name??defaultName);

name=null;
defaultName="Guest"
console.log(name ??defaultName);
