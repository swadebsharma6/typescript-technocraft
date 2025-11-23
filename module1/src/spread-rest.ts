{
  // Learning Spread Operator

  // Spread Operator in Array
  const bros1: string[] = ["Mir", "Firoj", "Mijan"];
  const bros2: string[] = ["Tonmoy", "Nahid", "Rahat"];

  bros1.push(...bros2);

  // Spread in Object
  const mentors1 = {
    typeScript: "Mizba",
    redux: "Mir",
    dbms: "Mizan",
  };

  const mentors2 = {
    prisma: "Firaj",
    next: "Tonmoy",
    cloud: "Nahid",
  };

  const mentorsList = {
    ...mentors1,
    ...mentors2,
  };

  // Learn Rest Operator

  const greetFriends = (...friends: string[]) => {
    //     console.log(`Hi ${friend1}  ${friend2}`);

    friends.forEach((friend: string) => console.log(`Hi ${friend}`));
  };

  greetFriends("Abul", "Kamal", "Jamal");
}
