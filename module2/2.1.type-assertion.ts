{
  //
  // Type assertion:

  //Example 01
  let anything: any;

  anything = "Next Level Web Development";
  anything = 20202;

  anything as string;

  //Example 02

  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `The converted value is ${convertedValue}`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };

  const result = kgToGm(1000) as number;
  const result2 = kgToGm("1000") as string;
  console.log({ result });

  //   Example 03

  type CustomError = {
    message: string;
  };

  try {
  } catch (error) {
    //     console.log(error.message);
    console.log((error as CustomError).message);
  }

  //
}
