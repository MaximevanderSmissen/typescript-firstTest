import { Person } from './person';

export class Student extends Person {
    studentNumber : number;
    startDate : Date;
    graduationDate : Date;

    constructor(firstName : string, lastName : string, birthdate : Date, studentNumber : number, startDate : Date, graduationDate : Date) {
      super(firstName, lastName, birthdate);
      this.studentNumber = studentNumber;
      this.startDate = startDate;
      this.graduationDate = graduationDate;
    }
  }