{
  // OOP - inheritance

  class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(numOfHours: number) {
      console.log(`${this.name} will sleep for ${numOfHours}`);
    }
  }

  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  const student1 = new Student("Md. Rakib", 24, "Dhaka");
  student1;

  //   Class -02
  class Teacher extends Person {
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }

    getClass(numOfClass: number) {
      console.log(`${this.name} take class a day ${numOfClass}`);
    }
  }

  const teacher = new Teacher("Mr. Salman Rakib", 24, "Dhaka", "Professor");
  teacher;

  //
}
