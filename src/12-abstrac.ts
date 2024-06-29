import { Animal, Dog } from "./09-Acceso-protegido";

// Ya no se puede crear por que tiene abstraccion la clase padre Animal
//const animal = new Animal('elite');

//animal.greeting();

const chesse = new Dog('chesse', 'rick');
chesse.greeting();
chesse.woof(3);
