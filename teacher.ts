import { Person } from './person';
import { TeacherLevel } from './teacherLevel';

export class Teacher extends Person {
  private employeeNumber : number;
  private startDate : Date;
  private level : TeacherLevel;

  constructor(firstName : string, lastName : string, birthdate : Date, employeeNumber : number, startDate : Date, level : TeacherLevel) {
    super(firstName, lastName, birthdate);
    this.employeeNumber = employeeNumber;
    this.startDate = startDate;
    this.level = level;
  }
}