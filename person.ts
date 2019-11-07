import { IPerson } from './iperson';

export abstract class Person implements IPerson {
    private firstName : string;
    private lastName : string;
    private birthdate : Date;

    constructor(firstName: string, lastName: string, birthdate: Date) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.birthdate = birthdate;
    }

    getAge(): number {
      return 0;
    }

    getName(): string {
      return this.firstName + " " + this.lastName;
    }
  }