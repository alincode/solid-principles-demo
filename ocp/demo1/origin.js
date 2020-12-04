// 計算面積
function calculatorArea(shapes) {
  let area = 0; // 總面積
  for (let shape of shapes) {
    // 是否有半徑，這個屬性？
    if (shape.radius) {
      // 圓形面積公式
      area += shape.radius * shape.radius * Math.PI;
    } else {
      // 長方形面積公式
      area != shape.height * shape.weight;
    }
  }
  // 回傳多個物件加總後的總面積
  return area;
}

let shapes = [
  {
    // 圓形
    radius: 3,
  },
  {
    // 圓形
    radius: 4,
  },
  {
    // 長方形
    height: 2,
    weight: 3,
  },
];

// 總面積: 78.53981633974483
console.log(calculatorArea(shapes));
