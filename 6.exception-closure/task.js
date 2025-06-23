function parseCount(valueToParse) {
  if (Number.isNaN(Number.parseFloat(valueToParse))) {
    throw new Error("Невалидное значение");
  }
  return Number.parseFloat(valueToParse);
}

function validateCount(valueToParse) {
  try {
    return parseCount(valueToParse);
  } catch (error) {
    return error;
  }
}

class Triangle {
  constructor(a, b, c) {
    if (a + b < c || b + c < a || a + c < b) {
      throw new Error("Треугольник с такими сторонами не существует");
    }

    this.a = a;
    this.b = b;
    this.c = c;
  }

  get perimeter() {
    return this.a + this.b + this.c;
  }

  get area() {
    const semiperimeter = this.perimeter / 2;
    const calculation = Math.sqrt(
      semiperimeter *
        (semiperimeter - this.a) *
        (semiperimeter - this.b) *
        (semiperimeter - this.c)
    );
    return Number(calculation.toFixed(3));
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    return {
      get area() {
        return "Ошибка! Треугольник не существует";
      },

      get perimeter() {
        return "Ошибка! Треугольник не существует";
      },
    };
  }
}
