{
  //
  class Car {
    constructor(
      public make: string,
      public model: string,
      public year: number
    ) {}

    getCarAge(): string {
      const carAge = new Date().getFullYear() - this.year;
      return `The car is ${carAge} years old`;
    }
  }

  //
}
