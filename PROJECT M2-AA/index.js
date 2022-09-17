// function greetTheStudent(studentName) { // parameter
//     return `Hello there ${studentName}`;
// }

// do not repeat yourself (DRY)

// fat arrow function 
// const greetTheStudent = (studentName)=> {
//     return `Hello there ${studentName}`;
// }

const greetTheStudent = studentName => `Hello there ${studentName}`

// const fullName = function ( firstName, middleName, lastName){
//     return `${lastName}, ${middleName}, ${firstName}`
// }

const fullName =  (firstName, middleName, lastName) => `${lastName}, ${middleName}, ${firstName}`;


// const student = 'Abdulrahman Kabia'
// const greet = greetTheStudent(student); // argument
// console.log(greet);

const titleName = fullName('Abdul', 'Rahman', 'Kabia');
console.log(titleName)