// ==========================================
// TASK 7.1: VARIABLE PRACTICE
// ==========================================

// Declare individual profile data
const developerName = "Jabari Omondi";
let developerAge = 22;
const isStudent = true;
const favoriteColors = ["Crimson", "Midnight Blue", "Emerald"];
const evaluationDate = new Date();

// Console log outputs with descriptive template strings
console.log(`Developer Name: ${developerName} (${typeof developerName})`);
console.log(`Current Age: ${developerAge} (${typeof developerAge})`);
console.log(`Enrollment Status: Is a student? ${isStudent} (${typeof isStudent})`);
console.log(`Preferred Palette: ${favoriteColors.join(", ")} (${typeof favoriteColors})`);
console.log(`Execution Timestamp: ${evaluationDate}`);

// Testing reassignment behavior
let practiceScore = 100;
practiceScore = 150; // Valid declaration assignment
console.log(`Updated Practice Score: ${practiceScore}`);

const SYSTEM_PI = 3.14159;
console.log(`Mathematical Constant PI: ${SYSTEM_PI}`);
// SYSTEM_PI = 3; // Uncommenting this will trigger a TypeError


// ==========================================
// TASK 7.2: DATA TYPES & OPERATORS
// ==========================================

let numA = 15;
let numB = 4;

console.log("--- Math Operations ---");
console.log(`Addition: ${numA} + ${numB} = ${numA + numB}`);
console.log(`Subtraction: ${numA} - ${numB} = ${numA - numB}`);
console.log(`Multiplication: ${numA} * ${numB} = ${numA * numB}`);
console.log(`Division: ${numA} / ${numB} = ${numA / numB}`);
console.log(`Modulus (Remainder): ${numA} % ${numB} = ${numA % numB}`);
console.log(`Exponentiation: ${numA} ** ${numB} = ${numA ** numB}`);

let operationalCount = 10;
operationalCount++; 
console.log(`Incremented Count: ${operationalCount}`); 
operationalCount--; 
console.log(`Decremented Count: ${operationalCount}`); 

let devFirstName = "Jabari";
let devLastName = "Omondi";

let devFullName = devFirstName + " " + devLastName;
let personalizedGreeting = `Welcome back, ${devFirstName}!`;
let lengthReport = `${devFirstName} has a name length of ${devFirstName.length} characters.`;

console.log("--- String Operations ---");
console.log(devFullName.toUpperCase());
console.log(devFullName.toLowerCase());
console.log(`First Initial: ${devFirstName.charAt(0)}`);
console.log(`Contains First Name? ${devFullName.includes("Jabari")}`);

console.log("--- Logic & Comparisons ---");
console.log(12 > 7);       
console.log(3 < 1);       
console.log(10 === 10);   
console.log(8 !== 2);     

console.log(true && false); 
console.log(true || false); 
console.log(!false);        

const ageInYears = 22;
const daysInYear = 365.25; 
const hoursInDay = 24;

const calculatedAgeInDays = ageInYears * daysInYear;
const calculatedAgeInHours = calculatedAgeInDays * hoursInDay;
const centuryYearTarget = 2004 + 100; 

console.log("--- Custom Challenge Metrics ---");
console.log(`Approximate age in days: ${calculatedAgeInDays} days`);
console.log(`Approximate age in hours: ${calculatedAgeInHours} hours`);
console.log(`The year I will turn 100: ${centuryYearTarget}`);

// ==========================================
// TASK 7.3: FUNCTIONS
// ==========================================

console.log("--- Exercise 1: Function Styles ---");
function greetDeclaration(name) {
    return `Hello, ${name}! (From Declaration Style)`;
}

const greetExpression = function(name) {
    return `Hello, ${name}! (From Expression Style)`;
};

const greetArrow = (name) => `Hello, ${name}! (From Arrow Style)`;

console.log(greetDeclaration("Jabari"));
console.log(greetExpression("Jabari"));
console.log(greetArrow("Jabari"));

console.log("--- Exercise 2: Custom Functions ---");
const calculateArea = (width, height) => width * height;
const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;
const isEven = (number) => number % 2 === 0;

