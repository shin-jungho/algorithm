//* 우선 animal 클래스와 지정된 필요함수들을 정의
function Animal(name, animalType) {
  this.name = name;
  this.animalType = animalType;
}
Animal.prototype.sayName = () => {
  console.log(this.name);
}
Animal.prototype.sayAnimalType = () => {
  console.log(this.animalType);
}

//* Dog 클래스가 Animal 클래스를 상속받기 위해서 Dog클래스를 정의한 후 해당 클래스의 프로토타입을 복사

function Dog(name) {
  Animal.call(this, name, 'Dog');
}

Dog.prototype = Object.create(Animal.prototype);

var myAnimal = new Animal('ditto', 'pokemon');
myAnimal.sayName();
myAnimal.sayAnimalType();

var myDog = new Dog('candy', 'dog');
myDog.sayName();
myDog.sayAnimalType();

