{
  //Generic constraint with keyof Operator

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = " bike" | "car" | "ship"; //manually

  type Owner2 = keyof Vehicle;

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "Dev",
    age: 28,
    address: "cox",
  };

  const car = {
    brand: "Toyota 100",
    price: 3333333333,
    country: "Bd",
    shop: "Dha",
  };

  const result1 = getPropertyValue(user, "name");

  const result2 = getPropertyValue(car, "brand");

  //   user.name ----Dev
  //   user["name"]; //----28

  //
}
