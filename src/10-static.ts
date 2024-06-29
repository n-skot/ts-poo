console.log(Math.PI);

class MyMath {
  static readonly PI = 3.1416

  static max(...n: number[]): number {
    return n.reduce((max, item) => max >= item ? max : item, -Infinity);    
  }
}

console.log('my math', MyMath.PI);
console.log('my math', MyMath.max(1,2,3,4,45,6,7,9,1));

const numbers: number[] = [12, 13, 14, 15, 120, 5, 2, 9, 3, 99, 36, 57, 89, 990];
const numbers1: number[] = [-1, -8, -3, -5, -2];
console.log('my math', MyMath.max(...numbers));
console.log('my math', MyMath.max(...numbers1));

