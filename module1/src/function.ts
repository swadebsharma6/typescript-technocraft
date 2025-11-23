// Learning Function

// function add(num1, num2) {
//   return num1 + num2;
// }

function add(num1: number, num2: number): number {
  return num1 + num2;
}

add(2, 4);

const addArrow = (num1: number, num2: number): number => num1 + num2;

// Object ---> Function ---> Method

const poorUser = {
  name: "Swaeb",
  balance: 0,
  addBalance(balance: number): string {
    //return this.balance + balance;  // Use this is a number type
    return `My new balance is ${this.balance + balance}`; // this is for string type function
  },
};

const arr: number[] = [2, 3, 4, 5, 7];

const newArray: number[] = arr.map((ele: number): number => ele * ele);
