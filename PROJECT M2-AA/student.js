var students = [];

var student = {
    name: 'Joan Smith',
    birthYear: 2002,
    course: 'IFT 458',
    grade: 90,
    age: function calculate() {
        if(this.active){
            return 2002 - this.birthYear;
        }
    }
}

var student2 = {
    name: 'Andy Moore',
    birthYear: 2000,
    course: 'IFT 458',
    grade: 100,
    age: function () {
        if(this.active){
           return 2022 - this.birthYear;
        }
        else{
            return 0;
        }
    }
}

students.push(students);
students.push(student2);
students.forEach((item) => console.log(item.age()));

console.log(students);

// console.log(student2.age())
// console.log(student.age())