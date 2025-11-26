{
  //
  //Function with Generic

  const createArray = (param: string): string[] => {
    return [param];
  };
  const result1 = createArray("bangladesh");

  //Generic function is here !!
  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const resGeneric = createArrayWithGeneric<string>("bangladesh");

  type User = { id: number; name: string };

  const resGenericObj = createArrayWithGeneric<User>({
    id: 121,
    name: "Mr.pasan",
  });

  //Generic function is here !!
  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const resGeneric1 = createArrayWithTuple<string, number>(
    "bangladesh",
    147570
  );

  const resGeneric10 = createArrayWithTuple<string, { name: string }>(
    "bangladesh",
    {
      name: "Asia",
    }
  );

  //Fixed course added the random objects of student

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web development";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    name: "Mr:X",
    email: "x@Gmail.com",
    devType: "NLWB",
  });
  const student2 = addCourseToStudent({
    name: "Mr:Y",
    email: "y@Gmail.com",
    hasWatch: "AppleWatch",
  });

  //
}
