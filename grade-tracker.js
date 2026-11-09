// ==========================================
// MINI-PROJECT: STUDENT GRADE TRACKER
// ==========================================

const gradeTracker = {
    // Array to hold student objects
    students: [],
    
    // 1. Add a new student
    addStudent(name, grades) {
        this.students.push({ name, grades });
    },
    
    // 2. Get a student by name (Returns the student object or null if not found)
    getStudent(name) {
        const student = this.students.find(s => s.name === name);
        return student ? student : null;
    },
    
    // 3. Calculate a student's average grade across all their subjects
    getStudentAverage(name) {
        const student = this.getStudent(name);
        if (!student) return 0;
        
        const gradesArray = Object.values(student.grades);
        if (gradesArray.length === 0) return 0;
        
        // Use reduce to sum, then divide by total subjects
        const totalSum = gradesArray.reduce((acc, score) => acc + score, 0);
        const average = totalSum / gradesArray.length;
        
        // Return as a number rounded precisely to 2 decimal places
        return parseFloat(average.toFixed(2));
    },

    // 4. Get class average for a subject across all students who take it
    getSubjectAverage(subject) {
        let totalScore = 0;
        let count = 0;
        
        for (const student of this.students) {
            if (student.grades[subject] !== undefined) {
                totalScore += student.grades[subject];
                count++;
            }
        }
        
        if (count === 0) return 0;
        return parseFloat((totalScore / count).toFixed(2));
    },
    
    // 5. Get top performer based on highest overall average
    getTopStudent() {
        if (this.students.length === 0) return null;
        
        let topName = "";
        let highestAvg = -1;
        
        for (const student of this.students) {
            const currentAvg = this.getStudentAverage(student.name);
            if (currentAvg > highestAvg) {
                highestAvg = currentAvg;
                topName = student.name;
            }
        }
        return topName;
    },
    
    // 6. Get names of students needing help (average < 70)
    getStrugglingStudents() {
        return this.students
            .filter(student => this.getStudentAverage(student.name) < 70)
            .map(student => student.name);
    },

    // 7. Scale numerical scores to standard letter grades
    getLetterGrade(score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    },
    
    // 8. Generate formatted report card string
    generateReportCard(name) {
        const student = this.getStudent(name);
        if (!student) return "Student not found.";
        
        const overallAvg = this.getStudentAverage(name);
        const overallLetter = this.getLetterGrade(overallAvg);
        
        let report = `\n========================================\n`;
        report += `        REPORT CARD FOR: ${student.name.toUpperCase()} \n`;
        report += `========================================\n`;
        
        // Loop through individual grades using Object.entries
        for (const [subject, score] of Object.entries(student.grades)) {
            const letter = this.getLetterGrade(score);
            report += `${subject.padEnd(12)}: ${score} (${letter})\n`;
        }
        
        report += `----------------------------------------\n`;
        report += `OVERALL AVERAGE : ${overallAvg}%\n`;
        report += `FINAL GRADE     : ${overallLetter}\n`;
        report += `========================================`;
        
        return report;
    }
}; // Object closes here cleanly

// --- TEST IMPLEMENTATION SUITE ---
gradeTracker.addStudent("Alice", { math: 95, english: 88, science: 92 });
gradeTracker.addStudent("Bob", { math: 72, english: 85, science: 78 });
gradeTracker.addStudent("Charlie", { math: 60, english: 65, science: 58 });

console.log("--- Mini-Project: Student Grade Tracker Results ---");
console.log(gradeTracker.getStudentAverage("Alice"));      // Output: 91.67
console.log(gradeTracker.getSubjectAverage("math"));       // Output: 75.67
console.log(gradeTracker.getTopStudent());                 // Output: Alice
console.log(gradeTracker.getStrugglingStudents());         // Output: ['Charlie']
console.log(gradeTracker.generateReportCard("Alice"));      // Output: Stylized Report Card
