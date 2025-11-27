{
  //conditional type

  type A1 = number;
  type B1 = string;

  type x = A1 extends null ? true : false; //conditional type

  type y = A1 extends null ? true : B1 extends undefined ? undefined : any; //conditional type

  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
    track: string;
  };

  // car ase kina, bike ase kina, ship ase kina, track ase kina
  //   type CheckVehicle<T> = T extends "bike" | "car" | "ship" ? true : false; // hard core
  type CheckVehicle<T> = T extends keyof Sheikh ? true : false; //

  //   type HasBike = CheckVehicle<'ship'>
  type HasTrack = CheckVehicle<"track">;

  //
}
