class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent(student) {
        if (this.students.filter(s => s.email === student.email).length) {  /* alternatively could use this.students.includes, or another option - but it's a good chance to practice more filter */
            console.log(`The student ${student.email} is already registered!`);
        } else {
            this.students.push(student);
            console.log(`Registering ${student.email} to the bootcamp ${this.name}.`);
        }
        return this.students;
    }
}

const myBootcamp = new Bootcamp('Creative React', 'beginner');
const me = new Student('Christopher', 'fake@gmail.com', 'kingston vibes');
myBootcamp.registerStudent(me);
const asti = new Student('asti', '@fake@gmail.com', 'kingston vibes');
myBootcamp.registerStudent(asti);
console.log(me, asti, myBootcamp);

/// now, use array methods to generate a list of all students that are in 'kingston vibes', 
// so you can play them a nice ska track by the ethiopians: https://www.youtube.com/watch?v=L5fJQ9DYL0k

