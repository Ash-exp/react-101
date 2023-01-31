"use strict";
class Shape {
    constructor(a) {
        this.Area = a.width * a.height;
    }
}
class Rectangle extends Shape {
    disp() {
        console.log('Area of the rectangle:  ' + this.Area);
    }
}
var obj = new Rectangle({
    height: 233,
    width: 544,
});
obj.disp();
