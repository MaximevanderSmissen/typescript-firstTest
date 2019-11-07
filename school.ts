import { IPerson } from './iperson';

export class School {
  private persons : Array<IPerson>;

  constructor() {
    this.persons = [];
  }

  size(): number {
    return this.persons.length;
  }

  add(value: IPerson): void {
    this.persons.push(value);
  }

  get(index: number): IPerson {
    return this.persons[index];
  }

  remove(index: number) : IPerson {
    let person : IPerson = this.persons[index];
    this.persons = this.persons.splice(index, 1);
    return person;
  }
}