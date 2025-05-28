const input = prompt("Enter three numbers separated:");

const numbers = input.split(" ").map(num => parseFloat(num.trim()));

const smallest = Math.min(...numbers);
const largest = Math.max(...numbers);

const average = Math.round((numbers[0] + numbers[1] + numbers[2]) / 3);

alert(
  `Smallest number: ${smallest}\n` +
  `Largest number: ${largest}\n` +
  `Average (rounded): ${average}`
);