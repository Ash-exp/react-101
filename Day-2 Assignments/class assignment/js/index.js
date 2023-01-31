"use strict";
class User {
    constructor(name, age, mobile) {
        this.name = name;
        this.age = age;
        this.mobile = mobile;
    }
}
class Employee extends User {
    constructor(name, age, mobile, designation, office_time, salary) {
        super(name, age, mobile);
        this.designation = designation;
        this.office_time = office_time;
        this.salary = salary;
    }
    printEmployee() {
        console.log(`The Employee name is ${this.name} and the age is ${this.age} earning ${this.salary} on designation ${this.designation}`);
    }
}
let employee = new Employee('ASUTOSH', 12, 123, 'string', 'string', 123);
employee.printEmployee();
