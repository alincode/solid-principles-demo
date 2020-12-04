class Shape {
  constructor() {}
  area() {}
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle extends Shape {
  constructor(height, weight) {
    super();
    this.height = height;
    this.weight = weight;
  }

  area() {
    return this.height * this.weight;
  }
}

// 計算總面積
function calculatorArea(shapes) {
  let area = 0; // 總面積
  for (let shape of shapes) {
    area += shape.area();
  }
  // 回傳多個物件加總後的總面積
  return area;
}

let shapes = [new Circle(3), new Circle(4), new Rectangle(2, 3)];
console.log(calculatorArea(shapes));
