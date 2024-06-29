export class MyService {

  static instance: MyService | null = null;

  private constructor(private name: string) {}

  getName() {
    return this.name;
  }

  static create(name: string) {
    if (!MyService.instance) {
      console.log('Creating');
      MyService.instance = new MyService(name);
    }
    return MyService.instance;
  }
}


const name = MyService.create('MyService');
console.log(name.getName());

const name2 = MyService.create('MyService 2');
console.log(name2.getName());
const name3 = MyService.create('MyService 3');
console.log(name3.getName());

console.log(name === name2);
