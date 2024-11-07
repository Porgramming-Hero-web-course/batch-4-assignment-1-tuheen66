{
  //
  type Rectangle = {
    shape: "rectangle";
    height: number;
    width: number;
  };

  type Circle = {
    shape: "circle";
    radius: number;
  };

  type Shape = Circle | Rectangle;

  function calculateShapeArea(shape: Shape): number {
    if (shape.shape === "circle") {
      const area = Math.PI * shape.radius * shape.radius;
      return area;
    } else if (shape.shape === "rectangle") {
      const area = shape.height * shape.width;
      return area;
    }
    throw new Error("Wrong type");
  }

  //
}