function getInitials(fullName) {
    return fullName.split(" ").map(word => word.charAt(0)).join("").toUpperCase();
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

function calculateTip(bill, tipPercent = 15) {
    return (bill * tipPercent) / 100;
}

console.log(`Rectangle Area (8x12): ${calculateArea(8, 12)}`);
console.log(`Boiling point in F (100°C): ${celsiusToFahrenheit(100)}°F`);
console.log(`Is 47 even? ${isEven(47)}`);
console.log(`Is 64 even? ${isEven(64)}`);
console.log(`Initials for my name: ${getInitials("Jabari Omondi")}`);
console.log(`Reversed string ('Vanilla'): ${reverseString("Vanilla")}`);
console.log(`Standard tip (15% on 2000): KSh ${calculateTip(2000)}`);

// ==========================================
// TASK 7.4: CONTROL FLOW
// ==========================================

function getGrade(score) {
    if (score >= 90) return "A";
    else if (score >= 80) return "B";
    else if (score >= 70) return "C";
    else if (score >= 60) return "D";
    else return "F";
}

function getDayName(dayNumber) {
    switch (dayNumber) {
        case 0: return "Sunday";
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        default: return "Invalid day";
    }
}

console.log("--- Control Flow Loop Verifications ---");
console.log("--- Numbers 1 to 100 ---");
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

console.log("--- Even Numbers 1 to 50 ---");
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log("--- FizzBuzz Evaluation ---");
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
}

console.log("--- Star Triangle Program ---");
for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
}

// ==========================================
// MINI-PROJECT: CALCULATOR
// ==========================================

function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) {
    if (b === 0) return "Error: Cannot divide by zero!";
    return a / b;
}

function calculate(num1, operator, num2) {
    switch (operator) {
        case "+": return add(num1, num2);
        case "-": return subtract(num1, num2);
        case "*": return multiply(num1, num2);
        case "/": return divide(num1, num2);
        case "%": return num1 % num2;
        case "**": return num1 ** num2;
        default: return "Invalid operator";
    }
}

console.log("--- Mini-Project: Calculator Tests ---");
console.log(calculate(10, "+", 5));  
console.log(calculate(10, "-", 5));  
console.log(calculate(10, "*", 5));  
console.log(calculate(10, "/", 5));  
console.log(calculate(10, "/", 0));  
console.log(calculate(12, "%", 5));  
console.log(calculate(2, "**", 3));  


// ==========================================
// TASK 8.1: ARRAYS & ARRAY METHODS PRACTICE
// ==========================================
console.log("--- Task 8.1: Arrays & Methods ---");

// Exercise 1: Array Basics
const fruits = ["apple", "banana", "orange"];
const mixedItems = ["hello", 42, true, null];

// Accessing elements
console.log(`First fruit: ${fruits[0]}`);       // apple
console.log(`Array size: ${fruits.length}`);    // 3

// Modifying arrays
fruits.push("grape");        // Add to end
fruits.unshift("mango");     // Add to start
fruits.pop();                // Remove from end
fruits.shift();              // Remove from start
console.log("Modified fruits array:", fruits);


// Exercise 2: Array Methods (Using exact required structural numbers)
const numbers = [1, 2, 3, 4, 5];

// forEach - do something with each element
console.log("--- forEach loop output ---");
numbers.forEach(num => console.log(num * 2));

// map - transform each element
const doubled = numbers.map(num => num * 2);
console.log("Mapped (Doubled):", doubled);

// filter - keep elements that pass a test
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Filtered (Evens):", evenNumbers);

// find - get first element that passes test
const firstEven = numbers.find(num => num % 2 === 0);
console.log("Found First Even:", firstEven);

// reduce - combine all elements
const sum = numbers.reduce((total, num) => total + num, 0);
console.log("Reduced Total Sum:", sum);

// includes - check if element exists
console.log(`Does array include 3? ${numbers.includes(3)}`); // true




// ==========================================
// TASK 8.2: OBJECTS
// ==========================================
console.log("--- Task 8.2: Objects ---");

