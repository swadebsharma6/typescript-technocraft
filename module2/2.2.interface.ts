{
  //
  // Type Alias VS Interface

  type User1 = {
    name: string;
    age: number;
    email: string;
  };

  type UserWithRoll1 = User1 & { role: string };

  const user1: UserWithRoll1 = {
    name: "Swadeb",
    age: 30,
    email: "swadeb@gmail.com",
    role: "Web Developer",
  };

  //   const user1: User1 = {
  //     name: "Swadeb",
  //     age: 30,
  //     email: "swadeb@gmail.com",
  //   };

  //   Interface
  interface User2 {
    id: number;
    class: string;
    name: string;
    address: string;
  }

  interface UserWithRole2 extends User2 {
    role: string;
  }

  const user2: UserWithRole2 = {
    id: 121,
    class: "6",
    name: "Maya",
    address: "Cox",
    role: "Midwife",
  };

  //
}
