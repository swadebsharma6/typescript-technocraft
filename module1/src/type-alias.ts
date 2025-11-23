//Type Alias

type Student = {
  name: string;
  age: number;
  gender: string;
  contactNo?: string;
  address: string;
};

// const student1: {
//   name: string;
//   age: number;
//   gender: string;
//   contactNo: string;
//   address: string;
// } = {
//   name: "rakib Ullah",
//   age: 18,
//   gender: "Male",
//   contactNo: "2567543543",
//   address: "cox",
// };
const student1: Student = {
  name: "rakib Ullah",
  age: 18,
  gender: "Male",
  contactNo: "2567543543",
  address: "cox",
};

const student2: Student = {
  name: "sakib khan",
  age: 32,
  gender: "male",
  address: "dhk",
};

const student3: Student = {
  name: "bappa raj",
  age: 52,
  gender: "male",
  address: "dhk",
};

// Another Example of type Alias

type UserName = string;
type IsAdmin = true;

const userName: UserName = "SWADEB SHARMA";

// Type Alias with Function

type Add = (num1: number, num2: number) => number;

// const add = (num1: number, num2: number): number => num1 + num2;

const add: Add = (num1, num2) => num1 + num2;
