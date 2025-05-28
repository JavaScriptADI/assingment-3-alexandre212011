const sentence = prompt("Enter a sentence:");

const totalCharacters = sentence.length;

const wordCount = sentence.trim().split(/\s+/).length;

const containsJavaScript = sentence.includes("JavaScript");

alert(
  `Total characters: ${totalCharacters}\n` +
  `Total words: ${wordCount}\n` +
  `Contains 'JavaScript': ${containsJavaScript}`
);