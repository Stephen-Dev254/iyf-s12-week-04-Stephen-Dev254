// --- Find the Largest Number Challenge ---
const findLargestNumber = (arr) => {
    if (arr.length === 0) return null;
    
    // Imperative tracker array check using let bounds
    let max = arr[0];
    for (const num of arr) {
        if (num > max) {
            max = num;
        }
    }
    return max;
};

console.log("--- Daily Challenge: Largest Number ---");
console.log(findLargestNumber([12, 45, 7, 92, 23])); // Output: 92
