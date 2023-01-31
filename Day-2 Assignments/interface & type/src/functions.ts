interface input {
  height: number;
  width: number;
}

class Shape {
  Area: number;

  constructor(a: input) {
    this.Area = a.width * a.height;
  }
}

class Rectangle extends Shape {
  disp(): void {
    console.log('Area of the rectangle:  ' + this.Area);
  }
}

var obj = new Rectangle({
  height: 233,
  width: 544,
});
obj.disp();
