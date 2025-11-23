// Nullable type  // Unknown type

const searchName = (value: string | null) => {
  if (value) {
    console.log("Searching");
  } else {
    console.log("There is nothing to search");
  }
};

searchName(null);

// Unknown type  : type of ----------> Javascript

const getSpeedInMeterPerSecond = (value: unknown) => {
  if (typeof value === "number") {
    const convertedSpeed = (value * 1000) / 3600;
    console.log(`The speed id ${convertedSpeed} ms`);
  } else if (typeof value === "string") {
    const [result, unit] = value.split(" ");
    const numberResult = parseFloat(result);
    const convertedSpeed = (numberResult * 1000) / 3600;
    console.log(convertedSpeed);
  } else {
    console.log("Wrong input");
  }
};

getSpeedInMeterPerSecond(500);
