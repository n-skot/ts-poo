/*function fun(value:unknown) {
  return value;
}

function fun(value:string | number) {
  return value;
}*/

import { Dog } from "./09-Acceso-protegido";

/*function generics2<type, type2>(value: type) {
  let arraysee: type[] = [];
  return value;
}

generics2<number, string>(2);
generics2<number[], string>([1, 2, 3]);
*/

function generics<type>(value: type) {
  return value;
}

generics(12).toPrecision();
generics<number>(54).toFixed();
generics<string>('54').toLowerCase();
generics<number[]>([1,2,3]).forEach
const fifi = new Dog('fifi', 'rich');
generics<Dog>(fifi).greeting()

//Promise<boolean>
//axio.get<string[]>()  
