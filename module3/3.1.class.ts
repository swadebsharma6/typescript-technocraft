{
  //Class
  class Animal {
    public name: string;
    public species: string;
    public sound: string;

    constructor(name: string, species: string, sound: string) {
      this.name = name;
      this.species = species;
      this.sound = sound;
    }
    //method
    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }

  const dog = new Animal("German Shepard", "Dog", "Ghew Ghew");
  const cat = new Animal("Partian", "Cat", "Meaw Meaw");
  //   dog.name;
  //   cat.sound

  cat.makeSound();

  //Example2
  class Animal2 {
    //parameter properties
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}

    //method
    makeSound2() {
      console.log(`The ${this.name} says ${this.sound} in example 02`);
    }
  }

  const dog2 = new Animal2("German Shepard", "Dog", "Ghew Ghew");
  const cat2 = new Animal2("Partian", "Cat", "Meaw Meaw");
  //   dog.name;
  //   cat.sound

  cat2.makeSound2();

  //
}
