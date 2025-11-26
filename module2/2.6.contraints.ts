{
  //
  //Constraints -->

  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Next Level Web development";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
  }>({
    id: 701012,
    name: "Mr:X",
    email: "x@Gmail.com",
    devType: "NLWB",
  });
  const student2 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    hasWatch: string;
  }>({
    id: 701013,
    name: "Mr:Y",
    email: "y@Gmail.com",
    hasWatch: "AppleWatch",
  });

  const student3 = addCourseToStudent({
    id: 701014,
    name: "Mr.Z",
    email: "z@gmail.com",
    emni: "emni",
  });
  //
}
