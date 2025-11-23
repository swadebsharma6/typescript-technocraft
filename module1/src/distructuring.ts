// Destructuring

const users = {
  id: 701012,
  name: {
    firstName: "Swadeb",
    middleName: "Dev",
    lastName: "Sharma",
  },
  contactNo: "01761073247",
  address: "Cox bazar",
};

const {
  contactNo,
  name: { middleName },
} = users;

// Array Destructuring

const myFriends = ["Maya", "Felo", "daya", "Dilip", "Sujay", "Monika"];

const [, , , bestFriend, ...rest] = myFriends;
