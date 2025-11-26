{
  //

  //Generic with Interface

  interface Developer<T, X = null> {
    // default parameter == null/ undefined
    name: string;
    computer: {
      brand: string;
      model: string;
      releasedYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  //   Example -01

  type ColimaWatch = {
    brand: string;
    model: string;
    display: string;
  };

  //   const poorDeveloper: Developer<{
  //     brand: string;
  //     model: string;
  //     display: string;
  //   }> = {
  //     name: "swadeb",
  //     computer: {
  //       brand: "MSI",
  //       model: "MP 225 E2",
  //       releasedYear: 2025,
  //     },
  //     smartWatch: {
  //       brand: "Colmi",
  //       model: "P22",
  //       display: "IPS",
  //     },
  //   };
  const poorDeveloper: Developer<ColimaWatch> = {
    name: "swadeb",
    computer: {
      brand: "MSI",
      model: "MP 225 E2",
      releasedYear: 2025,
    },
    smartWatch: {
      brand: "Colmi",
      model: "P22",
      display: "IPS",
    },
  };

  //Example--02

  interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  interface YamahaBike {
    model: string;
    engine: string;
    price: number;
  }

  const richDeveloper: Developer<AppleWatch, YamahaBike> = {
    name: "Rich Dev",
    computer: {
      brand: "ASUS",
      model: "AS 225 E2",
      releasedYear: 2025,
    },
    smartWatch: {
      brand: "Apple watch",
      model: "P220",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "Yamaha",
      engine: "150 cc",
      price: 300000,
    },
  };

  //
}
