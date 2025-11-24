{
  //

  //Generic type

  //   type GenericArray = Array<string>;
  //   type GenericArray<param> = Array<param>;
  type GenericArray<T> = Array<T>;

  //   const rollNumbers: number[] = [1, 2, 3, 4];

  //   const rollNumbers: Array<number> = [1, 2, 34]; // Generic type
  const rollNumbers: GenericArray<number> = [1, 2, 34]; // Generic type

  //   const mentors: Array<string> = ["Mr.x", "mr,Y", "mr.Z"]; // Generic type
  const mentors: GenericArray<string> = ["Mr.x", "mr,Y", "mr.Z"]; // Generic type

  //   const boolArray: boolean[] = [true, false, true];
  //   const boolArray: Array<boolean> = [true, false, true];
  const boolArray: GenericArray<boolean> = [true, false, true];

  // Function---->Parameter-----> Arguments
  const add = (x: number, y: number) => x + y;
  add(20, 30);

  //In Array of Object use Generic types

  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "Deb",
      age: 30,
    },
    {
      name: "Maya",
      age: 28,
    },
  ];

  //Generic tuple : special type of array its have pairs with two value;

  type GenericTuple<X, Y> = [X, Y];

  const couple: [string, string] = ["Mr.Swadeb Sharma", "Mrs. Maya"]; // Tuple

  const couple2: GenericTuple<string, string> = [
    "Mr.Swadeb Sharma",
    "Mrs. Maya",
  ]; // Generic Tuple

  const userWithId: GenericTuple<number, { name: string; email: string }> = [
    1234,
    { name: "Swadeb", email: "a@gmail.com" },
  ];

  //
}
