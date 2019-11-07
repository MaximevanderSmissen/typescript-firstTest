export interface IPerson {
    firstName: string;
    lastName: string;
    birthdate: Date;

    getAge() : number;
    getName() : string;
  }