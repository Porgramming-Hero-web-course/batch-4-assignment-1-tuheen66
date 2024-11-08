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
      return ` ${carAge} (assuming current year is ${new Date().getFullYear()} )`;
    }
  }

  

  //
}
