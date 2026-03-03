import { performance } from 'node:perf_hooks';

/**
 * University of Pittsburgh Bradford - CIST 0265
 * Homework: Real-World Performance Analysis (Starter)
 */

// TASK 1: Define a 'Student' interface with an id (number) and name (string)
// [Your code here]

interface Student {id: number, name: string;}

class StudentRegistry {
    // TASK 2: Define a private array of Student objects
    private students: Student[] = []; 

    addStudent(s: Student): void {
        // TASK 3: Push student to the array
        this.students.push(s) // Like appending In Python --- taking s "placeholder variable" and putting it in students array!
    }

    /**
     * TASK 4: Linear Search O(n)
     * Requirement: Use a single loop to find a student by ID.
     */
    findStudentLinear(id: number): Student | undefined {
        for (const student of this.students) { // Python Ex. For student in students: 'this.students' is equivalent to self.students in python
            if (student.id === id) { //python if student ["id"] == id:
                return student; // python return student
            }
        }
        return undefined; // python return none
    }

    /**
     * TASK 5: Quadratic Duplicate Check O(n^2)
     * Requirement: Use NESTED loops to compare every student against 
     * every other student to find if any names are duplicated.
     */
    hasDuplicateNames(): boolean {
        for (let i = 0; i < this.students.length; i++) // Picks a student at random index. 
            for (let j = 0; j < this.students.length; j++) // Picks comparison index
                if (
                    i !== j &&
                    this.students[i].name === this.students[j].name // if j and I are not the same and names returns true
                ){
                    return true;
                }
        return false; // no matches = false
    }

    /**
     * TASK 6: Performance Measurement
     * Fill in the start/end timers for both algorithms.
     */
    runPerformanceTest(): void {
        const testSizes = [10, 100, 1000, 5000];
        
        const results = testSizes.map(n => {
            this.students = [];
            for (let i = 0; i < n; i++) {
                this.addStudent({ id: i, name: `Student ${i}` });
            }

            // --- TIME THE LINEAR SEARCH ---
            // TODO: Start timer, hint, uses performance.now();
            const startlineartime = performance.now();
            this.findStudentLinear(-1); 
            // TODO: End timer
            const endlinearTime = performance.now(); // Replace with (end - start)
            const linearTime = endlinearTime - startlineartime;

            // --- TIME THE QUADRATIC CHECK ---
            // TODO: Start timer
            const startquadraticTime = performance.now();
            this.hasDuplicateNames();
            // TODO: End timer
            const endquadraticTime = performance.now(); // Replace with (end - start)
            const quadraticTime = endquadraticTime - startquadraticTime;
            return {
                "Input Size (n)": n.toLocaleString(),
                "Linear (ms)": linearTime.toFixed(4),
                "Quadratic (ms)": quadraticTime.toFixed(4)
            };
        });

        console.log("\n--- Lab Results: Algorithmic Growth ---");
        console.table(results);
    }
}

const registry = new StudentRegistry();
registry.runPerformanceTest();