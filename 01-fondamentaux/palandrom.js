console.log("Try programiz.pro");
let chain = prompt("Enter your string to test:");

// Loop through the first half of the string
for (let i = 0; i < chain.length / 2; i++) {
    if (chain[chain.length / 2 - i - 1] !== chain[chain.length / 2 + i]) {
        console.log("Your string is not a palindrome.");
        return; // Exit the function if the string is not a palindrome
    }
}

// If all characters match, print that it is a palindrome
console.log("The string is a palindrome.");
