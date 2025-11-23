// Reference Type: Object

const users = {
  name: "Swadeb",
  age: 32,
  position: "OSS-Supervisor",
}; // Implicite data type

const user2: {
  //   company: "PH Hero Bangladesh"; //Literal type value
  readonly company: string;
  firstName: string;
  middleName?: string; //Optional type
  lastName: string;
  isMarried: boolean;
} = {
  company: "PH Hero Bangladesh",
  firstName: "Swadeb",
  lastName: "Sharma",
  isMarried: true,
};

// user2.company = "Dev Hero";
