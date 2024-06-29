export abstract class Animal {

  constructor(protected name: string) {}

  public move(): string {
    return `Moving along`;
  }

  public greeting(): string {
    return `Hello I'm ${this.name}`;
  }

  protected doSomthing(): string {
    return 'I am doing somthing';
  }
}

export class Dog extends Animal{

  constructor(
    name: string,
    public owner: string,
  ) {
    super(name);
  }

    woof(times: number): void {
      for (let index = 0; index < times; index++) {
        console.log('woof!');
      }

      this.doSomthing();
    }

    move() {
      super.move();
      return 'I am a dog and I am moving';
    }
}

const fifi = new Animal('fifi');

console.log(fifi.move());

console.log(fifi.greeting());

const chesse = new Dog('chesse', 'rich');

console.log(chesse.greeting());
chesse.woof(5);
console.log(chesse.owner);
