// Class is like a blueprint for an object. In js/ts, its just syntactic sugar.
interface HumanBeing {
  name: string;
  dob: Date;
}
export default class Human {
  name: string;
  private dob: Date;
  constructor(name: string, dob: Date) {
    this.name = name;
    this.dob = dob;
  }
  getDob(): Date {
    return this.dob;
  }
}

const firstHuman = new Human("Adam", new Date(0, 0, 1, 0, 0, 0));
console.log(firstHuman.getDob());
