// Ternary Operator

const age = 15;

const isAdult = age >= 18 ? "Adult" : "Not Adult";
// console.log({ isAdult });

//Nullish coalescing Operator

const isAuthentication = "";

const result1 = isAuthentication ?? "Guest";

const result2 = isAuthentication ? isAuthentication : "Guest2";

// console.log({ result1 });
// console.log({ result2 });

//Optional Chaining

type User = {
  name: string;
  address: {
    city: string;
    road: string;
    presentAddress?: string;
    permanentAddress?: string;
  };
};

const user: User = {
  name: "Swadeb Sharma",
  address: {
    city: "Cox",
    road: "120, Rajapalong",
    presentAddress: "Ukhiya thana",
  },
};

// Find the permanent address
const permanentAddress =
  user?.address?.permanentAddress ?? "No Permanent Address";
console.log({ permanentAddress });
