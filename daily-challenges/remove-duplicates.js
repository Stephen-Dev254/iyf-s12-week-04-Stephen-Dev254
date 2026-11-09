// --- Remove Duplicates Challenge ---
const removeDuplicates = (arr) => {
    // Uses filter to keep only elements where the current index matches its first occurrence index
    return arr.filter((item, index) => arr.indexOf(item) === index);
};

console.log("--- Daily Challenge: Remove Duplicates ---");
const mixedInventory =;
console.log(removeDuplicates(mixedInventory)); // Output: [4, 5, 9, 12]