// Exercise 1: Object Basics (Custom non-placeholder data)
const mentorProfile = {
    firstName: "Baraka",
    lastName: "Nduta",
    age: 28,
    isStudent: false,
    hobbies: ["photography", "chess", "cycling"],
    address: {
        city: "Mombasa",
        country: "Kenya"
    }
};

console.log(mentorProfile.firstName);         // Dot notation
console.log(mentorProfile["lastName"]);       // Bracket notation
console.log(mentorProfile.address.city);      // Nested access

mentorProfile.age = 29;                       // Modifying property
mentorProfile.phone = "0710744988";         // Adding property
delete mentorProfile.isStudent;               // Removing property

// Exercise 2: Object Methods
const modularCalculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract(a, b) {                          // Shorthand syntax
        return a - b;
    },
    multiply: (a, b) => a * b                 // Arrow syntax
};
console.log(`Method Add Check: ${modularCalculator.add(10, 4)}`);

// Exercise 3: Object Iteration
const localAcademicScores = {
    math: 95,
    english: 88,
    science: 92
};

console.log("Keys:", Object.keys(localAcademicScores));
console.log("Values:", Object.values(localAcademicScores));

for (const [subject, score] of Object.entries(localAcademicScores)) {
    console.log(`${subject}: ${score}`);
}

// ==========================================
// TASK 8.3: ARRAY OF OBJECTS
// ==========================================
console.log("--- Task 8.3: Array of Objects ---");

// Array of students used for exercises (Matches requested structure and constraints)
const campusStudents = [
    { name: "Alice", age: 22, grade: 85, major: "CS" },
    { name: "Bob", age: 20, grade: 72, major: "Math" },
    { name: "Charlie", age: 23, grade: 90, major: "CS" },
    { name: "Diana", age: 21, grade: 88, major: "Physics" },
    { name: "Eve", age: 22, grade: 95, major: "CS" }
];

// 1. Get all student names
const names = campusStudents.map(student => student.name);
console.log("Names:", names);

// 2. Get students with grade > 80
const highAchievers = campusStudents.filter(student => student.grade > 80);
console.log("High Achievers:", highAchievers);

// 3. Find the student named "Charlie"
const charlie = campusStudents.find(student => student.name === "Charlie");
console.log("Found Charlie:", charlie);

// 4. Calculate average grade
const totalGradesSum = campusStudents.reduce((sum, student) => sum + student.grade, 0);
const avgGrade = totalGradesSum / campusStudents.length;
console.log("Average Grade:", avgGrade);

// 5. Get CS majors only
const csMajors = campusStudents.filter(student => student.major === "CS");
console.log("CS Majors:", csMajors);

// 6. Sort by grade (highest first) using a copy array via spread operator
const sortedByGrade = [...campusStudents].sort((a, b) => b.grade - a.grade);
console.log("Sorted by Grade:", sortedByGrade);

// 7. Check if any student has grade > 90
const hasTopStudent = campusStudents.some(student => student.grade > 90);
console.log("Has Top Student (>90)?", hasTopStudent);

// 8. Check if all students are passing (grade >= 60)
const allPassing = campusStudents.every(student => student.grade >= 60);
console.log("Are all students passing?", allPassing);

// ==========================================
// TASK 8.4: JSON — DATA AS TEXT
// ==========================================
console.log("--- Task 8.4: JSON Processing ---");

const postsJson = '[{"id":1,"title":"Welcome","likes":12,"published":true},{"id":2,"title":"Draft ideas","likes":0,"published":false},{"id":3,"title":"Week 4 recap","likes":30,"published":true}]';

// 1. Parse JSON string into an array
const parsedPosts = JSON.parse(postsJson);

// 2. Keep only published posts, 3. Sort them by likes (highest first), 4. Map them to descriptive strings
const formattedPosts = parsedPosts
    .filter(post => post.published === true)
    .sort((a, b) => b.likes - a.likes)
    .map(post => `${post.title} (${post.likes} likes)`);

console.log("Processed Posts Strings:", formattedPosts);

// 5. JSON.stringify back to text
const postTextOutput = JSON.stringify(parsedPosts, null, 2);
console.log("JSON Type Verification:", typeof postTextOutput);
