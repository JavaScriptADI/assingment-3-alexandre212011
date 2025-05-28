const input = prompt("Enter your age:");
const age = parseInt(input);

let classification;

if (age >= 0 && age <= 12) {
   classification = "Child";
}
   else if (age >= 13 && age <= 17) {
   classification = "Teen";
}
   else if (age >= 18 && age <= 64) {
   classification = "Adult";
} 
   else if (age >= 65 && age < 120 ) {
   classification = "Senior";
} 
   else  {
   classification = "How are you even alive?";
}
alert(`You are classified as: ${classification}`);