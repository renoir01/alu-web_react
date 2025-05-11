// Task 5: Advanced types Part 1
// DirectorInterface with expected methods
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// TeacherInterface with expected methods
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class implementing DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

// Teacher class implementing TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// Function to create an employee based on salary
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// Test createEmployee function
console.log(createEmployee(200)); // Should return Teacher
console.log(createEmployee(1000)); // Should return Director
console.log(createEmployee('$500')); // Should return Director

// Task 6: Creating functions specific to employees
// Type predicate function to check if employee is Director
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// Function to execute work based on employee type
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// Test executeWork function
console.log(executeWork(createEmployee(200))); // Should output: Getting to work
console.log(executeWork(createEmployee(1000))); // Should output: Getting to director tasks

// Task 7: String literal types
// Define String literal type for Subjects
type Subjects = 'Math' | 'History';

// Function to teach class based on subject
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  } else {
    // This should never happen due to the type constraint
    return 'Invalid subject';
  }
}

// Test teachClass function
console.log(teachClass('Math')); // Should output: Teaching Math
console.log(teachClass('History')); // Should output: Teaching History
