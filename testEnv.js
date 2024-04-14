function Animal(name, sound) {
  this.name = name;
  this.sound = sound;
  
  this.vocalize = function() {
    console.log("The", this.name, "says", this.sound);
  };
}

function Cat(name) {
  Animal.call(this, "cat", "meow");
  
  this.pet = function() {
    console.log("The", this.name, "named", name, "purrs.");
  }
}

function Dog(name) {
  Animal.call(this, "dog", "woof");
  
  this.pet = function() {
    console.log("The", this.name, "named", name, "wags its tail.");
  }
}

var ginger = new Dog("Ginger");
var tiger = new Cat("Tiger");

tiger.pet();