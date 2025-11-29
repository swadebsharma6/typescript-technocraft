{
  //Utility type

  // Pick type
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };
  type Name = Pick<Person, "name">;
  type Age = Pick<Person, "name">;
  type NameAge = Pick<Person, "name" | "age">;

  //Omit type
  type ContactInfo = Omit<Person, "name" | "age">;

  //Required
  type PersonRequired = Required<Person>;

  //Partial
  type PersonPartial = Partial<Person>;

  //Readonly
  type PersonReadOnly = Readonly<Person>;

  const person1: PersonReadOnly = {
    name: "Swadeb",
    age: 27,
    email: "swadeb@gmail.com",
    contactNo: "01761073247",
  };

  //   person1.name = "Mr.Hablu";

  //Record type
  //   type MyObj = {
  //     a: string;
  //     b: string;
  //   };
  type MyObj = Record<string, string>;

  const EmptyObj: Record<string, unknown> = {};

  const obj1: MyObj = {
    a: "AAAA",
    b: "bbbb",
    c: "CCcc",
    d: "DDDDD",
  };

  //
}
