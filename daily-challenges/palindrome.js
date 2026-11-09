// --- Palindrome Check Challenge ---
const isPalindrome = (str) => {
    // Sanitize string to lowercase to match character strictness
    const cleanStr = str.toLowerCase();
    const reversed = cleanStr.split("").reverse().join("");
    return cleanStr === reversed;
};

console.log("--- Daily Challenge: Palindrome Verification ---");
console.log(isPalindrome("Kayak")); // Output: true
console.log(isPalindrome("Coding")); // Output: false
