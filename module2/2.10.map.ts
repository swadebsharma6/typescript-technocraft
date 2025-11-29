{
  // Mapped types

  const arrOfNumbers: number[] = [1, 3, 5, 7];
  //   console.log(arrOfNumbers);

  // make this array to arrOfStrings

  const arrOfStrings: string[] = arrOfNumbers.map((num) => num.toString());
  console.log(arrOfStrings);

  //Calculate a area

  type AreaNumber = {
    height: number;
    width: number;
  };

  //   type AreaString ={
  //       height: string;
  //       width: string;
  //   }

  type AreaString<T> = {
    [key in keyof T]: T[key]; //lookup type
  };

  //Map type with generic

  const are1: AreaString<{ height: string; width: number }> = {
    height: "50",
    width: 40,
  };

  //
}
